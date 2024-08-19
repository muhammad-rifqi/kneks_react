import React, { useState, useEffect } from "react";
import isiItemsBerita from "../dumy/dataBerita"
import SkeletonCardBerita from "../skeleton/CardBerita";
const GaleriFoto = () => {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(9)

    const [loading, setLoading] = useState(true);

    const [loadingMore, setLoadingMore] = useState(false);


    // untukmengeloladatasebelumdiloop
    useEffect(() => {
        const isian = isiItemsBerita();
        setItems(isian);
        // alert(items.length);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const showMore = () => {
        // setVisible((preValue) => preValue + 3);

        setLoadingMore(true);

        setTimeout(() => {
            setVisible((preValue) => preValue + 3);
            setLoadingMore(false);
        }, 2000); // Simulate network delay
    }

    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Galeri Foto</h3>
                        </div>
                    </div>
                </section>
                <section className="foto-section">
                    <div className="container">
                        <div className="row row-gutter-y-40">
                            {loading ? (
                                Array(visible).fill().map((_, index) => (
                                    <div className="col-md-4 col-lg-4" key={index}>
                                        <SkeletonCardBerita />
                                    </div>
                                ))
                            ) : (
                                items.slice(0, visible).map((item) => (
                                    <div className="col-md-4 col-lg-4" key={item.id}>
                                        <div className="card-box-b card-shadow news-box">
                                            <div className="img-box-b " data-gall="gallery01">
                                                <a href={`/galeri-foto/${item.slug}`}><img src={item.foto} className="img-fluid img-b" alt={item.title} /></a>
                                            </div>
                                            <div className="card-overlay">
                                                <div className="card-header-b">

                                                    <div className="card-title-b">
                                                        <h2 className="title-2">
                                                            <a href={`/galeri-foto/${item.slug}`}>{item.title}</a>
                                                        </h2>
                                                    </div>
                                                    <div className="card-date">
                                                        <span>{item.tanggal}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}

                            {loadingMore && (
                                Array(3).fill().map((_, index) => (
                                    <div className="col-md-4 col-lg-4" key={index + visible}>
                                        <SkeletonCardBerita />
                                    </div>
                                ))
                            )}

                            {visible < items.length && (
                                <div className="col-12 pt-5">
                                    <div className="block-box load-more-btn">
                                        <a className="item-btn" onClick={showMore}>
                                            <i className="fa-solid fa-refresh"></i>Load More
                                        </a>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default GaleriFoto