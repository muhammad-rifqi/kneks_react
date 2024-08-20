import React, { useState, useEffect } from "react";
import isiItemsBerita from "../dumy/dataBerita"
import VenoBox from 'venobox';
const KeuanganSosialSyariah = () => {
    const [items, setItems] = useState([]);
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

    // untukmengeloladatasebelumdiloop
    useEffect(() => {
        const isian = isiItemsBerita();
        setItems(isian);
        // alert(items.length);


    }, []);
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
                                    <h2 className="section-title text-center">Direktorat Keuangan Sosial Syariah</h2>
                                    <p>Deskripsi dari direktorat Industri Produk Halal itu apa (Sementara masih menggunakan lorem ipsum) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                    <h5 className="about-one-inner-text-x">Divisi</h5>
                                    <p>Lanjutan deskripsi dari direktorat ini Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <div className="row row-gutter-y-30 pt-5 d-flex justify-content-center">
                                        <div className="col-6 col-md-4 col-lg-2 pb-3">
                                            <a href={`https://www.kemenkeu.go.id/`} target="_blank" className="component-service d-block " rel="noreferrer">
                                                <div className="service-image ">
                                                    <img src="assets/image/kemenkeu.png" className="img-fluid " alt="kemenkeu" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-2 pb-3">
                                            <a href={`https://www.ekon.go.id/`} target="_blank" className="component-service  d-block" rel="noreferrer">
                                                <div className="service-image">
                                                    <img src="assets/image/instansi2.png" className="img-fluid" alt="kementriang bidang perekonomian republik indonesia" />
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-6 col-md-4 col-lg-2 pb-3">
                                            <a href={`https://www.kemenkopmk.go.id/`} target="_blank" className="component-service  d-block" rel="noreferrer">
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
                            {
                                items.slice(0, 4).map((item) => (
                                    <div className="col-lg-3 col-xl-3" key={item.id}>
                                        <div className="berita-card">
                                            <div className="berita-card-imgbox-direktorat ">
                                                <a href={`/berita-terkait/${item.slug}`}><img src={item.foto} rel="noreferrer" className="img-fluid" alt={item.title} /></a>
                                            </div>
                                            <div className="berita-content-direktorat">

                                                <div className="event-card-title pb-2">
                                                    <h4>
                                                        <a href={`/berita-terkait/${item.slug}`}>{item.title}</a>
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

                <section className="news-section">
                    <div className="container">
                        <div className="blog-box">
                            <div className="section-title-box text-center">
                                <h2 className="section-title">Opini</h2>
                            </div>
                        </div>
                        <div className="row row-gutter-30">
                            {
                                items.slice(0, 4).map((item) => (
                                    <div className="col-lg-3 col-xl-3" key={item.id}>
                                        <div className="berita-card">
                                            {/* <div className="berita-card-imgbox-direktorat ">
                                                <a href={`/berita-terkait/${item.slug}`}><img src={item.foto} className="img-fluid" alt={item.title} /></a>
                                            </div> */}
                                            <div className="berita-content-direktorat">

                                                <div className="event-card-title pb-2">
                                                    <h4>
                                                        <a href={`/berita-terkait/${item.slug}`}>{item.title}</a>
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
                                                <img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" />

                                            </div>
                                            <div className="team-card-content-x">
                                                <h4><a href="team-details.html">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
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
                                                <img src="/assets/image/berita.jpg" className="img-fluid" alt="img-40" />

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
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="team-card-x">
                                            <div className="team-card-img-x">
                                                <img src="/assets/image/berita.jpg" className="img-fluid" alt="img-40" />

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
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="team-card-x">
                                            <div className="team-card-img-x">
                                                <img src="/assets/image/berita.jpg" className="img-fluid" alt="img-40" />

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
                            {
                                items.slice(0, 4).map((item) => (
                                    <div className="col-lg-3 col-xl-3" key={item.id}>
                                        <div className="berita-card">
                                            {/* <div className="berita-card-imgbox-direktorat ">
                                                <a href={`/berita-terkait/${item.slug}`}><img src={item.foto} className="img-fluid" alt={item.title} /></a>
                                            </div> */}
                                            <div className="berita-content-direktorat">

                                                <div className="event-card-title pb-2">
                                                    <h4>
                                                        <a href={`/berita-terkait/${item.slug}`}>{item.title}</a>
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
                    </div>
                </section>
                <section className="funfact-section foto-section-x">
                    <div className="container">
                        <div className="funfact-box">
                            <div className="section-title-box text-center">
                                <h2 className="section-title">Galeri Foto</h2>
                            </div>
                        </div>
                        <div className="row row-gutter-y-40">
                            <div className="col-md-3 col-lg-3">
                                <a href="/assets/image/berita2.jpeg" className="my-image-links-foto" data-gall="gallery01">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-b " data-gall="gallery01">
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
                                <a href="/assets/image/berita.jpg" className="my-image-links-foto" data-gall="gallery01">
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
                                <a href="/assets/image/berita.jpg" className="my-image-links-foto" data-gall="gallery01">
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
                                <a href="/assets/image/berita.jpg" className="my-image-links-foto" data-gall="gallery01">
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
                                            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links" data-autoplay="true" data-vbtype="video">
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
                                            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links" data-autoplay="true" data-vbtype="video">
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
                                            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links" data-autoplay="true" data-vbtype="video">
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
                                            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links" data-autoplay="true" data-vbtype="video">
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

export default KeuanganSosialSyariah