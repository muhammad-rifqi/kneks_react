import React, { useState, useEffect } from "react";
import VenoBox from 'venobox';
// import isiItemsBerita from "./dumy/dataBerita";
// import OwlCarousel from 'react-owl-carousel';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import Kota from "../component/dumy/dataKota";
import { useParams } from "react-router-dom";

import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
const KdeksDetail = () => {
    // const [rows, setItems] = useState([]);
    const [dataKota, setDataKota] = useState([]);
    const [listdataKota, setListDataKota] = useState([]);

    const { slug } = useParams();
    const [posts, setPosts] = useState([]);



    useEffect(() => {

        // Function to fetch posts
        const fetchPosts = async () => {
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_POST;
                const response = await axios.get(`${url}${endpoint}`);
                setPosts(response.data);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,

                });
            }
        };

        fetchPosts(); // Call fetchPosts function when component mounts

        if (document.querySelector('.swiper-kdeks')) {
			const swipers = new Swiper('.swiper-kdeks', {
				// pengaturan Swiper
				loop: true,
				// pagination: {
				// 	el: '.swiper-pagination',
				// 	clickable: true,
				// 	dynamicMainBullets: true
				// },
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

    }, [posts]);
    
    new VenoBox({
        selector: '.my-image-as',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'swing',
        spinColor: '#5A8DEE',
        titlePosition: 'bottom',
        toolsColor: '#ffffff',
        titleattr: 'data-title',
        titleStyle: 'block'
    });
    new VenoBox({
        selector: '.my-video-as',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'swing',
        spinColor: '#5A8DEE',
        titlePosition: 'bottom',
        toolsColor: '#ffffff',
        titleattr: 'data-title',
        titleStyle: 'block'
    });
    new VenoBox({
        selector: '.skfile',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'swing',
        spinColor: '#5A8DEE',
        titlePosition: 'bottom',
        toolsColor: '#ffffff',
        titleattr: 'data-title',
        titleStyle: 'block'
    });
    // untukmengeloladatasebelumdiloop
    useEffect(() => {
        if (document.querySelector('.swiper-kdeks-agenda')) {

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
        if (Kota) { // Make sure Kota is defined
            setDataKota(Kota);
        }

        if (dataKota && dataKota.length > 0) {
            const foundItem = dataKota.find(kneks => convertToSlug(kneks.title) === slug);
            setListDataKota(foundItem);
            // const isKdeksPage = location.pathname === '/kdeks/'
        }



    }, [dataKota, slug]);


    const convertToSlug = (title) => {
        if (!title) return ""; // Handle null or undefined title
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };
    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner-kdeks ">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>{listdataKota?.title}</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section-kdeks">
                    <div className="container">
                        <div className="row row-gutter-y-40">

                            {/* konten sebelah kiri */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-image">
                                    <img src={`${process.env.PUBLIC_URL}/${listdataKota?.foto}`} alt="logo" width={300} className="img-fluid" />
                                    {/* <img src={`${process.env.PUBLIC_URL}/${listdataKota?.foto}`} alt="logo" width={300} className="img-fluid" /> */}
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
                                    <img src={`${process.env.PUBLIC_URL}/assets/image/sejarah.svg`} alt="sejarah" className="img-fluid" />
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
                                        <h3>List Pengurus Kdeks {listdataKota?.title}</h3>
                                        {/* <a href={`${process.env.PUBLIC_URL}/${listdataKota?.skFile}`} className="btn btn-primary skfile" data-vbtype="iframe">View</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="portfolio-section">
                    <div className="container">
                        <div className="section-title-box text-center">
                            <h2 className="section-title">Berita Dan Kegiatan</h2>
                        </div>
                        <div className="row row-gutter-30">
                            {posts.length > 0 ? (
                                <div className="swiper swiper-kdeks">
                                    <div className="swiper-wrapper">
                                        {posts.slice(0, 9).map((item) => (
                                            <div className="col-lg-3 swiper-slide" key={item.id}>
                                                <div className="berita-card">
                                                    <div className="berita-card-imgbox-direktorat-home">
                                                        <a href={`/berita-kegiatan/${convertToSlug(item.title)}`}>
                                                            <img src="/assets/image/berita3.svg" className="img-fluid" alt={item.title} />
                                                        </a>
                                                    </div>
                                                    <div className="berita-content-direktorat">
                                                        <div className="direktorat-tag-home">
                                                            <span>#BERITABARU</span>
                                                        </div>
                                                        <div className="event-card-title-direktorat pb-2">
                                                            <h4>
                                                                <a href={`/berita-kegiatan/${convertToSlug(item.title)}`}>{item.title}</a>
                                                            </h4>
                                                        </div>
                                                        <div className="event-card-info-direktorat">
                                                            <span>{dayjs(item.news_datetime).format('DD MMMM YYYY')}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="swiper-button-prev">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </div>
                                    <div className="swiper-button-next">
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-center">No posts available.</p>
                            )}
                        </div >
                    </div >

                </section>
                <section className="funfact-section-struktur-x">
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
                                            <a href="/agenda/detail">
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
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 swiper-slide">
                                            <a href="/agenda/detail">
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
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 swiper-slide">
                                            <a href="/agenda/detail">
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
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 swiper-slide">
                                            <a href="/agenda/detail">
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
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-6 swiper-slide">
                                            <a href="/agenda/detail">
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
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="news-section">
                        <div className="container">
                            <div className="blog-box">
                                <div className="section-title-box text-center">
                                    <h2 className="section-title">Opini</h2>
                                </div>
                            </div>
                            <div className="row row-gutter-30">
                                {
                                    posts.slice(0, 4).map((item) => (
                                        <div className="col-lg-3 col-xl-3" key={item.id}>
                                            <div className="berita-card">
                                                {/* <div className="berita-card-imgbox-direktorat ">
                                                <a href={`/berita-terkait/${item.slug}`}><img src={item.foto} className="img-fluid" alt={item.title} /></a>
                                            </div> */}
                                                <div className="berita-content-direktorat">

                                                    <div className="event-card-title pb-2">
                                                        <h4>
                                                            <a href={`/opini/${convertToSlug(item.title)}`} >{item.title}</a>
                                                        </h4>
                                                    </div>
                                                    <div className="event-card-info-direktorat">
                                                        <span>{item.tanggal}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div >
                        </div>
                    </section>
                    <section className="funfact-section">
                        <div className="container">
                            <div className="funfact-box">
                                <div className="section-title-box text-center">
                                    <h2 className="section-title">E-pustaka</h2>
                                </div>
                            </div>
                            <div className="row row-gutter-y-30 d-flex justify-content-center">

                                <div className="col-lg-9">
                                    <div className="row ">
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="team-card-x">
                                                <div className="team-card-img-x">
                                                    <a href="/e-pustaka/detail"><img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" /></a>

                                                </div>
                                                <div className="team-card-content-x">
                                                    <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                    <div className="d-flex justify-content-between align-items-end">
                                                        <p>21 Mei 2024</p>
                                                        <a href="#t" data-bs-toggle="tooltip" title="download">
                                                            <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="team-card-x">
                                                <div className="team-card-img-x">
                                                    <a href="/e-pustaka/detail">
                                                        <img src="/assets/image/berita.jpg" className="img-fluid" alt="img-40" />
                                                    </a>

                                                </div>
                                                <div className="team-card-content-x">
                                                    <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                    <div className="d-flex justify-content-between align-items-end">
                                                        <p>21 Mei 2024</p>
                                                        <a href="#t" data-bs-toggle="tooltip" title="download">
                                                            <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="team-card-x">
                                                <div className="team-card-img-x">
                                                    <a href="/e-pustaka/detail">
                                                        <img src="/assets/image/berita.jpg" className="img-fluid" alt="img-40" />
                                                    </a>

                                                </div>
                                                <div className="team-card-content-x">
                                                    <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                    <div className="d-flex justify-content-between align-items-end">
                                                        <p>21 Mei 2024</p>
                                                        <a href="#t" data-bs-toggle="tooltip" title="download">
                                                            <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-xl-3">
                                            <div className="team-card-x">
                                                <div className="team-card-img-x">
                                                    <a href="/e-pustaka/detail">
                                                        <img src="/assets/image/berita.jpg" className="img-fluid" alt="img-40" />
                                                    </a>

                                                </div>
                                                <div className="team-card-content-x">
                                                    <h4><a href="#t">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                    <div className="d-flex justify-content-between align-items-end">
                                                        <p>21 Mei 2024</p>
                                                        <a href="#t" data-bs-toggle="tooltip" title="download">
                                                            <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="news-section">
                        <div className="container">
                            <div className="blog-box">
                                <div className="section-title-box text-center">
                                    <h2 className="section-title">Data</h2>
                                </div>
                            </div>
                            <div className="row ">

                                <div className="col-lg-3 col-xl-3">
                                    <div className="berita-card">

                                        <div className="berita-content-direktorat">

                                            <div className="event-card-title-detail pb-2">
                                                <h4>
                                                    <a href="/data/detail">Sertifikasi Halal UKM</a>
                                                </h4>
                                            </div>
                                            <div className="event-card-info-direktorat">
                                                <small>https://risetsyariah.ojk.go.id/freks/</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-xl-3">
                                    <div className="berita-card">

                                        <div className="berita-content-direktorat">

                                            <div className="event-card-title-detail pb-2">
                                                <h4>
                                                    <a href="/data/detail">Kawasan Industri Halal</a>
                                                </h4>
                                            </div>
                                            <div className="event-card-info-direktorat">
                                                <small>https://risetsyariah.ojk.go.id/freks/</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-xl-3">
                                    <div className="berita-card">

                                        <div className="berita-content-direktorat">

                                            <div className="event-card-title-detail pb-2">
                                                <h4>
                                                    <a href="/data/detail">Rumah Potong Hewan</a>
                                                </h4>
                                            </div>
                                            <div className="event-card-info-direktorat">
                                                <small>https://risetsyariah.ojk.go.id/freks/</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-xl-3">
                                    <div className="berita-card">

                                        <div className="berita-content-direktorat">

                                            <div className="event-card-title-detail pb-2">
                                                <h4>
                                                    <a href="/data/detail">Lembaga Pemeriksa Halal</a>
                                                </h4>
                                            </div>
                                            <div className="event-card-info-direktorat">
                                                <small>https://risetsyariah.ojk.go.id/freks/</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>
                </section>
                <section className="funfact-section-direk foto-section-x">
                    <div className="container">
                        <div className="funfact-box">
                            <div className="section-title-box text-center">
                                <h2 className="section-title">Galeri Foto</h2>
                            </div>
                        </div>
                        <div className="row row-gutter-y-40">
                            <div className="col-md-3 col-lg-3">
                                <a href="/assets/image/berita2.jpeg" className="my-image-as" data-gall="gallery01">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b">
                                            <img src="/assets/image/berita2.jpeg" alt="imgNews" className="img-b img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b-x">

                                                <div className="card-title-b">
                                                    <h2 className="title-2-x">
                                                        <a href="blog-single.html">Travel is comming
                                                            new</a>
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <a href="/assets/image/berita.jpg" className="my-image-as" data-gall="gallery01">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b">
                                            <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b-x">

                                                <div className="card-title-b">
                                                    <h2 className="title-2-x">
                                                        <a href="blog-single.html">Travel is comming
                                                            new</a>
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <a href="/assets/image/berita.jpg" className="my-image-as-foto" data-gall="gallery01">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b">
                                            <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b-x">

                                                <div className="card-title-b">
                                                    <h2 className="title-2-x">
                                                        <a href="blog-single.html">Travel is comming
                                                            new</a>
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <a href="/assets/image/berita.jpg" className="my-image-as" data-gall="gallery01">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b">
                                            <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b-x">

                                                <div className="card-title-b">
                                                    <h2 className="title-2-x">
                                                        <a href="blog-single.html">Travel is comming
                                                            new</a>
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                        <div className="funfact-box pt-5">
                            <div className="section-title-box text-center">
                                <h2 className="section-title">Galeri Video</h2>
                            </div>
                        </div>
                        <div className="row row-gutter-y-40">
                            <section className="video-section-x">
                                <div className="container">
                                    <div className="row row-gutter-y-40">
                                        <div className="col-md-3 col-lg-3">
                                            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-video-as" data-autoplay="true" data-vbtype="video">
                                                <div className="card-box-b card-shadow news-box">
                                                    <div className="img-box-bc">
                                                        <img src="/assets/image/berita2.jpeg" alt="imgNews" className="img-b img-fluid" />
                                                        <div className="video-btn">
                                                            <div className="play-icon" >
                                                                <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-overlay">
                                                        <div className="card-header-b-x">

                                                            <div className="card-title-b">
                                                                <h2 className="title-2-x text-white">
                                                                    Travel is comming
                                                                    new
                                                                </h2>
                                                            </div>
                                                            <div className="card-date">
                                                                <span className="date-b">18 Sep. 2017</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3 col-lg-3">
                                            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-video-as" data-autoplay="true" data-vbtype="video">
                                                <div className="card-box-b card-shadow news-box">
                                                    <div className="img-box-bc">
                                                        <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                                        <div className="video-btn">
                                                            <div className="play-icon" >
                                                                <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-overlay">
                                                        <div className="card-header-b-x">

                                                            <div className="card-title-b">
                                                                <h2 className="title-2-x text-white">
                                                                    Travel is comming
                                                                    new
                                                                </h2>
                                                            </div>
                                                            <div className="card-date">
                                                                <span className="date-b">18 Sep. 2017</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3 col-lg-3">
                                            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-video-as" data-autoplay="true" data-vbtype="video">
                                                <div className="card-box-b card-shadow news-box">
                                                    <div className="img-box-bc">
                                                        <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                                        <div className="video-btn">
                                                            <div className="play-icon" >
                                                                <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-overlay">
                                                        <div className="card-header-b-x">

                                                            <div className="card-title-b">
                                                                <h2 className="title-2-x text-white">
                                                                    Travel is comming
                                                                    new
                                                                </h2>
                                                            </div>
                                                            <div className="card-date">
                                                                <span className="date-b">18 Sep. 2017</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3 col-lg-3">
                                            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-video-as" data-autoplay="true" data-vbtype="video">
                                                <div className="card-box-b card-shadow news-box">
                                                    <div className="img-box-bc">
                                                        <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                                        <div className="video-btn">
                                                            <div className="play-icon" >
                                                                <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-overlay">
                                                        <div className="card-header-b-x">

                                                            <div className="card-title-b">
                                                                <h2 className="title-2-x text-white">
                                                                    Travel is comming
                                                                    new
                                                                </h2>
                                                            </div>
                                                            <div className="card-date">
                                                                <span className="date-b">18 Sep. 2017</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default KdeksDetail