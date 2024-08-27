import React, { useEffect,useState }  from "react"
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

const Kneks = () => {
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
                    {
                        name: "Series 2",
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
                    curve: 'smooth'
                },
                title: {
                    text: 'Jumlah Kegiatan Dan Peserta Setiap Bulan',
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
                    44, 55, 41,
                ],

                labels: ['Internasional', 'Nasional', 'Regional'],
                chart: {
                    type: 'donut',
                },
                title: {
                    text: 'Jumlah Dan Persentase Kegiatan Berdasarkan Area',
                    align: 'left',
                    style: {
                        fontSize: '10px',
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            };



            const chart = new window.ApexCharts(document.querySelector("#payment-records-donat"), chartOptions);
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
                    44, 1, 21,
                ],

                labels: ['Semua', '(blank)', 'Perempuan'],
                chart: {
                    type: 'pie',
                },
                title: {
                    text: 'Jumlah Dan Persentase Kegiatan Berdasarkan Gender Audiens',
                    align: 'left',
                    style: {
                        fontSize: '10px',
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            };



            const chart = new window.ApexCharts(document.querySelector("#payment-records-pie"), chartOptions);
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
                series: [{
                    name: 'Series 1',
                    data: [80, 50, 30, 40, 100, 20],
                }, {
                    name: 'Series 2',
                    data: [20, 30, 40, 80, 20, 80],
                }, {
                    name: 'Series 3',
                    data: [44, 76, 78, 13, 43, 10],
                }],
                chart: {
                    height: 350,
                    type: 'radar',
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1
                    }
                },
                title: {
                    text: 'Jumlah Kegiatan Berdasarkan Prioritas',
                    style: {
                        fontSize: `8px`
                    }
                },

                stroke: {
                    width: 2
                },
                fill: {
                    opacity: 0.1
                },
                markers: {
                    size: 0
                },
                yaxis: {
                    stepSize: 20
                },
                xaxis: {
                    categories: ['2011', '2012', '2013', '2014', '2015', '2016']
                }
            };



            const charts = new window.ApexCharts(document.querySelector("#payment-records-piramid"), chartOptions);
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
            const chartOptions =
            {
                series: [{
                    data: [2, 39, 23, 27, 2]
                },],
                chart: {
                    type: 'bar',
                    height: 350
                },
                title: {
                    text: 'Jumlah Kegiatan Berdasarkan Skala Usia',
                    style: {
                        fontSize: `8px`
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: '12px',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },
                tooltip: {
                    shared: true,
                    intersect: false
                },
                xaxis: {
                    categories: [`19 - 23 Tahun`, `(blank)`, `Semua Bisa`, `36 -55 Tahun`, `24 - 35 Tahun`],
                },
            };



            const charts = new window.ApexCharts(document.querySelector("#payment-records-barsatu"), chartOptions);
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
            const chartOptions =
            {
                series: [{
                    data: [5, 4, 6, 5, 16]
                },],
                chart: {
                    type: 'bar',
                    height: 350
                },
                title: {
                    text: 'Jumlah Kegiatan Berdasarkan Wilayah (Top 5)',
                    style: {
                        fontSize: `8px`
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: '12px',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },
                tooltip: {
                    shared: true,
                    intersect: false
                },
                xaxis: {
                    categories: [`Sulawesi`, `Jawa Barat`, `(blank)`, `Jawa Timur`, `DKI Jakarta`],
                },
            };



            const charts = new window.ApexCharts(document.querySelector("#payment-records-bardua"), chartOptions);
            charts.render();

            // Cleanup function to destroy the chart when the component is unmounted
            return () => {
                charts.destroy();
            };
        }
    }, []);
    return (
        <>
            <div className="col-lg-6" >
                <div className="row pb-2">
                    <div className="col-lg-4">
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Total Kegiatan</Card.Title>
                                <h1>
                                    92
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
                <div className="col-lg-12 mb-2">
                    <Card className="text-center">
                        <Card.Body>
                            <div id="payment-records-chart"></div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-12 mb-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <Card className="text-center">
                                <Card.Body>
                                    <div id="payment-records-donat"></div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-6">
                            <Card className="text-center">
                                <Card.Body>
                                    <div id="payment-records-pie"></div>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                </div>
                <div className="col-lg-12 ">
                    <div className="row">
                        <div className="col-lg-4">
                            <Card>
                                <Card.Body>
                                    <div id="payment-records-piramid"></div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-4">
                            <Card>
                                <Card.Body>
                                    <div id="payment-records-barsatu"></div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-4">
                            <Card>
                                <Card.Body>
                                    <div id="payment-records-bardua"></div>
                                </Card.Body>
                            </Card>
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
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">Tanggal Selesai</div>
                            <div className="col-sm-6 text-primary">30 Oktober 2024</div>
                        </div>
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">Kontributor</div>
                            <div className="col-sm-6 text-primary">Kemenko maritim, Kemenko perekonomian, kemenko PMK,Kementerian PPN/Bapenas</div>
                        </div>
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">Indikator Dampak</div>
                            <div className="col-sm-6 text-primary">SNLIEKSI 1 Literasi (Ekonomi Syariah)</div>
                        </div>
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">Pembukaan Acara</div>
                            <div className="col-sm-6 text-primary">Presiden/wakil presiden</div>
                        </div>
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">Jumlah Peserta</div>
                            <div className="col-sm-6 text-primary">1000</div>
                        </div>
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">Area</div>
                            <div className="col-sm-6 text-primary">Internasional</div>
                        </div>
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">Lokasi</div>
                            <div className="col-sm-6 text-primary">DKI Jakarta</div>
                        </div>
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">Skala Usia</div>
                            <div className="col-sm-6 text-primary">Semua Usia</div>
                        </div>
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">Gender Audiens</div>
                            <div className="col-sm-6 text-primary">Semua</div>
                        </div>
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">Keterlibatan Disabilitas</div>
                            <div className="col-sm-6 text-primary">Ya</div>
                        </div>
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">Level of Content</div>
                            <div className="col-sm-6 text-primary">100%</div>
                        </div>
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">Prioritas</div>
                            <div className="col-sm-6 text-primary">Tinggi</div>
                        </div>
                        <div className="row g-0 mb-4">
                            <div className="col-sm-6 fw-semibold">KBLI</div>
                            <div className="col-sm-6 text-primary">A- Pertanian, Kehutanan, dan Perikanan</div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )

}

export default Kneks;