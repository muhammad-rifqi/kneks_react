import React, { useState } from "react";
import { getMonth } from "../utils";
import CalendarHeader from "./calendar/CalendarHeader";
import SideBar from "./calendar/SideBar";
import Month from "./calendar/Month";
const Agenda = () => {
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
                    <div className="container">
                        <div className="d-flex flex-column vh-100">
                            <CalendarHeader />
                            <div className="d-flex flex-grow-1">

                                <SideBar />
                                <Month />

                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}

export default Agenda