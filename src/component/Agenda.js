import React, { useState } from "react";
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
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';



import { Calendar } from "react-multi-date-picker"


import DatePicker from "react-multi-date-picker"
import transition from "react-element-popper/animations/transition"


import "react-multi-date-picker/styles/colors/red.css";
const Agenda = () => {


    const [currentEvents, setCurrentEvents] = useState([]);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);


    const handleDateClick = (selected) => {
        // Handle date click to add events (if necessary)

    };

    const handleEventClick = (selected) => {
        const eventId = selected.event.id;
        const event = currentEvents.find(evt => evt.id === eventId);
        setSelectedEvent(event);
        setShowDetailModal(true);
    };

    const [selectedDates, setSelectedDates] = useState();

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        // Implement search logic if needed
        console.log('Cari apa' + searchTerm)
    };

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
                    <div className="container-sm">
                        <div className="row">


                            <div className="col-lg-12">
                                <Form>
                                    <Row>

                                        <Col lg={{ span: 4 }}>
                                            <DatePicker
                                                value={selectedDates}
                                                onChange={setSelectedDates}
                                                format="DD-MM-YYYY"
                                                placeholder="Filter Tanggal"
                                                style={{ padding: '16px ', width: '415px' }}
                                                animations={[
                                                    transition({
                                                        from: 35,
                                                        transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                                    }),
                                                ]}
                                            />

                                        </Col>
                                        <Col lg={{ span: 7 }}>
                                            <Form.Control
                                                value={searchTerm}
                                                onChange={handleChange}
                                                style={{ padding: '9px 20px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '12px', outline: 'none' }} placeholder="Cari Agenda..." />
                                        </Col>
                                        <Col lg={{ span: 1 }}>
                                            <Button variant="primary" type="submit" style={{ padding: '9px 20px', marginBottom: '10px', borderRadius: '4px', outline: 'none' }}><i className="flaticon-search-interface-symbol"></i></Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                            <div className="col-lg-4">

                                <Card>
                                    <Card.Body className="d-flex justify-content-center">
                                        <Calendar style={{ zIndex: "99" }} />
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
                                            editable={true}
                                            selectable={true}
                                            selectMirror={true}
                                            dayMaxEvents={true}
                                            select={handleDateClick}
                                            eventClick={handleEventClick}
                                            eventsSet={(events) => setCurrentEvents(events)}
                                            initialEvents={[
                                                { id: "12315", title: "All-day event", date: "2024-08-23" },
                                                { id: "5123", title: "Timed event", date: "2024-08-21" },
                                                { id: "5124", title: "Timed event", date: "2024-08-25" },
                                                { id: "5125", title: "Timed evendt", date: "2024-08-25" },
                                                { id: "5126", title: "Timed evenddt", date: "2024-08-25" },
                                            ]}
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
