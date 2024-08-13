import React, { useEffect } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Data = () => {
    useEffect(() => {
        // Ensure ApexCharts is loaded before using it
        if (window.ApexCharts) {
            const chartOptions =
            {
                series: [
                    {
                        name: "Series 1",
                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                    }
                ],
                chart: {
                    height: 350,
                    type: 'line', // This specifies that it's a line chart
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
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
    const downloadPDF = () => {
        const pdfWidth = 210; // A4 width in mm
        const pdfHeight = 297; // A4 height in mm
        html2canvas(document.querySelector("#payment-records-chart")).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('portrait', 'mm', [pdfWidth, pdfHeight]);

            // Adjust image dimensions to maintain aspect ratio
            const imgWidth = pdfWidth - 20; // padding of 10mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            const margin = 10;

            pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
            pdf.save("custom-size-chart.pdf");
        });
    };

    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Data</h3>
                        </div>
                    </div>
                </section>
                <section className="department-details-section">
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
                            <div className="col-lg-9">
                                <div className="card stretch stretch-full">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h5 className="card-title">Sertifikat Halal UMK</h5>
                                        <button onClick={downloadPDF} className="card-header-action" data-bs-toggle="tooltip" title="download"><i className="fa-solid fa-download" aria-hidden="true"></i></button>

                                    </div>
                                    <div className="card-body custom-card-action p-0">
                                        <div id="payment-records-chart"></div>
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