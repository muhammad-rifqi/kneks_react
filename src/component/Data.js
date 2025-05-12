import React, { useEffect, useState } from "react";
import Iph from '../component/DataTab/Iph'
import Jks from '../component/DataTab/Jks'
import Kss from '../component/DataTab/Kss'
import Biwis from '../component/DataTab/Biwis'
import Insis from '../component/DataTab/Insis'
import AktivitasUsahaSyariah from '../component/DataTab/aktivitasUsahaSyariah'
import Beranda from '../component/DataTab/Beranda'
// import Rph from '../component/DataTab/Rph'
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

    // 1: Rph,
    const componentMap = {
        1: Iph,
        2: Jks,
        3: Kss,
        4: Biwis,
        5: Insis,
        6: AktivitasUsahaSyariah,
        7: Beranda
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

    const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch(process.env.REACT_APP_API_URL + '/sourcesdata')
    //         .then(resp => resp.json())
    //         .then((rows) => {
    //             setData(rows)
    //         })
    // })
    // console.log(data)
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/sourcesdata')
            .then(resp => {
                if (!resp.ok) {
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
                        <p> <button className="btn btn-success" onClick={showPanel}> - </button> &nbsp; &nbsp; <button className="btn btn-success" onClick={hidePanel}> + </button> </p>
                        <div className="row">
                            <div className="col-12 col-lg-3 col-xl-3" id="sidepanels">
                                {loading ? (
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <div key={index} className="skeletonxx"></div>
                                    ))
                                ) : (

                                    <Accordion defaultActiveKey={0} >
                                        {categories.map(category => (
                                            category.data_submenu && category.data_submenu.length > 0 ? (
                                                <Card bg="white" text="dark" className="mb-3 border-2" key={category.id} >
                                                    <Accordion.Item as={Card.Header} eventKey={category?.id} >
                                                        <Accordion.Header >{cookies.i18next === 'en' ? category?.title_en : category?.title}</Accordion.Header>
                                                    </Accordion.Item>
                                                    <Accordion.Collapse eventKey={category?.id}>
                                                        <Card.Body>
                                                            <ListGroup variant="flush">
                                                                {category.data_submenu.map((submenu) => (
                                                                    <ListGroup.Item action variant="white" className="pb-3 pt-3" key={submenu.id}
                                                                        onClick={() => {
                                                                            if (submenu.id_statistic === 2) {
                                                                                setSelectedSection(1);
                                                                            } else if (submenu.id_statistic === 3) {
                                                                                setSelectedSection(2);
                                                                            } if (submenu.id_statistic === 4) {
                                                                                setSelectedSection(3);
                                                                            } if (submenu.id_statistic === 5) {
                                                                                setSelectedSection(4);
                                                                            } if (submenu.id_statistic === 8) {
                                                                                setSelectedSection(5);
                                                                            }
                                                                        }}
                                                                    >

                                                                        <div>
                                                                            <label htmlFor="cv-mentor" style={{ cursor: 'pointer' }} >
                                                                                {cookies.i18next === 'en' ? submenu.long_name_en : submenu.long_name}
                                                                            </label>
                                                                        </div>


                                                                    </ListGroup.Item>
                                                                ))}
                                                            </ListGroup>
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            ) : (
                                                <ListGroup.Item action variant="white" className="mb-3 border-2"
                                                    onClick={() => {
                                                        if (category.id === 1) {
                                                            setSelectedSection(1);
                                                        } else if (category.id === 2) {
                                                            setSelectedSection(2);
                                                        } if (category.id === 3) {
                                                            setSelectedSection(3);
                                                        } if (category.id === 4) {
                                                            setSelectedSection(4);
                                                        } if (category.id === 5) {
                                                            setSelectedSection(5);
                                                        } if (category.id === 9) {
                                                            setSelectedSection(6);
                                                        }if (category.id === 10) {
                                                            setSelectedSection(7);
                                                        }
                                                    }}
                                                    style={{
                                                        padding: `1.3rem 1.8rem`,
                                                    }}
                                                >
                                                    {cookies.i18next === 'en' ? category?.title_en : category?.title}
                                                </ListGroup.Item>
                                            )))}
                                    </Accordion>

                                )}
                            </div>
                            <div className="col-lg-9" id="dwnjpg">
                                {renderContent()}

                                <div className="col-lg-12 pt-5">
                                    <div className="about-one-inner-x border p-3 rounded">
                                        <p className="mt-3 text-secondary">
                                            -
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