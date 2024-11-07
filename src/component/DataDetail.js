import React from "react";
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const DataDetail = () => {

    // const downloadJPG = () => {
    //     html2canvas(document.querySelector("#dwnjpg")).then(canvas => {
    //         const imgData = canvas.toDataURL('image/jpeg', 1.0);
    //         const link = document.createElement('a');
    //         link.href = imgData;
    //         link.download = 'payment-records-chart.jpg';

    //         // Trigger the download
    //         link.click();
    //     });
    // };
    // const downloadPDF = () => {
    //     const pdfWidth = 210; // A4 width in mm
    //     const pdfHeight = 297; // A4 height in mm
    //     html2canvas(document.querySelector("#payment-records-chart")).then(canvas => {
    //         const imgData = canvas.toDataURL('image/png');
    //         const pdf = new jsPDF('portrait', 'mm', [pdfWidth, pdfHeight]);

    //         // Adjust image dimensions to maintain aspect ratio
    //         const imgWidth = pdfWidth - 20; // padding of 10mm
    //         const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //         const margin = 10;

    //         pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
    //         pdf.save("custom-size-chart.pdf");
    //     });
    // };

    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container-fluid">
                        <div className="page-banner-title">
                            <h3>Data</h3>
                        </div>
                    </div>
                </section>
                <section className="department-all" >
                    <div className="container">

                        <Card className="mb-3">
                            <Card.Body>
                                <Row >
                                    <Breadcrumb as={Col} className="mb-0 ">
                                        <Breadcrumb.Item href="#">IPH</Breadcrumb.Item>
                                        <Breadcrumb.Item active>Sertifikasi Halal UMK</Breadcrumb.Item>
                                    </Breadcrumb>

                                    <Form.Group as={Col} className="align-self-center">
                                        <Form.Select defaultValue="Choose...">
                                            <option>- Pilih -</option>
                                            <option>PDF</option>
                                            <option>CSV</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                            </Card.Body>
                        </Card>
                        <div className="row mb-3">
                            <div className="col-lg-12">
                                <div className="card ">
                                    <div className="card-header ">
                                        <h3 className="fw-bold mb-0 text-primary" >Dataset A</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row g-0 mb-4">
                                            <div className="col-sm-6 fw-semibold">Judul:</div>
                                            <div className="col-sm-6 text-primary">Alexandra Della</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card ">
                                    <div className="card-header p-3">
                                        <h3 className="fw-bold  text-primary" >Dataset A</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row mb-4">
                                            <div className="col-sm-6 fw-semibold">Judul:</div>
                                            <div className="col-sm-6 text-primary">Alexandra Della</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-6 fw-semibold">Kategori:</div>
                                            <div className="col-sm-6 text-primary">Della</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-6 fw-semibold">Tanggal:</div>
                                            <div className="col-sm-6 text-primary">theme_ocean</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-6 fw-semibold">Penulis:</div>
                                            <div className="col-sm-6 text-primary">26 May, 2000</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-6 fw-semibold">Penerbit:</div>
                                            <div className="col-sm-6 text-primary">+01 (375) 5896 3214</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-6 fw-semibold">Sinopsis:</div>
                                            <div className="col-sm-6 text-primary">alex.della@outlook.com</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-6 fw-semibold">ISBN:</div>
                                            <div className="col-sm-6 text-primary">California, United States</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-6 fw-semibold">Jumlah Halaman:</div>
                                            <div className="col-sm-6 text-primary">20 Dec, 2023</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-6 fw-semibold">Lebar:</div>
                                            <div className="col-sm-6 text-primary">United States</div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-sm-6 fw-semibold">Panjang:</div>
                                            <div className="col-sm-6 text-primary">Email, Phone</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </section >
            </div >
        </>
    )
}

export default DataDetail