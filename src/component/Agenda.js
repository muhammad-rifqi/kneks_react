import React, { useState, useEffect } from "react";
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



import { Calendar } from "react-multi-date-picker"


import DatePicker from "react-multi-date-picker"
import transition from "react-element-popper/animations/transition"


import "react-multi-date-picker/styles/colors/red.css";


const Agenda = () => {


    // const [currentEvents, setCurrentEvents] = useState([]);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const [selectedDates, setSelectedDates] = useState();
    const [posts, setPosts] = useState([]);
    const handleDateClick = (selected) => {
        // Handle date click to add events (if necessary)
        
    };
    
    const handleEventClick = (selected) => {
        const eventId = selected.event.id;
        const event = posts.find(evt => String(evt.id) === eventId);
       
        setSelectedEvent(event);
        setShowDetailModal(true);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            // setLoading(true);
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
            } finally {
                // setLoading(false);
            }
        };

        fetchPosts();


    }, []);

    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    const weekDays = [
        ["sun", "min"], //[["name","shortName"], ... ]
        ["mon", "sen"],
        ["tue", "sel"],
        ["wed", "rab"],
        ["thu", "kam"],
        ["fri", "jum"],
        ["sat", "sab"],
    ]
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
                        <div className="row">


                            <div className="col-lg-12 ">

                                <Row>

                                    <Col lg={{ span: 4 }} >

                                        <InputGroup className="justify-content-end d-flex mb-3">
                                            <DatePicker
                                                value={selectedDates}
                                                onChange={setSelectedDates}
                                                format="DD-MM-YYYY"
                                                placeholder="Filter Tanggal"
                                                style={{ padding: '18px ', width: '100%' }}
                                                months={months}
                                                weekDays={weekDays}
                                                animations={[
                                                    transition({
                                                        from: 35,
                                                        transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                                    }),
                                                ]}
                                            />
                                            <InputGroup.Text id="basic-addon2" ><i className="fa fa-calendar"></i></InputGroup.Text>
                                        </InputGroup>

                                    </Col>
                                    <Col lg={{ offset: 1 }} >
                                    </Col>
                                    <Col lg={{ span: 6 }} >

                                        <InputGroup className="mb-3">
                                            <Form.Control
                                                placeholder="Cari Agenda..."
                                                aria-label="Cari Agenda..."
                                                aria-describedby="basic-addon2"
                                                style={{ border: '1px solid #ccc', padding: '8px' }}
                                                size="sm"
                                            />
                                            <InputGroup.Text id="basic-addon2" ><i className="fa fa-search"></i></InputGroup.Text>
                                        </InputGroup>
                                    </Col>

                                </Row>


                            </div>
                            <div className="col-lg-4">

                                <Card>
                                    <Card.Body className="d-flex justify-content-center">
                                        <Calendar style={{ zIndex: "99" }} months={months}
                                            weekDays={weekDays} />
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-8">

                                <Card className="p-2 border-radius" >
                                    <Card.Body>

                                        <FullCalendar
                                            height="75vh"
                                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                                            headerToolbar={{
                                                left: "title",
                                                right: "prev,dayGridMonth,next",
                                            }}

                                            initialView="dayGridMonth"
                                            locale="id"
                                            editable={true}
                                            selectable={true}
                                            selectMirror={true}
                                            dayMaxEvents={true}
                                            select={handleDateClick}
                                            eventClick={handleEventClick}
                                            // eventsSet={(events) => setCurrentEvents(events)}
                                            events={posts.map(i => ({
                                                id: String(i.id),
                                                title: i.title,
                                                date: i.agenda_datetime
                                            }))} // Make sure data is valid and formatted correctly



                                        />
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
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
