import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import EventDetailModal from "../component/modal/AgendaModal"; // Event detail modal
import Card from 'react-bootstrap/Card';


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
                                <div className="sidebar-form-content">
                                    <div className="sidebar__item sidebar__item--search">
                                        <form action="#" className="sidebar__search">
                                        <label for="search" className="sr-only">Filter Tanggal</label>
                                            <DatePicker
                                                value={selectedDates}
                                                onChange={setSelectedDates}
                                                format="DD-MM-YYYY"
                                                placeholder="Filter Tanggal"
                                                animations={[
                                                    transition({
                                                        from: 35,
                                                        transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                                    }),
                                                ]}
                                            />
                                            <button type="submit" aria-label="search submit" className="thm-btn">
                                            <i class="fa-solid fa-calendar-days"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <Card>
                                    <Card.Body className="d-flex justify-content-center">
                                        <Calendar style={{zIndex:"99"}}/>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-8">
                                <div className="sidebar-form-content">
                                    <div className="sidebar__item sidebar__item--search">
                                        <form action="#" className="sidebar__search">
                                            <label for="search" className="sr-only">search here</label>
                                            <input type="text" placeholder="Search Here" />
                                            <button type="submit" aria-label="search submit" className="thm-btn">
                                                <i className="flaticon-search-interface-symbol"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
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
