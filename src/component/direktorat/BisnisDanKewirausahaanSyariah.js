import React, { useState, useEffect } from "react";
import isiItemsBerita from "../dumy/dataBerita"

import "venobox/dist/venobox.css";
import "venobox/dist/venobox.min.js";
import VenoBox from 'venobox';

import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
const BisnisDanKewirausahaanSyariah = () => {
    const [items, setItems] = useState([]);
    const [posts, setPosts] = useState([]);
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
    }, []);
    useEffect(() => {
        const isian = isiItemsBerita();
        setItems(isian);
        // alert(items.length);

        new VenoBox({
            selector: '.my-image-links',
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

        return () => {
            // Manually remove all Venobox instances to prevent duplicates
            const elements = document.querySelectorAll(".my-image-links");
            elements.forEach((el) => {
                el.removeAttribute("data-venobox-initialized"); // Reset initialization flag
            });
        };

    }, []);
    useEffect(() => {


        new VenoBox({
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

        return () => {
            // Manually remove all Venobox instances to prevent duplicates
            const elements = document.querySelectorAll(".my-video-links");
            elements.forEach((el) => {
                el.removeAttribute("data-venobox-initialized"); // Reset initialization flag
            });
        };

    }, [items]);
    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Direktorat</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section">
                    <div className="container">
                        <div className="row row-gutter-y-40">
                            <div className="col-lg-12 ">
                                <div className="event-details-inner-box text-center">
                                    <img src="assets/image/diph.svg" className="img-fluid" alt="img-173" />

                                </div>
                                <div className="about-one-inner-x">
                                    <h2 className="section-title text-center">Direktorat Bisnis Dan Kewirausahaan Syariah</h2>
                                    <p>Direktorat Bisnis dan Kewirausahaan Syariah di Komite Nasional Ekonomi dan Keuangan Syariah (KNEKS) bertanggung jawab untuk mendorong pertumbuhan ekonomi melalui pengembangan bisnis dan kewirausahaan yang berlandaskan prinsip syariah. Fokus utama dari direktorat ini adalah memperkuat ekosistem bisnis syariah dan menciptakan peluang bagi para pengusaha dan pelaku usaha mikro, kecil, dan menengah (UMKM) yang ingin menjalankan usahanya sesuai dengan prinsip syariah.</p>
                                    <h5 className="about-one-inner-text-x">Divisi</h5>
                                    <p>Dengan peran ini, Direktorat Bisnis dan Kewirausahaan Syariah KNEKS berupaya mendorong terciptanya iklim usaha yang inklusif dan berkelanjutan sesuai dengan nilai-nilai syariah, serta menjadikan Indonesia sebagai pusat bisnis syariah yang kompetitif di tingkat global.</p>

                                    <div className="row row-gutter-y-30 pt-5 d-flex justify-content-center">
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
                                <h2 className="section-title">Berita Terkait</h2>
                            </div>
                        </div>
                        <div className="row row-gutter-30">
                            {posts.slice(0, 4).map((item) => (
                                <div className="col-lg-3" key={item.id}>
                                    <div className="berita-card">
                                        <div className="berita-card-imgbox-direktorat-home ">
                                            <a href={`/berita-kegiatan/${convertToSlug(item.title)}`}><img src="/assets/image/berita3.svg" className="img-fluid" alt={item.title} /></a>
                                        </div>
                                        <div className="berita-content-direktorat-x">
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
                            ))
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
                                {
                                    posts.slice(0, 4).map((item) => (
                                        <div className="col-lg-3 col-xl-3" key={item.id}>
                                            <div className="berita-card">
                                                {/* <div className="berita-card-imgbox-direktorat ">
                                                <a href={`/berita-terkait/${item.slug}`}><img src={item.foto} className="img-fluid" alt={item.title} /></a>
                                            </div> */}
                                                <div className="berita-content-direktorat-xs">

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
                                <h2 className="section-title">Galeri Foto</h2>
                            </div>
                        </div>
                        <div className="row row-gutter-y-40">
                            {items.slice(0, 4).map((item, idx) => (
                                <div className="col-md-3 col-lg-3" key={item.id}>
                                    <a href="/assets/image/berita2.jpeg" className="my-image-links" data-gall="gallery10">
                                        <div className="card-box-b card-shadow news-box">
                                            <div className="img-box-b ">
                                                <img src="/assets/image/berita2.jpeg" alt="imgNews" className="img-b img-fluid" />
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
                            ))}

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
                                        {items.slice(0, 4).map((item) => (
                                            <div className="col-md-3 col-lg-3" key={item.id}>
                                                <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-video-links" data-autoplay="true" data-vbtype="video">
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
                                        ))}


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

export default BisnisDanKewirausahaanSyariah