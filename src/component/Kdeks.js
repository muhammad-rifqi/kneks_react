import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import MapsKdeks from "./MapsKdeks";

import dayjs from 'dayjs';
import 'dayjs/locale/id';
import 'dayjs/locale/en';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
const Kdeks = () => {
    // const [rows, setItems] = useState([]);
    // const [postSejarah, setPostSejarah] = useState(null);
    const [cookies] = useCookies(['i18next']);
    const [postTentang, setPostTentang] = useState(null);
    const [loadingKdeks, setLoadingKdeks] = useState(true);
    useEffect(() => {
        // const isian = Kota();
        // setItems(isian);
        // alert(items.length);


    }, []);



    useEffect(() => {

        const fetchPostsTentang = async () => {
            try {
                const url = process.env.REACT_APP_API_URLKDEKS;
                const endpoint = process.env.REACT_APP_API_KDEKSTENTANGKAMI;
                const response = await axios.get(`${url}${endpoint}`);
                if (response.data && response.data.length > 0) {
                    setPostTentang(response.data[0]); // Set data ke state
                } else {
                    throw new Error("Data kosong atau tidak ditemukan.");
                }
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oopsxx...",
                    text: err,

                });
            } finally {
                setLoadingKdeks(false);
            }
        };

        fetchPostsTentang()

    }, []);
    // const divStyle = {
    //     overflowY: 'scroll',
    //     padding: '20px',
    //     Height: '500px',
    //     position: 'relative'
    // };

    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner-kdeks ">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>KDEKS</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section-kdeks ">
                    <div className="container">
                        <div className="row row-gutter-y-40">

                            {/* konten sebelah kiri */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-image">
                                    {loadingKdeks ? (
                                        <div className="skeleton-kdeks skeleton-kdeks-img"></div>
                                    ) : (
                                        <img src="assets/image/logoKdeks.png" alt="logo" width={300} className="img-fluid" />
                                    )}
                                </div>
                            </div>

                            {/* konten sebelah kanan */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-inner-x">
                                    {loadingKdeks ? (
                                        <>
                                            <div className="skeleton-kdeks skeleton-kdeks-text"></div>
                                            <div className="skeleton-kdeks skeleton-kdeks-text" style={{ width: "60%" }}></div>
                                        </>
                                    ) : (
                                        <>
                                            <h2 className="section-title">{cookies.i18next === 'en' ? (postTentang?.about_en !== null ? postTentang?.about_en : "Not Title") : (postTentang?.about !== null ? postTentang?.about : "Tidak ada judul")}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? (postTentang.about_content_en !== null ? postTentang.about_content_en : "Not content") : (postTentang.about_content !== null ? postTentang.about_content : "Tidak ada konten") }} />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="row row-gutter-y-40">
                            {/* konten sejarah deskripsi */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-inner-x">
                                    {loadingKdeks ? (
                                        <>
                                            <div className="skeleton-kdeks skeleton-kdeks-text"></div>
                                            <div className="skeleton-kdeks skeleton-kdeks-text" style={{ width: "60%" }}></div>
                                        </>
                                    ) : (
                                        <>
                                            <h2 className="section-title">{cookies.i18next === 'en' ? (postTentang?.history_en !== null ? postTentang?.history_en : 'Not title') : (postTentang?.history !== null ? postTentang?.history : "Tidak ada judul")}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? (postTentang?.about_content_en !== null ? postTentang?.about_content_en : 'Not content') : (postTentang?.about_content !== null ? postTentang?.about_content : "Tidak ada konten") }} />
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* konten sejarah images */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-image">
                                    {loadingKdeks ? (
                                        <div className="skeleton-kdeks skeleton-kdeks-img"></div>
                                    ) : (
                                        <img src="assets/image/sejarah.svg" alt="sejarah" className="img-fluid" />
                                    )}
                                </div>
                            </div>

                        </div>
                        {/* <div className="row row-gutter-y-40 d-flex justify-content-center pt-5">
                            <div className="col-lg-3 text-center">
                                <div className="sidebar-widget">
                                  
                                    <div className="sidebar-widget-box-content">
                                        <h3>Surat Keputusan Kdeks</h3>
                                        <a href="#tt" className="btn btn-primary">View</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
                <MapsKdeks />
                {/* <section className="about-one-section-kdeks ">
                    <div className="container">
                        <div className="row" style={divStyle}>
                            {
                                rows.map((item) => (
                                    <div className="col-6 col-md-4 col-lg-2 pb-3" key={item.id} >
                                        <a rel="noreferrer" target="_blank" href={`/kdeks/${convertToSlug(item.title)}`} data-bs-toggle="tooltip" title={item.title} className="component-service d-block ">
                                            <div className="service-image ">
                                                <img src={item.foto} className="img-fluid" alt={item.title} />
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section> */}


            </div>
        </>
    )
}

export default Kdeks