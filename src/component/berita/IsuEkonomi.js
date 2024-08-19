import React, { useState, useEffect } from "react";
import isiItemsBerita from "../dumy/dataBerita"
import SkeletonCardBerita from "../skeleton/CardBerita";

const IsuEkonomi = () => {


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
                            <h3>Isu Ekonomi</h3>
                        </div>
                    </div>
                </section>
                <section className="berita-section">
                    <div className="container">
                        <div className="row row-gutter-30">
                            {loading ? (
                                Array(visible).fill().map((_, index) => (
                                    <div className="col-lg-4 col-xl-4" key={index}>
                                        <SkeletonCardBerita />
                                    </div>
                                ))
                            ) : (
                                items.slice(0, visible).map((item) => (
                                    <div className="col-lg-4 col-xl-4" key={item.id}>
                                        <div className="berita-card">
                                            <div className="berita-card-imgbox ">
                                                <a href={`/siaran-pers/${item.slug}`}><img src={item.foto} className="img-fluid" alt={item.title} /></a>
                                            </div>
                                            <div className="berita-content ">
                                                <div className="event-card-info-x " style={{ color: `#F2994A` }}>

                                                    <span>{item.tag}</span>
                                                </div>
                                                <div className="event-card-title pb-4">
                                                    <h4>
                                                        <a href={`/siaran-pers/${item.slug}`}>{item.title}</a>
                                                    </h4>
                                                </div>
                                                <div className="event-card-info">
                                                    <span>{item.tanggal}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}

                            {loadingMore && (
                                Array(3).fill().map((_, index) => (
                                    <div className="col-lg-4 col-xl-4" key={index + visible}>
                                        <SkeletonCardBerita />
                                    </div>
                                ))
                            )}

                            {visible < items.length && (
                                <div className="col-12 pt-5">
                                    <div className="block-box load-more-btn">
                                        <a hrefassName="item-btn" onClick={showMore}>
                                            <i className="fa-solid fa-refresh"></i>Load More
                                        </a>
                                    </div>
                                </div>
                            )}

                        </div >
                    </div >
                </section >
            </div >
        </>
    )
}

export default IsuEkonomi