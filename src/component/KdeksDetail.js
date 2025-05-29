import React, { useEffect, useState } from 'react';

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
import 'dayjs/locale/en';
import { useTranslation } from 'react-i18next';
import SkeletonCardBerita from "../component/skeleton/CardBerita";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
const KdeksDetail = () => {
    const [cookies] = useCookies(['i18next']);
    const navigate = useNavigate();
    const { t } = useTranslation()
    // const [rows, setItems] = useState([]);
    const [dataKota, setDataKota] = useState([]);
    const [listdataKota, setListDataKota] = useState([]);
    const formatDate = (date, locale = 'en') => {
        dayjs.locale(locale); // Set the locale dynamically
        return dayjs(date).format('DD MMMM YYYY'); // Format the date
    };

    const { slug, id } = useParams();
    const [posts, setPosts] = useState([]);
    const [posts_photo, setPostsPhoto] = useState([]);
    const [postsOpini, setPostsOpini] = useState([]);
    // const [postSejarah, setPostSejarah] = useState(null);
    const [postTentang, setPostTentang] = useState(null);

    const [postKdeks, setPostKdeks] = useState(null);
    const [loadingKdeks, setLoadingKdeks] = useState(true);

    const [loadingNew, setLoadingNew] = useState(true);
    const [loadingOpini, setLoadingOpini] = useState(true);
    // const [loadingFile, setLoadingFile] = useState(true);
    // const [loadingData, setLoadingData] = useState(true);
    const [loadingPoto, setLoadingPoto] = useState(true);
    // const [loadingAgenda, setLoadingAgenda] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoadingKdeks(true)
            try {
                const url = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${url}/api_about_province_kdeks/${id}`);
                setPostKdeks(response.data[0]);
                console.log(response)
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,

                });
            } finally {
                setLoadingKdeks(false);
            }
        };

        fetchPosts();
    }, [id]);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoadingNew(true)
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_KDEKS_NEWS + '/' + id;
                const response = await axios.get(`${url}${endpoint}`);
                setPosts(response.data);

            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,

                });
            } finally {
                setLoadingNew(false);
            }
        };

        fetchPosts();
    }, [id]);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoadingOpini(true)
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_KDEKS_OPINI + '/' + id;
                const response = await axios.get(`${url}${endpoint}`);
                setPostsOpini(response.data);

                setTimeout(() => {
                    if (document.querySelectorAll('.my-image-links-c').length > 0) {
                        new VenoBox({
                            selector: '.my-image-links-c',
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
                    }
                }, 500);

            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,

                });
            } finally {
                setLoadingOpini(false);
            }
        };

        fetchPosts();

        return () => {
            // Bersihkan semua instance VenoBox untuk mencegah duplikasi
            const elements = document.querySelectorAll(".my-image-links-c");
            elements.forEach((el) => {
                el.removeAttribute("data-venobox-initialized");
            });

            // Hapus elemen VenoBox dari DOM
            const venoboxOverlay = document.querySelector('.vbox-overlay');
            if (venoboxOverlay) {
                venoboxOverlay.remove();
            }
        };
    }, [id]);


    useEffect(() => {
        const fetchPosts = async () => {
            setLoadingPoto(true)
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_KDEKS_PHOTO + '/' + id;
                const response = await axios.get(`${url}${endpoint}`);
                setPostsPhoto(response.data);

            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,

                });
            } finally {
                setLoadingPoto(false);
            }
        };

        fetchPosts(); // Call fetchPosts function when component mounts


    }, [id]);

    useEffect(() => {
        if (posts.length > 0) {
            if (document.querySelector('.swiper-kdeks')) {
                const swipers = new Swiper('.swiper-kdeks', {
                    // pengaturan Swiper
                    loop: true,

                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    autoplay: {
                        delay: 2500,
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
        }

    }, [posts]);


    // untukmengeloladatasebelumdiloop
    useEffect(() => {
        // if (document.querySelector('.swiper-kdeks-agenda')) {

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
        // }
    }, [])
    useEffect(() => {
        if (Kota) {
            setDataKota(Kota);
        }
    }, [id]);

    useEffect(() => {
        if (dataKota.length > 0) {
            const foundItem = dataKota.find(kneks => convertToSlug(kneks.title) === slug);
            setListDataKota(foundItem);
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


    useEffect(() => {
        // const fetchPosts = async () => {
        //     try {
        //         const url = process.env.REACT_APP_API_URLKDEKS;
        //         const endpoint = process.env.REACT_APP_API_KDEKS_SEJARAH_PROV;
        //         const response = await axios.get(`${url}${endpoint}/${id}`);

        //         if (response.data && response.data.length > 0) {
        //             setPostSejarah(response.data[0]);
        //         } else {
        //             throw new Error("Data kosong atau tidak ditemukan.");
        //         }
        //     } catch (err) {
        //         Swal.fire({
        //             icon: "error",
        //             title: "Oops...",
        //             text: err,

        //         });
        //     }
        // };

        // fetchPosts(); 

        const fetchPostsTentang = async () => {
            try {
                const url = process.env.REACT_APP_API_URLKDEKS;
                const endpoint = process.env.REACT_APP_API_KDEKS_TENTANG_PROV;
                const response = await axios.get(`${url}${endpoint}/${id}`);
                if (response.data && response.data.length > 0) {
                    setPostTentang(response.data[0]); // Set data ke state
                } else {
                    throw new Error("Data kosong atau tidak ditemukan.");
                }
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,

                });
            }
        };

        fetchPostsTentang()

    }, [id]);

    const renderImage = (fileKey) => {
        if (listdataKota?.[fileKey] !== null) {
            return (
                <img
                    src={`${process.env.PUBLIC_URL}/${listdataKota?.[fileKey]}`}
                    alt="img-59"
                    className="img-fluid"
                />
            );
        }
        return null;
    };

    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner-kdeks ">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>{cookies.i18next === 'en' ? postKdeks?.title_en : postKdeks?.title}</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section-kdeks">
                    <div className="container">
                        <div className="row row-gutter-y-40">

                            {/* konten sebelah kiri */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-image">
                                    {loadingKdeks ? (
                                        <div className="skeleton-kdeks skeleton-kdeks-img"></div>
                                    ) : (
                                        <img src={`${process.env.PUBLIC_URL}/${listdataKota?.foto}`} alt="logo" width={300} className="img-fluid" />
                                    )}
                                </div>
                            </div>

                            {/* konten sebelah kanan */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-inner-x">
                                    {/* <h2 className="section-title">{postTentang ? postTentang.title : ''}</h2> */}
                                    {loadingKdeks ? (
                                        <>
                                            <div className="skeleton-kdeks skeleton-kdeks-text"></div>
                                            <div className="skeleton-kdeks skeleton-kdeks-text" style={{ width: "60%" }}></div>
                                        </>
                                    ) : (
                                        <>
                                            <h2 className="section-title">{t('tentangKamikdeks')} {cookies.i18next === 'en' ? postKdeks?.title_en : postKdeks?.title}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? postKdeks?.abouts_en : postKdeks?.abouts }} />
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
                                            <h2 className="section-title"> {t('sejarahKdeks')}  {cookies.i18next === 'en' ? postKdeks?.title_en : postKdeks?.title}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? postKdeks?.historys_en : postKdeks?.historys }} />
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
                                        // <img src={postTentang ? postTentang.images : `${process.env.PUBLIC_URL}/assets/image/sejarah.svg`} alt="sejarah" className="img-fluid" />
                                        <img src={postKdeks?.images} alt="sejarah" className="img-fluid" />
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className="row row-gutter-y-40 d-flex justify-content-center pt-5">
                            <div className="col-lg-3 text-center">
                                <div className="sidebar-widget">
                                    <div className="sidebar-widget-box-icon">
                                        <i className="flaticon-pdf"></i>
                                    </div>
                                    <div className="sidebar-widget-box-content">
                                        <h3>Surat Keputusan&nbsp;
                                            {cookies.i18next === 'en' ? postKdeks?.title_en : postKdeks?.title}
                                        </h3>
                                        <a
                                            href={`${process.env.PUBLIC_URL}/${listdataKota?.skFile}`}
                                            className="btn btn-primary mt-3"
                                            download
                                            target="_blank" // Buka di tab baru jika file bisa diakses langsung
                                            rel="noopener noreferrer" // Keamanan tambahan
                                        >
                                            Download
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="portfolio-section">
                    <div className="container">
                        <div className="section-title-box text-center">
                            <h2 className="section-title">{t('menu.strukturOrganisasi')}</h2>
                        </div>
                        <div className="row row-gutter-y-40 text-center">
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-image">
                                    {renderImage('skFile')}
                                    {renderImage('skFile2')}
                                    {renderImage('skFile3')}
                                    {renderImage('skFile4')}
                                    {renderImage('skFile5')}
                                    {renderImage('skFile6')}
                                    {renderImage('skFile7')}
                                </div>
                            </div>
                        </div>
                    </div >

                </section>
                <section className="portfolio-section">
                    <div className="container">
                        <div className="section-title-box text-center">
                            <h2 className="section-title">{t('beritaDanKegiatan')}</h2>
                        </div>
                        <div className="row row-gutter-30">

                            {loadingNew
                                ? Array(4)
                                    .fill()
                                    .map((_, index) => (
                                        <div
                                            className='col-lg-3 col-xl-3 d-flex'
                                            key={index}>
                                            <SkeletonCardBerita />
                                        </div>
                                    ))
                                :
                                posts.length > 0 ? (
                                    <div className="swiper swiper-kdeks">
                                        <div className="swiper-wrapper">
                                            {posts.slice(0, 5).map((item) => (
                                                <div className="col-lg-3 swiper-slide" key={item.id}>
                                                    <div className="berita-card">
                                                        <div className="berita-card-imgbox-direktorat-home">
                                                            <a href={item.title ? `/berita-kegiatan/${item?.id}/${convertToSlug(item?.title)}` : ''}>
                                                                <img
                                                                    src={item?.image === "" ? '/assets/image/foto-beritas.png' : item?.image}
                                                                    onError={(e) => {
                                                                        e.target.onerror = null;
                                                                        e.target.src = `/assets/image/foto-beritas.png`;
                                                                    }}
                                                                    className="img-fluid" alt={cookies.i18next === 'en' ? item?.title_en : item?.title} style={{ width: '100%', height: '200px', overflowY: 'hidden' }} />
                                                            </a>
                                                        </div>
                                                        <div className="berita-content-direktorat-xs">
                                                            <div className="direktorat-tag-home">
                                                                <span>{cookies.i18next === 'id' ? '#BERITABARU' : '#CURRENTNEWS'}</span>
                                                            </div>
                                                            <div className="event-card-title-direktorat-kdek pb-2">
                                                                <h4>
                                                                    <a href={item.title ? `/berita-kegiatan/${item?.id}/${convertToSlug(item?.title)}` : ''}>{cookies.i18next === 'en' ? item?.title_en : item?.title}</a>
                                                                </h4>
                                                            </div>
                                                            <div className="event-card-info-direktorat">
                                                                <span>{cookies.i18next === 'id' ? formatDate(item?.news_datetime, 'id') : formatDate(item?.news_datetime, 'en')}</span>
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
                                    </div >
                                ) : (
                                    <div className="col-lg-12 col-md-12" style={{ paddingBottom: '100px' }}>
                                        <p className="text-center text-danger">No posts available</p>
                                    </div>
                                )}
                        </div >
                    </div >

                </section >
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
                    <section className="news-section-xx">
                        <div className="container">
                            <div className="blog-box">
                                <div className="section-title-box text-center">
                                    <h2 className="section-title">Opini</h2>
                                </div>
                            </div>
                            <div className="row row-gutter-30">
                                {loadingOpini
                                    ? Array(4)
                                        .fill()
                                        .map((_, index) => (
                                            <div
                                                className='col-lg-3 col-xl-3 d-flex'
                                                key={index}>
                                                <SkeletonCardBerita />
                                            </div>
                                        ))
                                    :
                                    postsOpini.length > 0 ? (
                                        postsOpini.slice(0, 4).map((item) => (
                                            <div className="col-lg-3 col-md-6" key={item.id}>
                                                <div className="berita-card">

                                                    <div className="berita-content-direktorat-xs">
                                                        <div className="event-card-title pb-2">
                                                            <h4>
                                                                <a href={`/opini-kdeks/${item?.id}/${convertToSlug(item?.title)}/${id}`}>{cookies.i18next === 'en' ? item?.title_en : item?.title}</a>
                                                            </h4>
                                                        </div>
                                                        <div className="event-card-info-direktorat">
                                                            <span>{cookies.i18next === 'id' ? formatDate(item?.date_created, 'id') : formatDate(item?.date_created, 'en')}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-lg-12 col-md-12" style={{ paddingBottom: '100px' }}>
                                            <p className="text-center text-danger">No posts available</p>
                                        </div>
                                    )
                                }

                            </div >
                        </div>
                    </section>
                    <section className="news-section-xx">
                        <div className="container">
                            <div className="blog-box">
                                <div className="section-title-box text-center">
                                    <h2 className="section-title">Data</h2>
                                </div>
                            </div>
                            <div className="row ">

                                <div className="col-lg-3 col-xl-3">
                                    <div className="berita-card">

                                        <div className="berita-content-direktorat-xs">

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

                                        <div className="berita-content-direktorat-xs">

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

                                        <div className="berita-content-direktorat-xs">

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

                                        <div className="berita-content-direktorat-xs">

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
                                <h2 className="section-title">{t('menu.galeriFoto')}</h2>
                            </div>
                        </div>
                        <div className="row row-gutter-y-40">
                            {loadingPoto
                                ? Array(4)
                                    .fill()
                                    .map((_, index) => (
                                        <div
                                            className='col-lg-3 col-xl-3 d-flex'
                                            key={index}>
                                            <SkeletonCardBerita />
                                        </div>
                                    ))
                                : posts_photo.length > 0 ? (
                                    posts_photo.slice(0, 4).map((item, idx) => (
                                        <div className="col-md-3 col-lg-3" key={item.id}>
                                            <a href={item?.photo} className="my-image-links-c" data-gall="gallery">
                                                <div className="card-box-b card-shadow news-box">
                                                    <div className="img-box-b">
                                                        <img
                                                            src={item?.photo === "" ? '/assets/image/foto-beritas.png' : item?.photo}
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                e.target.src = `/assets/image/foto-beritas.png`;
                                                            }}
                                                            data-title={item?.title}
                                                            title={cookies.i18next === 'id' ? item.title : item.title_en}
                                                            alt="imgNews" style={{ width: '100%', height: '100%' }} sclassName="img-b img-fluid" />
                                                    </div>
                                                    <div className="card-overlay">
                                                        <div className="card-header-b-x-s">
                                                            <div className="card-title-b-s">
                                                                <h2 className="title-2-x-s text-white">
                                                                    {cookies.i18next === 'id' ? item.title : item.title_en}
                                                                </h2>
                                                            </div>
                                                            <div className="card-date-s">
                                                                <span className="date-b-s">{cookies.i18next === 'id' ? formatDate(item.news_datetime, 'id') : formatDate(item.news_datetime, 'en')}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-lg-12 col-md-12" style={{ paddingBottom: '100px' }}>
                                        <p className="text-center text-danger">No posts available</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </section>
                <section className="footer">
                    <div className="bottom-footer">

                    </div>
                    <div className="footer-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 ">
                                    <div className="footer-widget-logo pb-3">
                                        <a href="/kdeks">
                                            <img
                                                src="/assets/image/logoKdeks.png"
                                                alt="logo"
                                                width="200"
                                            />
                                        </a>
                                    </div>

                                    <div className="footer-widget-socials ">
                                        <a href={postKdeks?.twitter} target='_blank' rel='noreferrer'><i className="fa-brands fa-x-twitter"></i></a>
                                        <a href={postKdeks?.facebook} target='_blank' rel='noreferrer'><i className="fa-brands fa-facebook"></i></a>
                                        <a href={postKdeks?.linkedin} target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
                                        <a href={postKdeks?.instagram} target='_blank' rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
                                        <a href={postKdeks?.youtube} target='_blank' rel='noreferrer'><i className="fa-brands fa-youtube"></i></a>
                                    </div>

                                </div>

                                <div className="col-lg-2">
                                    <div className="footer-widget">
                                        <div className="footer-widget-department">
                                            <h4 className="footer-widget-title">{t('alamat')}</h4>
                                            <p>{postKdeks?.address}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="footer-widget">
                                        <div className="footer-widget-contact">
                                            <h4 className="footer-widget-title">{t('menu.kontak')}</h4>

                                        </div>
                                        <div className="footer-widget-contact-list">
                                            <i className="fa-solid fa-envelope"></i>
                                            <div className="footer-widget-contact-item">
                                                <a href={`mailto:${postKdeks?.email}`}>{postKdeks?.email}</a>
                                            </div>
                                        </div>
                                        <div className="footer-widget-contact-list">
                                            <i className="fa-solid fa-phone"></i>
                                            <div className="footer-widget-contact-item">
                                                <a href={`tel:${postKdeks?.phone_number}`}>{postKdeks?.phone_number}</a>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-3">
                                    <div className="footer-widget">

                                        <iframe width="100%" height="250px" frameBorder="0" scrolling="no" title="frame" marginHeight="0" marginWidth="0" src={postKdeks?.maps}>
                                        </iframe>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="conatiner">
                            <p>© Copyright {(new Date().getFullYear())} by {postKdeks?.title}</p>
                        </div>
                    </div>
                </section>
            </div >
        </>
    )
}

export default KdeksDetail