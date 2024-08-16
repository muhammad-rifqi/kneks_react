import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import isiItemsBerita from "../component/dumy/dataBerita";
// import OwlCarousel from 'react-owl-carousel';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
const Kdeks = () => {
    const [rows, setItems] = useState([]);


    // untukmengeloladatasebelumdiloop
    useEffect(() => {
        if (document.querySelector('.swiper-kdeks-agenda')) {
            // var mySwiper = new Swiper('.swiper-kdeks', {
            // pengaturan Swiper

            const swipers = new Swiper('.swiper-kdeks-agenda', {
                // pengaturan Swiper
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                },
            });
            // Cleanup function to destroy Swiper instance
            return () => {
                if (swipers) {
                    swipers.destroy(true, true);
                }
            };
        }
    }, [])
    useEffect(() => {
        const isian = isiItemsBerita();
        setItems(isian);
        // alert(items.length);
        if (document.querySelector('.swiper-kdeks')) {
            // var mySwiper = new Swiper('.swiper-kdeks', {
            // pengaturan Swiper

            const swiper = new Swiper('.swiper-kdeks', {
                // pengaturan Swiper
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                },
            });
            // Cleanup function to destroy Swiper instance
            return () => {
                if (swiper) {
                    swiper.destroy(true, true);
                }
            };
        }




    }, []);


    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>KDEKS</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section-kdeks">
                    <div className="container">
                        <div className="row row-gutter-y-40">

                            {/* konten sebelah kiri */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-image">
                                    <img src="assets/image/logoKdeks.png" alt="logo" width={300} className="img-fluid" />
                                </div>
                            </div>

                            {/* konten sebelah kanan */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-inner-x">
                                    <h2 className="section-title">Tentang Kami</h2>
                                    <p>Komite Nasional Ekonomi dan Keuangan Syariah (KNEKS) merupakan perubahan dari KNKS untuk peningkatan pembangunan ekosistem ekonomi dan keuangan syariah serta menjadikan Indonesia sebagai Pusat Halal Dunia.</p>
                                    <p>Pencanangan titik awal untuk memposisikan Indonesia sebagai salah satu pelaku utama dan hub ekonomi syariah dunia dilakukan seiring dengan peluncuran Masterplan Ekonomi Syariah Indonesia pada bulan Mei 2019.</p>
                                </div>



                            </div>

                        </div>

                        <div className="row row-gutter-y-40">

                            {/* konten sejarah deskripsi */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-inner-x">
                                    <h2 className="section-title">Sejarah KDEKS</h2>
                                    <p>Dalam rangka mendukung pembangunan ekonomi nasional dan mendorong percepatan pengembangan sektor keuangan syariah, pemerintah secara khusus mendirikan KNKS pada tanggal 8 November 2016 agar dapat meningkatkan efektifitas, efisiensi pelaksanaan rencana pembangunan nasional bidang keuangan dan ekonomi Syariah. Selanjutnya sejak diundangkan tanggal 10 Februari 2020, pemerintah melakukan perubahan Komite Nasional Keuangan Syariah menjadi Komite Nasional Ekonomi dan Keuangan Syariah yang bertujuan meningkatkan pembangunan ekosistem ekonomi dan keuangan syariah guna mendukung pembangunan ekonomi nasional.</p>
                                </div>
                            </div>

                            {/* konten sejarah images */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-image">
                                    <img src="assets/image/sejarah.svg" alt="sejarah" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                        <div className="row row-gutter-y-40 d-flex justify-content-center pt-5">
                            <div className="col-lg-3 text-center">
                                <div className="sidebar-widget">
                                    {/* <div className="sidebar-widget-box-icon">
                                        <i className="flaticon-pdf"></i>
                                    </div> */}
                                    <div className="sidebar-widget-box-content">
                                        <h3>Surat Keputusan Kdeks Jawa Tengah</h3>
                                        <Link className="btn btn-primary">View</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="portfolio-section">
                    <div className="section-title-box text-center">
                        <h2 className="section-title">Berita Dan Kegiatan</h2>
                    </div>
                    <div className="portfolio-content container-fluid">
                        <div className="swiper swiper-kdeks">
                            <div className="swiper-wrapper">

                                {rows.slice(0, 5).map((item, i) => (
                                    <div className="swiper-slide" key={i}>
                                        <div className="berita-card-kdeks shadow" >
                                            <div className="berita-card-imgbox-kdeks">
                                                <Link to={`/berita-terkait/${item.slug}`}><img src={item.foto} className="img-fluid" alt={item.title} /></Link>
                                            </div>
                                            <div className="berita-content-kdeks">

                                                <div className="event-card-title pb-2">
                                                    <h4>
                                                        <Link to={`/berita-terkait/${item.slug}`}> {item.title} </Link>
                                                    </h4>
                                                </div>
                                                <div className="event-card-info-direktorat">
                                                    <span>{item.tanggal}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}


                            </div>
                            {/* <div className="swiper-pagination"></div> */}
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </div>
                </section>
                <section className="funfact-section">
                    <div className="container">
                        <div className="funfact-box">
                            <div className="section-title-box text-center">
                                <h2 className="section-title">Agenda</h2>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="swiper swiper-kdeks-agenda">
                                <div className="swiper-wrapper">

                                    <div className="col-lg-3 col-md-6 swiper-slide">
                                        <div className="card shadow p-3 mb-5 rounded" style={{ background: `#146AA4`, color: `#ffffff` }}>
                                            <div className="card-header" style={{ borderBottom: `1px solid #ffffff`, fontSize: `18px`, paddingBottom: `15px`, background: `#146AA4` }}>Webinar Keuangan</div>
                                            <div className="card-body">
                                                <div className="card-text">24/05/2024 - 24/05/2024</div>
                                                <div className="card-text">12:00 - 14:00 WIP</div>

                                            </div>
                                            <div className="card-footer text-end" style={{ borderTop: `none`, background: `#146AA4`, color: `#ffffff` }}>
                                                <i className="fa-solid fa-calendar "></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 swiper-slide">
                                        <div className="card shadow p-3 mb-5 rounded" style={{ background: `#146AA4`, color: `#ffffff` }}>
                                            <div className="card-header" style={{ borderBottom: `1px solid #ffffff`, fontSize: `18px`, paddingBottom: `15px`, background: `#146AA4` }}>Webinar Keuangan</div>
                                            <div className="card-body">
                                                <div className="card-text">24/05/2024 - 24/05/2024</div>
                                                <div className="card-text">12:00 - 14:00 WIP</div>

                                            </div>
                                            <div className="card-footer text-end" style={{ borderTop: `none`, background: `#146AA4`, color: `#ffffff` }}>
                                                <i className="fa-solid fa-calendar "></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 swiper-slide">
                                        <div className="card shadow p-3 mb-5 rounded" style={{ background: `#146AA4`, color: `#ffffff` }}>
                                            <div className="card-header" style={{ borderBottom: `1px solid #ffffff`, fontSize: `18px`, paddingBottom: `15px`, background: `#146AA4` }}>Webinar Keuangan</div>
                                            <div className="card-body">
                                                <div className="card-text">24/05/2024 - 24/05/2024</div>
                                                <div className="card-text">12:00 - 14:00 WIP</div>

                                            </div>
                                            <div className="card-footer text-end" style={{ borderTop: `none`, background: `#146AA4`, color: `#ffffff` }}>
                                                <i className="fa-solid fa-calendar "></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 swiper-slide">
                                        <div className="card shadow p-3 mb-5 rounded" style={{ background: `#146AA4`, color: `#ffffff` }}>
                                            <div className="card-header" style={{ borderBottom: `1px solid #ffffff`, fontSize: `18px`, paddingBottom: `15px`, background: `#146AA4` }}>Webinar Keuangan</div>
                                            <div className="card-body">
                                                <div className="card-text">24/05/2024 - 24/05/2024</div>
                                                <div className="card-text">12:00 - 14:00 WIP</div>

                                            </div>
                                            <div className="card-footer text-end" style={{ borderTop: `none`, background: `#146AA4`, color: `#ffffff` }}>
                                                <i className="fa-solid fa-calendar "></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 swiper-slide">
                                        <div className="card shadow p-3 mb-5 rounded" style={{ background: `#146AA4`, color: `#ffffff` }}>
                                            <div className="card-header" style={{ borderBottom: `1px solid #ffffff`, fontSize: `18px`, paddingBottom: `15px`, background: `#146AA4` }}>Webinar Keuangan</div>
                                            <div className="card-body">
                                                <div className="card-text">24/05/2024 - 24/05/2024</div>
                                                <div className="card-text">12:00 - 14:00 WIP</div>

                                            </div>
                                            <div className="card-footer text-end" style={{ borderTop: `none`, background: `#146AA4`, color: `#ffffff` }}>
                                                <i className="fa-solid fa-calendar "></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-prev">
                                </div>
                                <div className="swiper-button-next">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Kdeks