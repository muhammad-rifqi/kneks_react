import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import isiItemsBerita from "../dataBerita"

const SiaranPers = () => {


    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(9)

    // untukmengeloladatasebelumdiloop
    useEffect(() => {
        const isian = isiItemsBerita();
        setItems(isian);
        // alert(items.length);
    }, []);

    const showMore = () => {
        setVisible((preValue) => preValue + 3);
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
                <section className="berita-section">
                    <div className="container">
                        <div className="row row-gutter-30">
                            {items.slice(0, visible).map((item) => {
                                return (
                                    <div className="col-lg-4 col-xl-4" key={item.id}>
                                        <div className="berita-card">
                                            <div className="berita-card-imgbox">
                                                <img src={item.foto} className="img-fluid" alt={item.title} />
                                            </div>
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
                                                <h4> 
                                                    <Link to={`/siaran-pers/${item.slug}`}>{item.title}</Link>
                                                </h4>
                                                
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {visible < items.length && (
                                <div className="col-12 pt-5">
                                    <div className="block-box load-more-btn">
                                        <Link to="javascript:void(0)" className="item-btn" onClick={showMore}>
                                            <i className="fa-solid fa-refresh"></i>Load More
                                        </Link>
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

export default SiaranPers