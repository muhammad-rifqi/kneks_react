import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import Button from 'react-bootstrap/Button';

const KemenkoPmk = () => {
    useEffect(() => {
        // Ensure ApexCharts is loaded before using it
        if (window.ApexCharts) {
            const chartOptions = {
                series: [
                    {
                        name: "Series 1",
                        data: [101, 41, 35, 51, 49, 62, 69, 91, 148],
                    },
                    {
                        name: "Series 2",
                        data: [101, 41, 35, 51, 49, 62, 69, 91, 148],
                    },
                ],
                chart: {
                    height: 300,
                    type: "bar", // This specifies that it's a line chart

                    zoom: {
                        enabled: false,
                    },
                },

                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: "smooth",
                },
                title: {
                    text: "Jumlah Kegiatan Dan Peserta Setiap Bulan",
                    align: "left",
                },
                grid: {
                    row: {
                        colors: ["#f3f3f3", "transparent"], // alternating background colors
                        opacity: 0.5,
                    },
                },
                xaxis: {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                    ],
                },
            };

            const chart = new window.ApexCharts(
                document.querySelector("#kemenko-payment-records-chart"),
                chartOptions
            );
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
            const chartOptions = {
                series: [44, 55, 41],

                labels: ["Internasional", "Nasional", "Regional"],
                chart: {
                    type: "donut",
                },
                title: {
                    text: "Jumlah Dan Persentase Kegiatan Berdasarkan Area",
                    align: "left",
                    style: {
                        fontSize: "10px",
                    },
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            };

            const chart = new window.ApexCharts(
                document.querySelector("#kemenko-payment-records-donat"),
                chartOptions
            );
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
            const chartOptions = {
                series: [44, 1, 21],

                labels: ["Semua", "(blank)", "Perempuan"],
                chart: {
                    type: "pie",
                },
                title: {
                    text: "Jumlah Dan Persentase Kegiatan Berdasarkan Gender Audiens",
                    align: "left",
                    style: {
                        fontSize: "10px",
                    },
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            };

            const chart = new window.ApexCharts(
                document.querySelector("#kemenko-payment-records-pie"),
                chartOptions
            );
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
            const chartOptions = {
                series: [
                    {
                        name: "Series 1",
                        data: [80, 50, 30, 40, 100, 20],
                    },
                    {
                        name: "Series 2",
                        data: [20, 30, 40, 80, 20, 80],
                    },
                    {
                        name: "Series 3",
                        data: [44, 76, 78, 13, 43, 10],
                    },
                ],
                chart: {
                    height: 300,
                    type: "radar",
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1,
                    },
                },
                title: {
                    text: "Jumlah Kegiatan Berdasarkan Prioritas",
                    style: {
                        fontSize: `8px`,
                    },
                },

                stroke: {
                    width: 2,
                },
                fill: {
                    opacity: 0.1,
                },
                markers: {
                    size: 0,
                },
                yaxis: {
                    stepSize: 20,
                },
                xaxis: {
                    categories: [
                        "2011",
                        "2012",
                        "2013",
                        "2014",
                        "2015",
                        "2016",
                    ],
                },
            };

            const charts = new window.ApexCharts(
                document.querySelector("#kemenko-payment-records-piramid"),
                chartOptions
            );
            charts.render();

            // Cleanup function to destroy the chart when the component is unmounted
            return () => {
                charts.destroy();
            };
        }
    }, []);

    useEffect(() => {
        // Ensure ApexCharts is loaded before using it
        if (window.ApexCharts) {
            const chartOptions = {
                series: [
                    {
                        data: [2, 39, 23, 27, 2],
                    },
                ],
                chart: {
                    type: "bar",
                    height: 300,
                },
                title: {
                    text: "Jumlah Kegiatan Berdasarkan Skala Usia",
                    style: {
                        fontSize: `8px`,
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: "top",
                        },
                    },
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: "12px",
                        colors: ["#fff"],
                    },
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ["#fff"],
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                },
                xaxis: {
                    categories: [
                        `19 - 23 Tahun`,
                        `(blank)`,
                        `Semua Bisa`,
                        `36 -55 Tahun`,
                        `24 - 35 Tahun`,
                    ],
                },
            };

            const charts = new window.ApexCharts(
                document.querySelector("#kemenko-payment-records-barsatu"),
                chartOptions
            );
            charts.render();

            // Cleanup function to destroy the chart when the component is unmounted
            return () => {
                charts.destroy();
            };
        }
    }, []);
    useEffect(() => {
        // Ensure ApexCharts is loaded before using it
        if (window.ApexCharts) {
            const chartOptions = {
                series: [
                    {
                        data: [5, 4, 6, 5, 16],
                    },
                ],
                chart: {
                    type: "bar",
                    height: 300,
                },
                title: {
                    text: "Jumlah Kegiatan Berdasarkan Wilayah (Top 5)",
                    style: {
                        fontSize: `8px`,
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: "top",
                        },
                    },
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: "12px",
                        colors: ["#fff"],
                    },
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ["#fff"],
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                },
                xaxis: {
                    categories: [
                        `Sulawesi`,
                        `Jawa Barat`,
                        `(blank)`,
                        `Jawa Timur`,
                        `DKI Jakarta`,
                    ],
                },
            };

            const charts = new window.ApexCharts(
                document.querySelector("#kemenko-payment-records-bardua"),
                chartOptions
            );
            charts.render();

            // Cleanup function to destroy the chart when the component is unmounted
            return () => {
                charts.destroy();
            };
        }
    }, []);
    return (
        <div className='col-lg-12'>
            <Carousel className='custom-carousel' interval={3000}>
                <Carousel.Item>
                    <div className='row d-flex align-items-center'
                      style={{
                        height: 350
                      }}>
                        <div className='col-lg-4'>
                            <Card className='text-center'>
                                <Card.Body>
                                    <Card.Title>Total Kegiatan</Card.Title>
                                    <h1>92</h1>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4'>
                            <Card className='text-center'>
                                <Card.Body>
                                    <Card.Title>Total Peserta</Card.Title>
                                    <h1>53.17K</h1>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-4'>
                            <Card className='text-center'>
                                <Card.Body>
                                    <Card.Title>TotaL wilayah</Card.Title>
                                    <h1>47</h1>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='col-lg-12'>
                        <Card className='text-center'>
                            <Card.Body>
                                <div id='kemenko-payment-records-chart'></div>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='d-flex justify-content-center align-items-center' 
                    style={{
                        height: 350
                    }}
                    >
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <Card className="h-100">
                                        <Card.Body>
                                            <div id='kemenko-payment-records-donat'></div>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col-lg-6'>
                                    <Card className="h-100">
                                        <Card.Body>
                                            <div id='kemenko-payment-records-pie'></div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='col-lg-12'>
                        <Card>
                            <Card.Body>
                                <div id='kemenko-payment-records-piramid'></div>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='col-lg-12'>
                        <Card>
                            <Card.Body>
                                <div id='kemenko-payment-records-barsatu'></div>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='col-lg-12'>
                        <Card>
                            <Card.Body>
                                <div id='kemenko-payment-records-bardua'></div>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default KemenkoPmk;
