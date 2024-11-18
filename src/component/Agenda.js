import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Swal from "sweetalert2";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import EventDetailModal from "../component/modal/AgendaModal"; // Event detail modal
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import { Calendar } from "react-multi-date-picker"
// import DatePicker from "react-multi-date-picker"
import "react-multi-date-picker/styles/colors/red.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
const Agenda = () => {
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    // const [selectedDates, setSelectedDates] = useState();
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchDataCari, setDataCari] = useState([]);
    const [startDate, setStartDate] = useState("");
    const calendarRef = useRef(null); // Reference for FullCalendar
    dayjs.locale('id');
    const handleEventClick = (selected) => {
        const eventId = selected.event.id;
        const event = posts.find(evt => String(evt.id) === eventId);
        setSelectedEvent(event);
        setShowDetailModal(true);
    };

    // Fetch events data on initial render
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_AGENDA;
                const response = await axios.get(`${url}${endpoint}`);
                setPosts(response.data);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,
                });
            }
        };
        fetchPosts();
    }, []);


    useEffect(() => {
        const fetchAgenda = async () => {
            let ddd = !searchQuery ? "DJM" : searchQuery;
            try {
                const url = process.env.REACT_APP_API_URL + '/search_agenda?cari=' + ddd;
                const response = await axios.get(`${url}`);
                setDataCari(response.data);
            } catch (err) {
                console.log(err)
            }
        };
        fetchAgenda();
    }, [searchQuery]);

    // const filteredEvents = posts.filter(event =>
    //     event.title.toLowerCase().includes((searchQuery || "").toLowerCase())
    // );

    const convertToSlug = (title) => {
        if (!title) return "";
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    const filteredEvents = posts.filter(event => {
        const matchesSearch = searchQuery ? event.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
        const matchesDate = startDate ? dayjs(event.agenda_datetime).isSame(dayjs(startDate), 'day') : true;
        return matchesSearch && matchesDate;
    });


    useEffect(() => {
        if (calendarRef.current) {
            const calendarApi = calendarRef.current.getApi();

            if ((searchQuery.length > 0 || startDate) && filteredEvents.length > 0) {

                filteredEvents.forEach(event => {

                    if (event.agenda_datetime) {
                        calendarApi.gotoDate(event.agenda_datetime);
                    } else {
                        console.warn("Invalid agenda_datetime:", event);
                    }

                });
            } else {
                calendarApi.gotoDate(new Date());
            }
        }
    }, [searchQuery, filteredEvents, startDate]);

    if (!searchDataCari) return "Tidak Data";


    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <FormControl
            value={value}
            onClick={onClick}
            ref={ref}
            placeholder="Filter Tanggal"
            readOnly // Makes the input read-only
            style={{ border: '1px solid #ccc', padding: '8px' }}
        />
    ));
    return (
        <>
            <div className="page-wrapper">
                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Agenda</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section">
                    <div className="container-md">
                        <Row>
                            <Col lg={4} sm={12}>
                                <InputGroup className="mb-3">
                                    <DatePicker

                                        dateFormat="dd-MM-yyyy"
                                        // placeholderText="Filter Tanggal"
                                        onChange={(date) => setStartDate(date)}
                                        selected={startDate}
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        isClearable={!!startDate}
                                        customInput={<CustomInput />}
                                    />
                                    <InputGroup.Text id="basic-addon2"><i className="fa fa-calendar"></i></InputGroup.Text>
                                </InputGroup>

                            </Col>
                            <Col lg={6} sm={12}>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Cari Agenda..."
                                        aria-label="Cari Agenda..."
                                        style={{ border: '1px solid #ccc', padding: '8px' }}
                                        // size="sm"
                                        value={searchQuery}
                                        onChange={(e) => { setSearchQuery(e.target.value) }}
                                    />
                                    <InputGroup.Text id="basic-addon2"><i className="fa fa-search"></i></InputGroup.Text>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} >
                                <Card>
                                    <Card.Body className="d-flex justify-content-center">
                                        <Calendar months={["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]}
                                            weekDays={[["sun", "min"], ["mon", "sen"], ["tue", "sel"], ["wed", "rab"], ["thu", "kam"], ["fri", "jum"], ["sat", "sab"]]}
                                            style={{ zIndex: `0` }}
                                        />
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Body className="d-flex justify-content-center">
                                        <ul>
                                            {
                                                (   searchDataCari.length > 0) ?
                                                    searchDataCari.map((rrr) => {
                                                        return (
                                                            <li key={rrr?.id}> <a href={`/agenda/${convertToSlug(rrr?.title)}`}>{rrr?.title} - {rrr?.organizer}</a> 
                                                            </li>
                                                        );
                                                    })
                                                    : (
                                                        <li>
                                                            No Data
                                                        </li>
                                                    )
                                            }
                                        </ul>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col lg={8} >
                                <Card className="p-2 border-radius">
                                    <Card.Body>
                                        <FullCalendar
                                            ref={calendarRef} // Attach reference
                                            height="75vh"
                                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                                            headerToolbar={{ left: "title", right: "prev,dayGridMonth,next" }}
                                            initialView="dayGridMonth"
                                            locale="id"
                                            editable={true}
                                            selectable={true}
                                            selectMirror={true}
                                            dayMaxEvents={true}
                                            eventClick={handleEventClick}
                                            events={filteredEvents.map(event => ({
                                                id: String(event.id),
                                                title: event.title,
                                                date: event.agenda_datetime,
                                            }))}
                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>
                <EventDetailModal
                    show={showDetailModal}
                    handleClose={() => setShowDetailModal(false)}
                    event={selectedEvent}
                />
            </div>
        </>
    );
};

export default Agenda;
