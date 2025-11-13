import React, { useState, useEffect } from "react";
// import isiItemsBerita from "../dumy/dataBerita"

import "venobox/dist/venobox.css";
import "venobox/dist/venobox.min.js";
import VenoBox from 'venobox';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
import SkeletonCardBerita from "../skeleton/CardBerita";
import './dr.css'
const IndustriProdukHalal = () => {
    const [loading, setLoading] = useState(true);
    const [loadingNew, setLoadingNew] = useState(true);
    const [loadingOpini, setLoadingOpini] = useState(true);
    const [loadingFile, setLoadingFile] = useState(true);
    // const [loadingData, setLoadingData] = useState(true);
    const [loadingPoto, setLoadingPoto] = useState(true);
    const [loadingVideo, setLoadingVideo] = useState(true);
    const { t } = useTranslation();
    const [item_photo, setItemsPhoto] = useState([]);
    const [item_video, setItemsVideo] = useState([]);

    // const [posts, setPosts] = useState([]);
    const [detaildir, setDetailDirektorat] = useState([]);
    const [cookies, setCookie] = useCookies(['i18next']);
    const formatDate = (date, locale = 'en') => {
        dayjs.locale(locale); // Set the locale dynamically
        return dayjs(date).format('DD MMMM YYYY'); // Format the date
    };
    const [newsdir, setDirektoratNews] = useState([]);
    const [opinidir, setDirektoratOpini] = useState([]);
    const [filesdir, setDirektoratFiles] = useState([]);

    window.addEventListener("load", () => {
        setCookie('i18next', 'id', { path: '/' });
    });

    const convertToSlug = (title) => {
        if (!title) return ""; // Handle null or undefined title
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    let params = useParams();
    let id_dir = params.id;
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const urls = process.env.REACT_APP_API_URL;
                const endpoints = process.env.REACT_APP_API_DIREKTORAT_DETAIL + '/' + id_dir;
                const responses = await axios.get(`${urls}${endpoints}`);
                setDetailDirektorat(responses.data);
                // console.log(responses.data)
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,

                });
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, [id_dir]);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoadingNew(true);
            try {
                const urls = process.env.REACT_APP_API_URL;
                const endpoints = process.env.REACT_APP_API_POST_DIREKTORAT + '/' + id_dir;
                const responses = await axios.get(`${urls}${endpoints}`);
                setDirektoratNews(responses.data);
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
    }, [id_dir]);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoadingOpini(true);
            try {
                const urls = process.env.REACT_APP_API_URL;
                const endpoints = process.env.REACT_APP_API_POST_DIREKTORAT_OPINI + '/' + id_dir;
                const responses = await axios.get(`${urls}${endpoints}`);
                setDirektoratOpini(responses.data);
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
    }, [id_dir]);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoadingFile(true);
            try {
                const urls = process.env.REACT_APP_API_URL;
                const endpoints = process.env.REACT_APP_API_POST_DIREKTORAT_FILES + '/' + id_dir;
                const responses = await axios.get(`${urls}${endpoints}`);
                setDirektoratFiles(responses.data);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,

                });
            } finally {
                setLoadingFile(false);
            }
        };
        fetchPosts();
    }, [id_dir]);

    // useEffect(() => {
    //     // Function to fetch posts
    //     const fetchPosts = async () => {
    //         try {
    //             const url = process.env.REACT_APP_API_URL;
    //             const endpoint = process.env.REACT_APP_API_POST;
    //             const response = await axios.get(`${url}${endpoint}`);
    //             setPosts(response.data);
    //         } catch (err) {
    //             Swal.fire({
    //                 icon: "error",
    //                 title: "Oops...",
    //                 text: err,

    //             });
    //         }
    //     };
    //     fetchPosts();
    // }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoadingPoto(true);
            try {
                const urls = process.env.REACT_APP_API_URL;
                const endpoints = process.env.REACT_APP_API_POST_DIREKTORAT_PHOTOS + '/' + id_dir;
                const responses = await axios.get(`${urls}${endpoints}`);
                setItemsPhoto(responses.data);

                // Inisialisasi VenoBox setelah data dimuat
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
                setLoadingPoto(false);
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
    }, [id_dir]);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoadingVideo(true);
            try {
                const urls = process.env.REACT_APP_API_URL;
                const endpoints = process.env.REACT_APP_API_POST_DIREKTORAT_VIDEOS + '/' + id_dir;
                const responses = await axios.get(`${urls}${endpoints}`);
                setItemsVideo(responses.data);

                // Inisialisasi VenoBox setelah data dimuat
                setTimeout(() => {
                    if (document.querySelectorAll('.my-video-links').length > 0) {
                        const myVenoBox = new VenoBox({
                            selector: '.my-video-links',
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

                        // Simpan instance VenoBox ke window untuk akses global
                        window.myVideoVenoBox = myVenoBox;
                    }
                }, 500);

            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,
                });
            } finally {
                setLoadingVideo(false);
            }
        };
        fetchPosts();

        return () => {
            // Tutup VenoBox jika masih terbuka
            if (window.myVideoVenoBox) {
                try {
                    window.myVideoVenoBox.close();
                    delete window.myVideoVenoBox;
                } catch (e) {
                    console.error("Error closing VenoBox:", e);
                }
            }

            // Bersihkan semua instance VenoBox untuk mencegah duplikasi
            const elements = document.querySelectorAll(".my-video-links");
            elements.forEach((el) => {
                el.removeAttribute("data-venobox-initialized");
            });

            // Hapus elemen VenoBox dari DOM
            const venoboxOverlay = document.querySelector('.vbox-overlay');
            if (venoboxOverlay) {
                venoboxOverlay.remove();
            }
        };
    }, [id_dir]);
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    function nl2brHtml(str) {
        return str.replace(/\n/g, "<br>");
    }

    function decodeHtmlEntities(str) {
        const txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
    }

    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>{t('menu.direktorat')}</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section">
                    <div className="container">
                        <div className="row row-gutter-y-40">
                            <div className="col-lg-12 ">
                                <div className="event-details-inner-box text-center">
                                    <img src={detaildir[0]?.directiorat_banner} className="img-fluid" alt="img-173" />

                                </div>
                                <div className="about-one-inner-x">
                                    <h2 className="section-title text-center">{cookies.i18next === 'en' ? detaildir[0]?.title_en : detaildir[0]?.title}</h2>
                                    {/* <p>{t('direktorat.direktoratIndustriProdukHalalAdalah')}</p> */}
                                   <p dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? decodeHtmlEntities(detaildir[0]?.description_en) : decodeHtmlEntities(detaildir[0]?.description)}} />
                                    <h5 className="about-one-inner-text-x">{t('divisi')}</h5>

                                    {/* <div className="row row-gutter-y-30 pt-5 d-flex justify-content-center">
                                        <div className="col-6 col-md-4 col-lg-2 pb-3">
                                            <a href="#t" className="component-service d-block ">
                                                <div className="service-image ">
                                                    <img src="assets/image/kemenkeu.png" className="img-fluid " alt="kemenkeu" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-2 pb-3">
                                            <a href="#t" className="component-service  d-block">
                                                <div className="service-image">
                                                    <img src="assets/image/instansi2.png" className="img-fluid" alt="kementriang bidang perekonomian republik indonesia" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-2 pb-3">
                                            <a href="#t" className="component-service  d-block">
                                                <div className="service-image">
                                                    <img src="assets/image/instansi32.png" className="img-fluid" alt="kemenko pmk" />
                                                </div>
                                            </a>
                                        </div>
                                    </div> */}

                                    <div className="row row-gutter-y-30 d-flex justify-content-center">
                                        <div className="col-12">
                                            <div style={{ padding: '10px', backgroundColor: '#1c96c5', color: 'white' }}>
                                                {
                                                    detaildir[0]?.detail && detaildir[0].detail.length > 0 ? (
                                                        detaildir[0].detail.map((element) => (
                                                            <details style={{ padding: '10px', borderBottom: '1px solid #fff', color: '#fff' }} key={element?.id}>
                                                                <summary>{cookies.i18next === 'en' ? element?.title_en : element?.title}</summary>
                                                                <div style={{ padding: '10px', color: 'white' }}>
                                                                    <p style={{ color: 'white' }} dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? nl2brHtml(element?.description_en) : nl2brHtml(element?.description) }} />
                                                                </div>
                                                            </details>
                                                        ))
                                                    ) : (
                                                        <div style={{ padding: '10px', color: 'white' }}>
                                                            <p style={{ color: 'white' }}>Tidak ada divisi.</p>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="funfact-section">
                    <div className="container">
                        <div className="funfact-box">
                            <div className="section-title-box text-center">
                                <h2 className="section-title">{t('beritaTerkait')}</h2>
                            </div>
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
                                newsdir.length > 0 ? (
                                    newsdir.slice(0, 4).map((item) => (
                                        <div className="col-lg-3 " key={item.id}>
                                            <div className="berita-card">
                                                <div className="berita-card-imgbox-direktorat-homes " >
                                                    <a href={`/berita-kegiatan/${item.id}/${convertToSlug(item.title)}`}>
                                                        <img
                                                            src={item?.image === "" ? '/assets/image/foto-beritas.png' : item?.image}
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                e.target.src = `/assets/image/foto-beritas.png`;
                                                            }}
                                                            className="img-fluid berita-img-responsive" alt={item.title} />
                                                    </a>
                                                </div>
                                                <div className="berita-content-direktorat-x-t" >
                                                    <div className="direktorat-tag-home">
                                                        <span>#BERITABARU</span>
                                                        {/* {item?.tag.split(",").map((tag, index) => (
                                                            <span key={index}>{tag ? '#' + tag : ''} </span>

                                                        ))} */}
                                                    </div>
                                                    <div className="event-card-title-direktorat pb-2">
                                                        <h4>
                                                            <a href={`/berita-kegiatan/${item.id}/${convertToSlug(item.title)}`}>{item.title}</a>
                                                        </h4>
                                                    </div>
                                                    <div className="event-card-info-direktorat-t">
                                                        <span>{dayjs(item.news_datetime).format('DD MMMM YYYY')}</span>
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
                <section className="funfact-section-struktur-x">
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
                                    opinidir.length > 0 ? (
                                        opinidir.slice(0, 4).map((item) => (
                                            <div className="col-lg-3 col-xl-3" key={item.id}>
                                                <div className="berita-card">
                                                    {/* <div className="berita-card-imgbox-direktorat ">
                                                <a href={`/berita-terkait/${item.slug}`}><img src={item.foto} className="img-fluid" alt={item.title} /></a>
                                            </div> */}
                                                    <div className="berita-content-direktorat-xs">

                                                        <div className="event-card-title pb-2">
                                                            <h4>
                                                                <a href={`/opini-direktorat/${item.id}/${convertToSlug(item.title)}/${id_dir}`} >{item.title}</a>
                                                            </h4>
                                                        </div>
                                                        <div className="event-card-info-direktorat">
                                                            <span>{dayjs(item.date_created).format('DD MMMM YYYY')}</span>
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
                    <section className="funfact-section">
                        <div className="container">
                            <div className="funfact-box">
                                <div className="section-title-box text-center">
                                    <h2 className="section-title">{t('menu.ePustaka')}</h2>
                                </div>
                            </div>
                            <div className="row row-gutter-y-30 d-flex justify-content-center">
                                <div className="col-lg-9">
                                    <div className="row ">
                                        {loadingFile
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
                                            filesdir.length > 0 ? (
                                                filesdir.slice(0, 4).map((item) => (
                                                    <div className="col-12 col-md-6 col-xl-3">
                                                        <div className="team-card-x">
                                                            <div className="team-card-img-x">
                                                                <a href="#t"><img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" /></a>
                                                            </div>
                                                            <div className="team-card-content-x">
                                                                <h4><a href="#t">{item?.title}</a></h4>
                                                                <div className="d-flex justify-content-between align-items-end">
                                                                    <p>{dayjs(item.date).format('DD MMMM YYYY')}</p>
                                                                    <a href="#t" data-bs-toggle="tooltip" title="download">
                                                                        <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                                    </a>
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
                                    </div>
                                </div>
                            </div>
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
                                :
                                item_photo.length > 0 ? (
                                    item_photo.slice(0, 4).map((item, idx) => (
                                        <div className="col-md-3 col-lg-3" key={item.id}>
                                            <a
                                                href={item?.photo}
                                                className="my-image-links-c"
                                                data-gall="gallery10"
                                                data-title={item?.title}
                                                title={cookies.i18next === 'id' ? item.title : item.title_en}
                                            >
                                                <div className="card-box-b card-shadow news-box">
                                                    <div className="img-box-b">
                                                        <img
                                                            src={item?.photo === "" ? '/assets/image/foto-beritas.png' : item?.photo}
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                e.target.src = `/assets/image/foto-beritas.png`;
                                                            }}
                                                            alt={item?.title || "Galeri Foto"}
                                                            className="img-b img-fluid"
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                        />
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
                        <div className="funfact-box pt-5">
                            <div className="section-title-box text-center">
                                <h2 className="section-title">{t('menu.galeriVideo')}</h2>
                            </div>
                        </div>
                        <div className="row row-gutter-y-40">
                            <section className="video-section-x">
                                {/* <div className="container"> */}
                                <div className="row row-gutter-y-40">
                                    {loadingVideo
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
                                        item_video.length > 0 ? (
                                            item_video.slice(0, 4).map((item) => (
                                                <div className="col-md-3 col-lg-3" key={item.id}>
                                                    <a href={`https://www.youtube.com/watch?v=${item?.video}`} className="my-video-links" data-autoplay="true" data-vbtype="video" data-title={item?.title} title={cookies.i18next === 'id' ? item.title : item.title_en}>
                                                        <div className="card-box-b-d card-shadow news-box">
                                                            <div className="img-box-bc-d">
                                                                <img src={`https://img.youtube.com/vi/${item?.video}/hqdefault.jpg`} alt="imgNews" className="img-b img-fluid" />
                                                                <div className="video-btn d-flex justify-content-center">
                                                                    <div className="play-icon">
                                                                        <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-overlay">
                                                                <div className="card-header-b-x-d">
                                                                    <div className="card-title-b-d">
                                                                        <h2 className="title-2-x-d text-white">
                                                                            {cookies.i18next === 'id' ? item.title : item.title_en}
                                                                        </h2>
                                                                    </div>
                                                                    <div className="card-date-d">
                                                                        <span className="date-b-d">{cookies.i18next === 'id' ? formatDate(item.videos_datetime, 'id') : formatDate(item.videos_datetime, 'en')}</span>
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
                                {/* </div> */}
                            </section>
                        </div>
                    </div >
                </section >
            </div >
        </>
    )
}

export default IndustriProdukHalal