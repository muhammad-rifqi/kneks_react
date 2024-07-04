import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";


const SiaranPersDetail = () => {


    const { slug } = useParams();
    const [item, setItem] = useState(null);
    const isiItemsBerita = () => [
        {
            id: "1",
            slug: "slug-satu",
            title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita.jpg"
        },


    ];


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
                            <h3>{item.title}</h3>
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