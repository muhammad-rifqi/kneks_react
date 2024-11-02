import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



const Roadmap = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        // Implement search logic if needed
        console.log('Cari apa' + searchTerm)
    };
    return (
        <>
            <Form>
                <Row className="d-flex justify-content-end">
                    <Col lg={{ span: 7 }}>
                        <Form.Control
                            value={searchTerm}
                            onChange={handleChange}
                            style={{ padding: '9px 20px', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '12px', outline: 'none' }} placeholder="Cari Roadmap/Masterplan..." />
                    </Col>
                    <Col lg={{ span: 3 }} className="text-end">
                        <Button variant="primary" type="submit" style={{ padding: '11px 30px', marginBottom: '10px', borderRadius: '4px', outline: 'none' }}>Cari</Button>
                        <Button variant="danger" style={{ padding: '9px 30px', marginBottom: '10px', borderRadius: '4px', outline: 'none' }}>Reset</Button>
                    </Col>
                </Row>
            </Form>
            <div className="row row-gutter-y-30">

                <div className="col-12 col-md-6 col-xl-3">
                    <div className="team-card-x">
                        <div className="team-card-img-x">
                            <a href="/e-pustaka/detail"><img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" /></a>

                        </div>
                        <div className="team-card-content-x">
                            <h4><a href="/e-pustaka/detail">Road Map Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <p>21 Mei 2024</p>
                                <a href="#t" data-bs-toggle="tooltip" title="Downloadable">
                                    <i className="fa-solid fa-download" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                    <div className="team-card-x">
                        <div className="team-card-img-x">
                            <a href="/e-pustaka/detail"> <img src="/assets/image/berita.jpg" className="img-fluid" alt="img-40" /></a>

                        </div>
                        <div className="team-card-content-x">
                            <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <p>21 Mei 2024</p>
                                <a href="#t" data-bs-toggle="tooltip" title="Non Downloadable">
                                    <i className="fa-solid fa-download" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                    <div className="team-card-x">
                        <div className="team-card-img-x">
                            <a href="/e-pustaka/detail"><img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" /></a>

                        </div>
                        <div className="team-card-content-x">
                            <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <p>21 Mei 2024</p>
                                <a href="#t" data-bs-toggle="tooltip" title="Non Downloadable ">
                                    <i className="fa-solid fa-download" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                    <div className="team-card-x">
                        <div className="team-card-img-x">
                            <a href="/e-pustaka/detail"> <img src="/assets/image/berita.jpg" className="img-fluid" alt="img-40" /></a>

                        </div>
                        <div className="team-card-content-x">
                            <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <p>21 Mei 2024</p>
                                <a href="#t" data-bs-toggle="tooltip" title="Downloadable ">
                                    <i className="fa-solid fa-download" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                    <div className="team-card-x">
                        <div className="team-card-img-x">
                            <a href="/e-pustaka/detail"><img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" /></a>

                        </div>
                        <div className="team-card-content-x">
                            <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <p>21 Mei 2024</p>
                                <a href="#t" data-bs-toggle="tooltip" title="Downloadable ">
                                    <i className="fa-solid fa-download" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                    <div className="team-card-x">
                        <div className="team-card-img-x">
                            <a href="/e-pustaka/detail"> <img src="/assets/image/berita.jpg" className="img-fluid" alt="img-40" /></a>

                        </div>
                        <div className="team-card-content-x">
                            <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019a</a></h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <p>21 Mei 2024</p>
                                <a href="#t" data-bs-toggle="tooltip" title="Downloadable " target="_blank">
                                    <i className="fa-solid fa-download" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                    <div className="team-card-x">
                        <div className="team-card-img-x">
                            <a href="/e-pustaka/detail"><img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" /></a>

                        </div>
                        <div className="team-card-content-x">
                            <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <p>21 Mei 2024</p>
                                <a href="#t" data-bs-toggle="tooltip" title="Downloadable">
                                    <i className="fa-solid fa-download" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                    <div className="team-card-x">
                        <div className="team-card-img-x">
                            <a href="/e-pustaka/detail"> <img src="/assets/image/berita.jpg" className="img-fluid" alt="img-40" /></a>

                        </div>
                        <div className="team-card-content-x">
                            <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                            <div className="d-flex justify-content-between align-items-end">
                                <p>21 Mei 2024</p>
                                <a href="#t" data-bs-toggle="tooltip" title="Downloadable">
                                    <i className="fa-solid fa-download" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};

export default Roadmap;
