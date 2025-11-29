import React, { useState, useEffect, useMemo } from "react";
import Roadmap from "./libraryTab/Roadmap";
import Pidato from "./libraryTab/Pidato";
import Kajian from "./libraryTab/Kajian";
import Publikasi from "./libraryTab/Publikasi";
import Regulasi from "./libraryTab/Regulasi";
import Siaran from "./libraryTab/Siaran";
import Katalog from "./libraryTab/Katalog";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Swal from "sweetalert2";
import { useCookies } from 'react-cookie';
import InputGroup from 'react-bootstrap/InputGroup';
import { Modal, Button } from "react-bootstrap";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import 'dayjs/locale/en';

const Elibrabry = () => {
    const [cookies] = useCookies(['i18next']);
    const { t } = useTranslation()
    const [loading, setLoading] = useState(true);
    const [selectedSection, setSelectedSection] = useState("2");
    const [categories, setCategories] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [files_all, setFilesData] = useState([]);
    const [file, setFile] = useState(null);
    const [titleFile, setTitleFile] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const formatDate = (date, locale = 'en') => {
        dayjs.locale(locale); // Set the locale dynamically
        return dayjs(date).format('DD MMMM YYYY'); // Format the date
    };

    const fetchCategories = async () => {
        const url = process.env.REACT_APP_API_URL;
        const response = await axios.get(`${url}/files_category`);
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

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/files")
            .then(res => setFilesData(res.data))
            .catch(err => console.error(err));
    }, []);


    const filteredPosts = useMemo(() => {
        return files_all.filter(filessearch =>
            filessearch.title && filessearch.title.toLowerCase().includes(searchTitle.toLowerCase())
        );
    }, [files_all, searchTitle]);


    // const renderContent = () => {
    //     switch (selectedSection) {
    //         case "roadmap":
    //             return <Roadmap />;
    //         case "pidato":
    //             return <Pidato />;
    //         case "kajian":
    //             return <Kajian />;
    //         case "publikasi":
    //             return <Publikasi />;
    //         case "regulasi":
    //             return <Regulasi />;
    //         case "siaran":
    //             return <Siaran />;
    //         default:
    //             return null;
    //     }
    // };

    const componentMap = {
        1: Roadmap,
        2: Pidato,
        3: Kajian,
        7: Publikasi,
        5: Regulasi,
        6: Siaran,
        12: Katalog 
    };

    const renderContent = () => {
        const Component = componentMap[selectedSection];
        return Component ? <Component /> : <p>Pilih kategori untuk melihat konten.</p>;
    };


    console.log(filteredPosts)

    return (
        <>
            <div className="page-wrapper">
                <section className="page-banner-perpus">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>{t('ePustaka')}</h3>
                        </div>
                    </div>
                </section>
                <section className="department-details-section">
                    <div className="container">

                        <div className="row">
                            <div className="col-12 col-lg-12 col-xl-12">
                                <InputGroup >

                                    <input
                                        type="text"
                                        placeholder={cookies.i18next === 'id' ? 'Filter Semua Judul' : 'Filter All Title '}
                                        value={searchTitle}
                                        className="form-control form-control-sm"
                                        onChange={(e) => setSearchTitle(e.target.value)}
                                        style={{ paddingTop: '8px', paddingBottom: '9px', border: '1px solid #ccc' }}
                                    />
                                    <InputGroup.Text><i className="fa fa-search text-muted"></i></InputGroup.Text>
                                </InputGroup>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="row">
                            <div className="col-12 col-lg-3 col-xl-3">
                                <div className="sidebar">
                                    <div className="sidebar-widget-list-inner">
                                        <ul >
                                            {/* <li><a href="#t" onClick={() => setSelectedSection("roadmap")}>Roadmap/Masterplan</a></li>
                                            <li><a href="#t" onClick={() => setSelectedSection("pidato")}>Pidato/Paparan</a></li>
                                            <li><a href="#t" onClick={() => setSelectedSection("kajian")}>Kajian/Penelitian</a></li>
                                            <li><a href="#t" onClick={() => setSelectedSection("publikasi")}>Publikasi</a></li>
                                            <li><a href="#t" onClick={() => setSelectedSection("regulasi")}>Regulasi</a></li>
                                            <li><a href="#t" onClick={() => setSelectedSection("siaran")}>Siaran Pers</a></li> */}

                                            {/* {loading ? (
                                                <li>Loading...</li>
                                            ) : (
                                                categories.map(category => (
                                                    <li key={category.id}>
                                                        <a href="#t" onClick={() => setSelectedSection(category.id)}>
                                                            {category.title}
                                                        </a>
                                                    </li>
                                                ))
                                            )} */}


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
                            <div className="col-lg-9">
                                <div className="row row-gutter-y-30 mt-3">
                                    {searchTitle === null || searchTitle === undefined || searchTitle === ""
                                        ? renderContent()
                                        : filteredPosts.map((item) => (
                                            <div className="col-12 col-md-6 col-xl-3" key={item?.id}>
                                                <div className="team-card-x">
                                                    <div className="team-card-img-x">
                                                        <a href={`/e-pustaka/${item?.id
                                                            }`}>
                                                            <img src="/assets/image/book1.jpeg" className="img-fluid" alt="img-40" />
                                                        </a>
                                                    </div>
                                                    <div className="team-card-content-x">
                                                        <h4><a href={`/e-pustaka/${item?.id
                                                            }`}>{cookies.i18next === 'en' ? item?.title_en : item?.title}</a></h4>
                                                        <div className="d-flex justify-content-between align-items-end">
                                                            <p>{cookies.i18next === 'id' ? formatDate(item.date, 'id') : formatDate(item.date, 'en')}</p>
                                                            <a
                                                                title="Downloadable"
                                                                href="#download"
                                                                onClick={() => {
                                                                    setShowModal(true)
                                                                    setFile(item?.file)
                                                                    setTitleFile(item?.title)
                                                                }}
                                                            >
                                                                <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>File Preview Roadmap / Masterplan </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <Form>
                                    <Form.Group>
                                        <Form.Label>Passcode</Form.Label>
                                        <Form.Control
                                            type="password"
                                            value={passcode}
                                            onChange={(e) => setPasscode(e.target.value)}
                                            placeholder="Masukkan passcode"
                                            className="border"
                                        />
                                    </Form.Group>
                                </Form> */}
                    <ul>
                        <li>Judul/Title : {titleFile}</li>
                        <li>File : {file} </li>
                    </ul>
                    <p><iframe title={`#toolbar=0`} src={file} width="100%" height="450"></iframe></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success"
                        onClick={() => {
                            // if (passcode === "123456") {
                            const link = document.createElement("a");
                            link.href = file;
                            link.download = "file.pdf";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            setShowModal(false);
                        }}
                    >
                        Download
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Elibrabry