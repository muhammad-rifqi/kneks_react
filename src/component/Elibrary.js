import React from "react";
const Elibrabry = () => {
    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>E-Librabry</h3>
                        </div>
                    </div>
                </section>
                <section className="department-details-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-3 col-xl-3">
                                <div className="sidebar">
                                    <div className="sidebar-widget-list-inner">
                                        <ul >
                                            <li><a href="#">Roadmap/Masterplan</a></li>
                                            <li><a href="#">Pidato/Paparan</a></li>
                                            <li><a href="#">Kajian/Penelitian</a></li>
                                            <li><a href="#">Publikasi</a></li>
                                            <li><a href="#">Regulasi</a></li>
                                            <li><a href="#">Siaran Pers</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row row-gutter-y-30">

                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="team-card-x">
                                            <div className="team-card-img-x">
                                                <img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" />

                                            </div>
                                            <div className="team-card-content-x">
                                                <h4><a href="team-details.html">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <p>21 Mei 2024</p>
                                                    <a href="#" data-bs-toggle="tooltip" title="download">
                                                        <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="team-card-x">
                                            <div className="team-card-img-x">
                                                <img src="/assets/image/berita.jpg" className="img-fluid" alt="img-40" />

                                            </div>
                                            <div className="team-card-content-x">
                                                <h4><a href="#">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <p>21 Mei 2024</p>
                                                    <a href="#" data-bs-toggle="tooltip" title="download">
                                                        <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                    </a>
                                                </div>
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

export default Elibrabry