import React, { useEffect } from "react";
import html2canvas from 'html2canvas';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import jsPDF from 'jspdf';
const Data = () => {
    useEffect(() => {
        // Ensure ApexCharts is loaded before using it
        if (window.ApexCharts) {
            const chartOptions =
            {
                series: [
                    {
                        name: "Series 1",
                        data: [101, 41, 35, 51, 49, 62, 69, 91, 148]
                    },

                ],
                chart: {
                    height: 350,
                    type: 'line', // This specifies that it's a line chart

                    zoom: {
                        enabled: false
                    }
                },

                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'Pendaftaran sehati perbulan',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // alternating background colors
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            };

            const chart = new window.ApexCharts(document.querySelector("#payment-records-chart"), chartOptions);
            chart.render();

            // Cleanup function to destroy the chart when the component is unmounted
            return () => {
                chart.destroy();
            };
        }
    }, []);
    useEffect(() => {
        // Ensure ApexCharts is loaded before using it
        if (window.ApexCharts) {
            const chartOptions =
            {
                series: [
                    {
                        name: "Fasilitas",
                        data: [101, 41, 35, 51, 49, 62, 69, 91, 148]
                    },
                    {
                        name: "Reguler",
                        data: [110, 31, 55, 91, 99, 62, 69, 91, 148]
                    },
                    {
                        name: "Total",
                        data: [101, 41, 35, 13, 79, 62, 69, 91, 148]
                    },

                ],
                chart: {
                    height: 350,
                    type: 'line', // This specifies that it's a line chart

                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Perkembangan Sertifikat Halal Berdasarkan Jenis',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // alternating background colors
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            };

            const chart = new window.ApexCharts(document.querySelector("#payment-records-chartx"), chartOptions);
            chart.render();

            // Cleanup function to destroy the chart when the component is unmounted
            return () => {
                chart.destroy();
            };
        }
    }, []);
    useEffect(() => {
        // Ensure ApexCharts is loaded before using it
        if (window.ApexCharts) {
            const chartOptions =
            {
                series: [
                    {
                        name: "Series 1",
                        data: [101, 41, 35, 51, 49, 62, 69, 91, 148]
                    },

                ],
                chart: {
                    height: 350,
                    type: 'bar', // This specifies that it's a line chart

                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Progress Sertifikat Halal Gratis Untuk Pelaku UMK',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // alternating background colors
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            };

            const chart = new window.ApexCharts(document.querySelector("#payment-records-charts"), chartOptions);
            chart.render();

            // Cleanup function to destroy the chart when the component is unmounted
            return () => {
                chart.destroy();
            };
        }
    }, []);
    const downloadJPG = () => {
        html2canvas(document.querySelector("#dwnjpg")).then(canvas => {
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'payment-records-chart.jpg';

            // Trigger the download
            link.click();
        });
    };
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
                <section className="department-details-section" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-3 col-xl-3">
                                <div className="sidebar">
                                    <div className="sidebar-widget-list-inner">
                                        <ul>
                                            <li><a href="#t">IPH</a></li>
                                            <li><a href="#t">JKS</a></li>
                                            <li><a href="#t">KSS</a></li>
                                            <li><a href="#t">BIWIS</a></li>
                                            <li><a href="#t">INSIS</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9" id="dwnjpg">

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
                                                    <option>Sertifikat Halal Umk</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <div className="card stretch stretch-full">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h5 className="card-title">Sertifikat Halal UMK</h5>
                                        <button onClick={downloadJPG} className="card-header-action" data-bs-toggle="tooltip" title="download"><i className="fa-solid fa-download" aria-hidden="true"></i></button>

                                    </div>
                                    <div className="card-body custom-card-action p-0">
                                        <div id="payment-records-chart"></div>
                                    </div>

                                </div>
                                <div className="col-lg-12 pt-5">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="card stretch stretch-full">
                                                <div className="card-body p-0">
                                                    <div className="mb-4 border-bottom">
                                                        <div className="pt-4 text-center">
                                                            <h1>1.608.804</h1>
                                                            <p>Jumlah Pendaftaran Sehati</p>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4 ">
                                                        <div className="pt-4 text-center">
                                                            <h1>86.571</h1>
                                                            <p>Jumlah SH Terbit Sehati</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card stretch stretch-full">
                                                <div className="card-header">
                                                    <h5 className="card-title" style={{ fontSize: `16px` }}>Pendaftaran Sehati per Peovinsi</h5>
                                                </div>
                                                <div className="card-body custom-card-action p-0">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover mb-0" style={{ fontSize: `14px` }}>
                                                            <thead>
                                                                <tr>
                                                                    <th>Provinsi</th>
                                                                    <th className="text-end">Jumlah</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>

                                                                    <td>Jawa Barat</td>
                                                                    <td className="text-end"> 250.000 </td>

                                                                </tr>
                                                                <tr>

                                                                    <td>Jawa Tengah</td>
                                                                    <td className="text-end">250.000</td>

                                                                </tr>
                                                                <tr>

                                                                    <td>Jawa Tengah</td>
                                                                    <td className="text-end">250.000</td>

                                                                </tr>
                                                                <tr>

                                                                    <td>Jawa Tengah</td>
                                                                    <td className="text-end">250.000</td>

                                                                </tr>
                                                                <tr>

                                                                    <td>Jawa Tengah</td>
                                                                    <td className="text-end">250.000</td>

                                                                </tr>
                                                                <tr>

                                                                    <td>Jawa Tengah</td>
                                                                    <td className="text-end">250.000</td>

                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                <div className="col-lg-12 pt-5">
                                    <div className="about-one-inner-x">
                                        <div className="d-flex justify-content-between ">

                                            <h5 >Narasi</h5>
                                            <div className="">
                                                <h5 style={{ fontSize: `14px` }}>Sumber</h5>
                                                <p style={{ fontSize: `12px` }}>www.kneks.co.id/e-pustaka</p>
                                            </div>

                                        </div>
                                        <p>Lanjutan deskripsi dari direktorat ini Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>

                                </div>
                                <div className="col-lg-12 pt-5">
                                    <div className="about-one-inner-x">
                                        <div className="text-start">

                                            <h5 >Sumber Data</h5>

                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-hover mb-0" style={{ fontSize: `14px` }}>
                                                <thead>
                                                    <tr>
                                                        <th>Dataset</th>
                                                        <th className="text-center">Produsen Data</th>
                                                        <th className="text-center">Tanggal Pembaharuan Data</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>

                                                        <td><a href="/data/detail">Dataset A</a></td>
                                                        <td className="text-center">Ojk</td>
                                                        <td className="text-center">12:30:34 27-04-2024</td>

                                                    </tr>
                                                    <tr>

                                                        <td><a href="/data/detail">Dataset B</a></td>
                                                        <td className="text-center">Ojk</td>
                                                        <td className="text-center">12:30:34 27-04-2024</td>

                                                    </tr>
                                                    <tr>

                                                        <td><a href="/data/detail">Dataset C</a></td>
                                                        <td className="text-center">Ojk</td>
                                                        <td className="text-center">12:30:34 27-04-2024</td>

                                                    </tr>


                                                </tbody>
                                            </table>
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

export default Data