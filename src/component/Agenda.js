import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import EventDetailModal from "../component/modal/AgendaModal"; // Event detail modal
import Card from 'react-bootstrap/Card';

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

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
                            <div className="col-lg-4">
                                <Card>
                                    <Card.Body  className="d-flex justify-content-center">
                                        <DayPicker
                                            mode="single"
                                            required selected={[new Date()]}
                                            disabled={{ dayOfWeek: [0, 6] }}
                                        />
                                    </Card.Body>"
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
