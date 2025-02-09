import React, { useState, useEffect } from "react";

import Roadmap from "./libraryTab/Roadmap";
import Pidato from "./libraryTab/Pidato";
import Kajian from "./libraryTab/Kajian";
import Publikasi from "./libraryTab/Publikasi";
import Regulasi from "./libraryTab/Regulasi";
import Siaran from "./libraryTab/Siaran";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Swal from "sweetalert2";
import { useCookies } from 'react-cookie';
const Elibrabry = () => {
    const [cookies] = useCookies(['i18next']);
    const { t } = useTranslation()
    const [loading, setLoading] = useState(true);
    const [selectedSection, setSelectedSection] = useState("2");
    const [categories, setCategories] = useState([]);

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
    };

    const renderContent = () => {
        const Component = componentMap[selectedSection];
        return Component ? <Component /> : <p>Pilih kategori untuk melihat konten.</p>;
    };
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
                                {renderContent()}
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        </>
    )
}

export default Elibrabry