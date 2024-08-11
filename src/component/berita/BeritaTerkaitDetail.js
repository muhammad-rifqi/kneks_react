import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
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

    const tanggal = item.tanggal;
    const arrTgl = tanggal.split(" ");


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
                                    <p style={{ textAlign: `justify` }}>{item.deskripsi}</p>
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
                                            <div className="berita-card-imgbox">
                                                <img src={`${process.env.PUBLIC_URL}/${item.foto}`} className="img-fluid" alt={item.title} />
                                            </div>
                                            <div className="berita-content">
                                                <div className="berita-card-funding">

                                                    <div className="berita-card-funding-list">
                                                        <div className="berita-card-funding-item">
                                                            {/* <div className="berita-card-funding-amount">$25,487</div> */}
                                                            <div className="berita-card-funding-text-tag">{item.tag}</div>
                                                        </div>
                                                        <div className="berita-card-funding-item">
                                                            {/* <div className="berita-card-funding-amount">$30,000</div> */}
                                                            <div className="berita-card-funding-text">{item.tanggal}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4> <Link to={`/siaran-pers/${item.slug}`}>{item.title}</Link></h4>
                                                {/* <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p> */}
                                                {/* <a href="cause-details.html" className="btn btn-primary">Donate Now</a> */}
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