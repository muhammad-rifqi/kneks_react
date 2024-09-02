import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import EventDetailModal from "../component/modal/AgendaModal"; // Event detail modal
import Card from 'react-bootstrap/Card';


import { Calendar } from "react-multi-date-picker"


import DatePicker2 from "react-multi-date-picker"
import transition from "react-element-popper/animations/transition"


import { Form, Button, Container } from "react-bootstrap";
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

    const [selectedDates, setSelectedDates] = useState([]);

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
                <Container className="mt-5">
      <Form>
        <Form.Group controlId="formDatePicker">
          <Form.Label>Select Dates:</Form.Label>
          <DatePicker2
            value={selectedDates}
            onChange={setSelectedDates}
            multiple
            className="form-control" // Applying Bootstrap's form control class
            format="YYYY/MM/DD"
            style={{ height: "38px", width: "100%" }}
            inputClass="form-control"
          />
        </Form.Group>

       
      </Form>
    </Container>
                    <div className="container-sm">
                        <div className="row">
                            <div className="col-lg-12">
                                <DatePicker2
                                    animations={[
                                        transition({
                                            from: 35,
                                            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                        }),
                                    ]}
                                />
                            </div>
                            <div className="col-lg-4">
                                <Card>
                                    <Card.Body className="d-flex justify-content-center">
                                        <Calendar />
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
