import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
const Agenda = () => {
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };
    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
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
                            <div className="col-lg-3">

                            </div>
                            <div className="col-lg-9">
                                <FullCalendar
                                    height="75vh"
                                    plugins={[
                                        dayGridPlugin,
                                        timeGridPlugin,
                                        interactionPlugin,
                                        listPlugin,
                                    ]}
                                    headerToolbar={{
                                        left: "title",
                                        // center: "today",
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
                                        {
                                            id: "12315",
                                            title: "All-day event",
                                            date: "2024-08-23",
                                        },
                                        {
                                            id: "5123",
                                            title: "Timed event",
                                            date: "2024-08-21",
                                        },
                                        {
                                            id: "5124",
                                            title: "Timed event",
                                            date: "2024-08-25",
                                        },
                                        {
                                            id: "5124",
                                            title: "Timed event",
                                            date: "2024-08-25",
                                        },
                                        {
                                            id: "5124",
                                            title: "Timed event",
                                            date: "2024-08-25",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Agenda