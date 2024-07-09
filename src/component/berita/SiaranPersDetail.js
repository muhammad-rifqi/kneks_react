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

    const tanggal = item.tanggal;
    const arrTgl = tanggal.split(" ");


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
                                <div className="event-details-content-box">
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="event-details-inner-box">
                                    <img src={`${process.env.PUBLIC_URL}/${item.foto}`} width={`100%`} className="img-fluid" alt={item.title} />
                                    <div className="event-details-meta">
                                        <div className="event-details-meta-number">
                                            <span>{arrTgl[0]}</span>
                                        </div>
                                        <div className="event-details-meta-date">
                                            <span>{arrTgl[1]} &nbsp;{arrTgl[2]}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {item.foto_gallery && item.foto_gallery.length > 0 ? (
                                    item.foto_gallery.map((result, index) => (
                                        <div className="col-lg-3 pb-3" key={index}>
                                            <a href={`${process.env.PUBLIC_URL}/${result.foto}`} className="beritaDetail" data-gall="gallery01">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/${result.foto}`}
                                                    width="100%"
                                                    style={{ height: "195px" }}
                                                    className="img-fluid"
                                                    alt={item.title}
                                                />
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-lg-12 text-center ">
                                        <p className="text-white bg-danger p-2">Tidak ada foto</p>
                                    </div>
                                )}
                            </div>
                            <div className="col-lg-12">
                                <div className="event-details-content-box">
                                    <p>{item.deskripsi}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="news-details-list-title pb-3">
                                <h4>Tags :</h4>
                            </div>
                            <div className="news-details-list-button">
                                <a href="news-details.html" className="btn btn-primary">#Culturse</a>
                                <a href="news-details.html" className="btn btn-primary">Government</a>
                                <a href="news-details.html" className="btn btn-primary">Government</a>
                                <a href="news-details.html" className="btn btn-primary">Government</a>
                                <a href="news-details.html" className="btn btn-primary">Government</a>
                                <a href="news-details.html" className="btn btn-primary">Government</a>
                                <a href="news-details.html" className="btn btn-primary">Government</a>
                                <a href="news-details.html" className="btn btn-primary">Government</a>
                                <a href="news-details.html" className="btn btn-primary">Government</a>
                                <a href="news-details.html" className="btn btn-primary">Government</a>
                                <a href="news-details.html" className="btn btn-primary">Government</a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default SiaranPersDetail