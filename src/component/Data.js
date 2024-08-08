import React, { useEffect } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Data = () => {
    useEffect(() => {
        // Ensure ApexCharts is loaded before using it
        if (window.ApexCharts) {
            const chartOptions = {
                chart: {
                    height: 380,
                    width: '100%',
                    stacked: false,
                    toolbar: { show: false }
                },
                stroke: {
                    width: [1, 2, 3],
                    curve: 'smooth',
                    lineCap: 'round'
                },
                plotOptions: {
                    bar: {
                        endingShape: 'rounded',
                        columnWidth: '30%'
                    }
                },
                colors: ['#3454d1', '#a2acc7', '#E1E3EA'],
                series: [
                    {
                        name: 'Payment Rejected',
                        type: 'bar',
                        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 21]
                    },
                    {
                        name: 'Payment Completed',
                        type: 'line',
                        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 41]
                    },
                    {
                        name: 'Awaiting Payment',
                        type: 'bar',
                        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 56]
                    }
                ],
                fill: {
                    opacity: [0.85, 0.25, 1, 1],
                    gradient: {
                        inverseColors: false,
                        shade: 'light',
                        type: 'vertical',
                        opacityFrom: 0.5,
                        opacityTo: 0.1,
                        stops: [0, 100, 100, 100]
                    }
                },
                markers: { size: 0 },
                xaxis: {
                    categories: [
                        'JAN/23', 'FEB/23', 'MAR/23', 'APR/23', 'MAY/23', 'JUN/23',
                        'JUL/23', 'AUG/23', 'SEP/23', 'OCT/23', 'NOV/23', 'DEC/23'
                    ],
                    axisBorder: { show: false },
                    axisTicks: { show: false },
                    labels: { style: { fontSize: '10px', colors: '#A0ACBB' } }
                },
                yaxis: {
                    labels: {
                        formatter: (value) => `${value}K`,
                        offsetX: -5,
                        offsetY: 0,
                        style: { color: '#A0ACBB' }
                    }
                },
                grid: {
                    xaxis: { lines: { show: false } },
                    yaxis: { lines: { show: false } }
                },
                dataLabels: { enabled: false },
                tooltip: {
                    y: {
                        formatter: (value) => `${value}K`
                    },
                    style: { fontSize: '12px', fontFamily: 'Inter' }
                },
                legend: {
                    //   show: false,
                    position: 'top',
                    labels: {
                        fontSize: '12px',
                        colors: '#A0ACBB'
                    },
                    fontSize: '12px',
                    fontFamily: 'Inter'
                },

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
                                        <a href="#t" onClick={downloadPDF} className="card-header-action" data-bs-toggle="tooltip" title="download"><i className="fa-solid fa-download" aria-hidden="true"></i></a>

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