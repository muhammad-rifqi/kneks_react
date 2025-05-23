import React, { useEffect, useState } from "react";
// import { Tabs, Tab } from "react-bootstrap";
// import Bi from "./dashboard/Bi";
// import Bpjph from "./dashboard/Bpjph";
// import KemenkoPmk from "./dashboard/KemenkoPmk";
// import Kneks from "./dashboard/Kneks";
// import Ojk from "./dashboard/Ojk";
// import Blank from "./dashboard/Blank";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Swal from "sweetalert2";
import "./s5.css"
// const dataTabs = [
//     {
//         key: "BI",
//         data: {
//             totalKegiatan: 12,
//             totalPeserta: "2.1K",
//             totalWilayah: 23,
//         },
//         // contents: <Bi />,
//     },
//     {
//         key: "BPJPH",
//         data: {
//             totalKegiatan: 12,
//             totalPeserta: "2.1K",
//             totalWilayah: 23,
//         },
//         // contents: <Bpjph />,
//     },
//     {
//         key: "KemenkoPMK",
//         data: {
//             totalKegiatan: 12,
//             totalPeserta: "2.1K",
//             totalWilayah: 23,
//         },
//         // contents: <KemenkoPmk />,
//     },
//     {
//         key: "KNEKS",
//         data: {
//             totalKegiatan: 12,
//             totalPeserta: "2.1K",
//             totalWilayah: 23,
//         },
//         // contents: <Kneks />,
//     },
//     {
//         key: "OJK",
//         data: {
//             totalKegiatan: 12,
//             totalPeserta: "2.1K",
//             totalWilayah: 23,
//         },
//         // contents: <Ojk />,
//     },
//     {
//         key: "(blank)",
//         data: {
//             totalKegiatan: 12,
//             totalPeserta: "2.1K",
//             totalWilayah: 23,
//         },
//         // contents: <Blank />,
//     },
// ];

const Section5 = () => {
    const { t } = useTranslation();
    // const [activeTab, setActiveTab] = useState("BI");
    const [dataTabs, setDataTab] = useState([]);
    useEffect(() => {
        const fetchTab = async () => {
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_AGENDA_GRAPH;
                const response = await axios.get(`${url}${endpoint}`);
                setDataTab(response.data);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,
                });
            }
        };
        fetchTab();
    }, [])

    return (
        <section className='funfact-section'>
            <div className='container-fluid'>
                <div className='blog-box' style={{ paddingBottom: "50px" }}>
                    <div className='section-title-box text-center' data-aos="flip-up">
                        <h2 className='section-title text-white'>
                            {t("event")}
                        </h2>
                    </div>
                </div>
                <Carousel className='custom-carousel-x' interval={3000} data-aos="fade-down-left">
                    {dataTabs.slice(0, 6).map((item) => {
                        return (
                            <Carousel.Item key={item.key}>
                                <div className='row d-flex align-items-start chart-container'>
                                    <h3 className='text-center text-white'>
                                        {item.key}
                                    </h3>
                                    <div className='col-lg-4'>
                                        <Card className='text-center'>
                                            <Card.Body>
                                                <Card.Title>
                                                    Total Kegiatan
                                                </Card.Title>
                                                <h1>
                                                    {item.data.totalKegiatan}
                                                </h1>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col-lg-4 '>
                                        <Card className='text-center'>
                                            <Card.Body>
                                                <Card.Title>
                                                    Total Peserta
                                                </Card.Title>
                                                <h1>
                                                    {item.data.totalPeserta}
                                                </h1>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col-lg-4'>
                                        <Card className='text-center'>
                                            <Card.Body>
                                                <Card.Title>
                                                    Total Wilayah
                                                </Card.Title>
                                                <h1>
                                                    {item.data.totalWilayah}
                                                </h1>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
              
            </div>
        </section>
    );
};

export default Section5;
