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
                                <div className="event-details-inner-box">
                                    <img src={`${process.env.PUBLIC_URL}/${item.foto}`} className="img-fluid" alt={item.title} />
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
                            <div class="col-lg-8">
                                <div class="event-details-content-box">
                                    <h4>{item.title}</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default SiaranPersDetail