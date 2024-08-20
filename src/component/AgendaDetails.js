import React from "react";
const AgendaDetails = () => {
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
                <section className="event-details-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="event-details-content-box">
                                    <h4>Webinar Keuangan</h4>
                                    <p style={{ textAlign: `justify` }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar">
                                    <div className="sidebar-widget-event-meta-box">
                                        <div className="sidebar-widget-event-meta-details">
                                            <div className="sidebar-widget-event-box">
                                                <h6>Waktu:</h6>
                                                <p className="m-0">8:00 am to 2:00 pm</p>
                                                <p className="m-0">20 October, 2022</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Penyelenggara:</h6>
                                                <p>Kementerian Keuangan</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Ketegori:</h6>
                                                <span>Webinar</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AgendaDetails