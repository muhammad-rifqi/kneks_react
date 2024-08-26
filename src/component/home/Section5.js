import React from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Section5 = () => {
    return (
        <section className="funfact-section">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-2 ">
                        <Card className="bg-dark text-white mb-2 text-center">
                            <Card.Body>
                                <h1 className="text-white">DASHBOARD</h1>
                                <Card.Text style={{ fontSize: `14px` }}>
                                    Event Ekonomi dan Keuangan Syariah 2024
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card >
                            <Card.Header className="p-3">
                                Pengelola
                            </Card.Header>
                            <Card.Body>
                                <div className="sidebar">
                                    <div className="sidebar-widget-list-inner">
                                        <ul>
                                            <li><a href="#t">BI</a></li>
                                            <li><a href="#t">BPJPH</a></li>
                                            <li><a href="#t">Kemenko PMK</a></li>
                                            <li><a href="#t">KNEKS</a></li>
                                            <li><a href="#t">OJK</a></li>
                                            <li><a href="#t">(blank)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-7" >
                        <div className="row pb-2">
                            <div className="col-lg-4">
                                <Card className="text-center">
                                    <Card.Body>
                                        <Card.Title>Total Kegiatan</Card.Title>
                                        <h1>
                                            93
                                        </h1>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4">
                                <Card className="text-center">
                                    <Card.Body>
                                        <Card.Title>Total Peserta</Card.Title>
                                        <h1>
                                            53.17K
                                        </h1>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-4">
                                <Card className="text-center">
                                    <Card.Body>
                                        <Card.Title>TotaL wilayah</Card.Title>
                                        <h1>
                                            47
                                        </h1>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className="card stretch stretch-full">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h5 className="card-title">Sertifikat Halal UMK</h5>

                            </div>
                            <div className="card-body custom-card-action p-0">
                                <div id="payment-records-chart"></div>
                            </div>

                        </div>
                        <div className="col-lg-12 pt-5">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="card stretch stretch-full">

                                        <div className="card-body custom-card-action p-0">
                                            <div id="payment-records-chartx"></div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card stretch stretch-full">

                                        <div className="card-body custom-card-action p-0">
                                            <div id="payment-records-charts"></div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <Card>
                            <Card.Body className="ml-3 mt-2 mr-2">
                                <div className="row g-0 mb-4">
                                    <div className="col-sm-6 fw-semibold">Nama Proyek:</div>
                                    <div className="col-sm-6 text-primary">Alexandra Della</div>
                                </div>
                                <div className="row g-0 mb-4">
                                    <div className="col-sm-6 fw-semibold">Nama Kegiatan</div>
                                    <div className="col-sm-6 text-primary">Opening Ceremony</div>
                                </div>
                                <div className="row g-0 mb-4">
                                    <div className="col-sm-6 fw-semibold">Deskripsi Kegiatan</div>
                                    <div className="col-sm-6 text-primary">Pembukaan Rangkaian Kegiatan ISEF 2024</div>
                                </div>
                                <div className="row g-0 mb-4">
                                    <div className="col-sm-6 fw-semibold">Tanggal Mulai</div>
                                    <div className="col-sm-6 text-primary">30 Oktober 2024</div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Section5