import React, { useEffect, useState } from "react";
import Iph from '../component/DataTab/Iph'
import Jks from '../component/DataTab/Jks'
import Kss from '../component/DataTab/Kss'
import Biwis from '../component/DataTab/Biwis'
// import Insis from '../component/DataTab/Insis'
import Rph from '../component/DataTab/Rph'
import Swal from "sweetalert2";
import dayjs from "dayjs";
import "dayjs/locale/id";
import axios from "axios";
import { useCookies } from 'react-cookie';
import './cssCustom.css'; // Import file CSS kustom
import { Accordion, Card, ListGroup } from 'react-bootstrap';
const Data = () => {
    const [cookies] = useCookies(['i18next']);
    dayjs.locale('id');
    const [selectedSection, setSelectedSection] = useState("1");
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [selectedSubmenu, setSelectedSubmenu] = useState(null);

    const fetchCategories = async () => {
        const url = process.env.REACT_APP_API_URL;
        const response = await axios.get(`${url}/data_menu_fe`);
        return response.data
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message,
                });
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    // const renderContent = () => {

    //     switch (selectedSection) {
    //         case "Iph":
    //             return <Iph />;
    //         case "Jks":
    //             return <Jks />;
    //         case "Kss":
    //             return <Kss />;
    //         case "Biwis":
    //             return <Biwis />;
    //         case "Insis":
    //             return <Insis />;
    //         default:
    //             return null;
    //     }
    // };
    const componentMap = {
        1: Rph,
        2: Iph,
        3: Jks,
        4: Kss,
        5: Biwis,
    };

    const renderContent = () => {
        if (loading) {
            return (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            );
        }
        const Component = componentMap[selectedSection];
        return Component ? <Component /> : <p>Pilih kategori untuk melihat konten.</p>;
    };
    useEffect(() => {
        // Ensure ApexCharts is loaded before using it
        // if (window.ApexCharts) {
        //     const chartOptions =
        //     {
        //         series: [
        //             {
        //                 name: "Series 1",
        //                 data: [101, 41, 35, 51, 49, 62, 69, 91, 148]
        //             },

        //         ],
        //         chart: {
        //             height: 350,
        //             type: 'line', // This specifies that it's a line chart

        //             zoom: {
        //                 enabled: false
        //             }
        //         },

        //         dataLabels: {
        //             enabled: true
        //         },
        //         stroke: {
        //             curve: 'smooth'
        //         },
        //         title: {
        //             text: 'Pendaftaran sehati perbulan',
        //             align: 'left'
        //         },
        //         grid: {
        //             row: {
        //                 colors: ['#f3f3f3', 'transparent'], // alternating background colors
        //                 opacity: 0.5
        //             },
        //         },
        //         xaxis: {
        //             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        //         }
        //     };

        //     // const chart = new window.ApexCharts(document.querySelector("#payment-records-chart"), chartOptions);
        //     // chart.render();

        //     // Cleanup function to destroy the chart when the component is unmounted
        //     return () => {
        //         // chart.destroy();
        //     };
        // }
    }, []);
    useEffect(() => {
        // Ensure ApexCharts is loaded before using it
        if (window.ApexCharts) {
            // const chartOptions =
            // {
            //     series: [
            //         {
            //             name: "Fasilitas",
            //             data: [101, 41, 35, 51, 49, 62, 69, 91, 148]
            //         },
            //         {
            //             name: "Reguler",
            //             data: [110, 31, 55, 91, 99, 62, 69, 91, 148]
            //         },
            //         {
            //             name: "Total",
            //             data: [101, 41, 35, 13, 79, 62, 69, 91, 148]
            //         },

            //     ],
            //     chart: {
            //         height: 350,
            //         type: 'line', // This specifies that it's a line chart

            //         zoom: {
            //             enabled: false
            //         }
            //     },
            //     dataLabels: {
            //         enabled: true
            //     },
            //     stroke: {
            //         curve: 'straight'
            //     },
            //     title: {
            //         text: 'Perkembangan Sertifikat Halal Berdasarkan Jenis',
            //         align: 'left'
            //     },
            //     grid: {
            //         row: {
            //             colors: ['#f3f3f3', 'transparent'], // alternating background colors
            //             opacity: 0.5
            //         },
            //     },
            //     xaxis: {
            //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            //     }
            // };

            // const chart = new window.ApexCharts(document.querySelector("#payment-records-chartx"), chartOptions);
            // chart.render();

            // Cleanup function to destroy the chart when the component is unmounted
            // return () => {
            //     chart.destroy();
            // };
        }
    }, []);
    useEffect(() => {
        // Ensure ApexCharts is loaded before using it
        // if (window.ApexCharts) {
        //     const chartOptions =
        //     {
        //         series: [
        //             {
        //                 name: "Series 1",
        //                 data: [101, 41, 35, 51, 49, 62, 69, 91, 148]
        //             },

        //         ],
        //         chart: {
        //             height: 350,
        //             type: 'bar', // This specifies that it's a line chart

        //             zoom: {
        //                 enabled: false
        //             }
        //         },
        //         dataLabels: {
        //             enabled: true
        //         },
        //         stroke: {
        //             curve: 'straight'
        //         },
        //         title: {
        //             text: 'Progress Sertifikat Halal Gratis Untuk Pelaku UMK',
        //             align: 'left'
        //         },
        //         grid: {
        //             row: {
        //                 colors: ['#f3f3f3', 'transparent'], // alternating background colors
        //                 opacity: 0.5
        //             },
        //         },
        //         xaxis: {
        //             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        //         }
        //     };

        //     const chart = new window.ApexCharts(document.querySelector("#payment-records-charts"), chartOptions);
        //     chart.render();

        //     // Cleanup function to destroy the chart when the component is unmounted
        //     return () => {
        //         chart.destroy();
        //     };
        // }
    }, []);
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


    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/sourcesdata')
            .then(resp => resp.json())
            .then((rows) => {
                setData(rows)
            })
    })

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/sourcesdata')
            .then(resp => {
                if (!resp.ok) {
                    // Jika respons tidak OK, lemparkan error dengan status dan pesan
                    throw new Error(`HTTP error! status: ${resp.status}`);
                }
                return resp.json();
            })
            .then((rows) => {
                setData(rows);
            })
            .catch((error) => {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,

                });
            });
    }, []);

    const showPanel = () => {
        document.getElementById("sidepanels").style.display = 'block';
        document.getElementById("dwnjpg").className = 'col-lg-9';
    }

    const hidePanel = () => {
        document.getElementById("sidepanels").style.display = 'none';
        document.getElementById("dwnjpg").className = 'col-lg-12';
    }

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
                    <div className="container-lg">
                        <p> <button className="btn btn-success" onClick={showPanel}> + </button> &nbsp; &nbsp; <button className="btn btn-success" onClick={hidePanel}> - </button> </p>
                        <div className="row">
                            <div className="col-12 col-lg-3 col-xl-3" id="sidepanels">
                            {loading ? (
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <div key={index} className="skeletonxx"></div>
                                    ))
                                ) : (
                                    <Accordion defaultActiveKey={0} >
                                        <Card bg="white" text="dark" className="">
                                            <Accordion.Item as={Card.Header} eventKey="0" style={{ cursor: 'pointer' }}>
                                                <Accordion.Header >Accordion Item #1</Accordion.Header>
                                            </Accordion.Item>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item action variant="white" className="pb-3 pt-3">
                                                            <a
                                                                href="/data" // Tautan ke halaman /data
                                                                style={{
                                                                    textDecoration: 'none', // Menghilangkan underline pada tautan
                                                                    color: 'inherit', // Menggunakan warna teks default
                                                                    display: 'flex', // Mengatur layout flexbox
                                                                    alignItems: 'center', // Pusatkan item secara vertikal
                                                                    justifyContent: 'space-between', // Jarak antara item
                                                                }}
                                                            >
                                                                <div>
                                                                    <label htmlFor="cv-mentor" >
                                                                        CV Mentor
                                                                    </label>
                                                                </div>

                                                            </a>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                )}


                                <div className="sidebar">
                                    <div className="sidebar-widget-list-inner">
                                        <ul>
                                            {/* <li><a href="#IPH" onClick={() => setSelectedSection("Iph")}>IPH</a></li>
                                            <li><a href="#JKS" onClick={() => setSelectedSection("Jks")}>JKS</a></li>
                                            <li><a href="#KSS" onClick={() => setSelectedSection("Kss")}>KSS</a></li>
                                            <li><a href="#BIWIS" onClick={() => setSelectedSection("Biwis")}>BIWIS</a></li>
                                            <li><a href="#INSIS" onClick={() => setSelectedSection("Insis")}>INSIS</a></li> */}
                                            {loading ? (
                                                Array.from({ length: 5 }).map((_, index) => (
                                                    <li key={index} className="skeletonxx"></li>
                                                ))
                                            ) : (
                                                categories.map(category => (
                                                    <li key={category.id}>
                                                        <a href="#t" onClick={() => setSelectedSection(category.id)}>
                                                            {cookies.i18next === 'en' ? category?.title_en : category?.title}
                                                        </a>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9" id="dwnjpg">
                                {renderContent()}
                                {/* <Card className="mb-3">
                                    <Card.Body>
                                        <Row >
                                            <Breadcrumb as={Col} className="">
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
                                    <div className="card-body custom-card-action p-0" id="dwnjpg">
                                        <iframe src="https://metabase.kneks.go.id/public/dashboard/7caec5a5-4e6f-45c2-8d38-00286d5dc3ed" title="iframe1" width={`100%`} height="1000"
                                            allowFullScreen></iframe>
                                    </div>


                                </div> */}



                                {/* <div className="col-lg-12 pt-5">
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
                                </div> */}
                                <div className="col-lg-12 pt-5">
                                    <div className="about-one-inner-x border p-3 rounded">
                                        {/* <div className="row align-items-center">
                                            <div className="col-md-6">
                                                <h5 className="fw-bold">Narasi</h5>
                                            </div>
                                            <div className="col-md-6 text-md-end text-start">
                                                <h5 className="fw-bold" style={{ fontSize: '14px' }}>Sumber</h5>
                                                <a
                                                    href="https://www.kneks.co.id/e-pustaka"
                                                    className="text-decoration-none text-primary"
                                                    style={{ fontSize: '12px' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    www.kneks.co.id/e-pustaka
                                                </a>
                                            </div>
                                        </div> */}
                                        <p className="mt-3 text-secondary">
                                            Lanjutan deskripsi dari direktorat ini Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
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
                                                    {
                                                        data?.map((items, index) => {
                                                            return (
                                                                <tr key={items?.id}>
                                                                    <td><a href={`/data/${items?.id}`}>{items?.dataset}</a></td>
                                                                    <td className="text-center">{items?.source}</td>
                                                                    <td className="text-center">

                                                                        {dayjs(
                                                                            items?.date_created
                                                                        ).format(
                                                                            "DD MMMM YYYY"
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
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