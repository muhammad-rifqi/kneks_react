import React, { useState, useEffect } from "react";

import {  useParams } from "react-router-dom";
import isiItemsBerita from "../dumy/dataBerita"


const BeritaTerkaitDetail = () => {


    const { slug } = useParams();
    const [itemx, setItemx] = useState([]);
    const [item, setItem] = useState(null);




    useEffect(() => {
        const items = isiItemsBerita();
        setItemx(items);
        const foundItem = items.find(item => item.slug === slug);
        setItem(foundItem);
    }, [slug]);

    if (!item) {
        return <div>Loading...</div>;
    }

    // const tanggal = item.tanggal;
    // const arrTgl = tanggal.split(" ");


    return (
        <>
            <div className="page-wrapper">
                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Berita Terkait</h3>
                        </div>
                    </div>
                </section>
                <section className="event-details-section-ber">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="event-details-content-box">
                                    <h4>{item.title}</h4>
                                    <p>{item.tanggal}</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="event-details-inner-box">
                                    <img src={`${process.env.PUBLIC_URL}/${item.foto}`} width={`100%`} className="img-fluid" alt={item.title} />

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
                                    <p style={{ textAlign: `justify` }}>{item.deskripsi}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="news-details-list-title pb-3">
                                <h4>Tags :</h4>
                            </div>
                            <div className="news-details-list-button">
                                <a href="#t" className="btn btn-primary">#Culturse</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="berita-section-det">
                    <div className="container">
                        <div className="row row-gutter-y-40 mb-5">
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-inner">
                                    <div className="section-tagline">
                                        Berita Lainnya
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-gutter-30">
                            {itemx.slice(0, 3).map((item) => {
                                return (
                                    <div className="col-lg-4 col-xl-4" key={item.id}>
                                        <div className="berita-card">
                                            <div className="berita-card-imgbox ">
                                                <a href={`/liputan-media/${item.slug}`}> <img src={`${process.env.PUBLIC_URL}/${item.foto}`} className="img-fluid" alt={item.title} /></a>
                                            </div>
                                            <div className="berita-content ">
                                                <div className="event-card-info-x " style={{ color: `#F2994A` }}>
                                                    <span>{item.tag}</span>
                                                </div>
                                                <div className="event-card-title pb-4">
                                                    <h4>
                                                        <a href={`/liputan-media/${item.slug}`}>{item.title}</a>
                                                    </h4>
                                                </div>
                                                <div className="event-card-info">
                                                    <span>{item.tanggal}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default BeritaTerkaitDetail