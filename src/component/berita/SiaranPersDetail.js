import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import isiItemsBerita from "../dataBerita"

const SiaranPersDetail = () => {


    const { slug } = useParams();
    const [item, setItem] = useState(null);



    useEffect(() => {
        const items = isiItemsBerita();
        const foundItem = items.find(item => item.slug === slug);
        setItem(foundItem);
    }, [slug]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="page-wrapper">
                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Siaran Pers</h3>
                        </div>
                    </div>
                </section>
                <section className="event-details-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="event-details-inner-box">
                                    <img src={item.foto} className="img-fluid" alt={item.title} />
                                    <div className="event-details-meta">
                                        <div className="event-details-meta-number">
                                            <span>28</span>
                                        </div>
                                        <div className="event-details-meta-date">
                                            <span>{item.tanggal}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="berita-section">
                    <div className="container">
                        <div className="berita-detail">
                            <img src={item.foto} className="img-fluid" alt={item.title} />
                            <div className="berita-content">
                                <div className="berita-card-funding">
                                    <div className="berita-card-funding-list">
                                        <div className="berita-card-funding-item">
                                            <div className="berita-card-funding-text-tag">{item.tag}</div>
                                        </div>
                                        <div className="berita-card-funding-item">
                                            <div className="berita-card-funding-text">{item.tanggal}</div>
                                        </div>
                                    </div>
                                </div>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SiaranPersDetail