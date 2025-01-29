import React, { useState } from "react";

import Roadmap from "./libraryTab/Roadmap";
import Pidato from "./libraryTab/Pidato";
import Kajian from "./libraryTab/Kajian";
import Publikasi from "./libraryTab/Publikasi";
import Regulasi from "./libraryTab/Regulasi";
import Siaran from "./libraryTab/Siaran";
import { useTranslation } from "react-i18next";

const Elibrabry = () => {

    const { t } = useTranslation()

    const [selectedSection, setSelectedSection] = useState("roadmap");

    const renderContent = () => {
        switch (selectedSection) {
            case "roadmap":
                return <Roadmap />;
            case "pidato":
                return <Pidato />;
            case "kajian":
                return <Kajian />;
            case "publikasi":
                return <Publikasi />;
            case "regulasi":
                return <Regulasi />;
            case "siaran":
                return <Siaran />;
            // Add other cases as needed for different sections
            default:
                return null;
        }
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
                                            <li><a href="#t" onClick={() => setSelectedSection("roadmap")}>Roadmap/Masterplan</a></li>
                                            <li><a href="#t" onClick={() => setSelectedSection("pidato")}>Pidato/Paparan</a></li>
                                            <li><a href="#t" onClick={() => setSelectedSection("kajian")}>Kajian/Penelitian</a></li>
                                            <li><a href="#t" onClick={() => setSelectedSection("publikasi")}>Publikasi</a></li>
                                            <li><a href="#t" onClick={() => setSelectedSection("regulasi")}>Regulasi</a></li>
                                            <li><a href="#t" onClick={() => setSelectedSection("siaran")}>Siaran Pers</a></li>
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