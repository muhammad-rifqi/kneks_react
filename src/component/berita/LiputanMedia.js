import React, { useState, useEffect } from "react";
import isiItemsBerita from "../dataBerita"



const LiputanMedia = () => {



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
                            <h3>Liputan Media</h3>
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
                                                <img src={require(item.foto).default} className="img-fluid" alt={item.title} />
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
                                                <h4> <a href="cause-details.html">{item.title}</a> </h4>
                                                {/* <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p> */}
                                                {/* <a href="cause-details.html" className="btn btn-primary">Donate Now</a> */}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            {visible < items.length && (
                                <div className="col-12 pt-5">
                                    <div className="block-box load-more-btn">
                                        <a href="javascript:void(0)" className="item-btn" onClick={showMore}>
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

export default LiputanMedia