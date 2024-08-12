import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import isiItemsBerita from "../component/dumy/dataBerita";
const Kdeks = () => {
    const [items, setItems] = useState([]);


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
                            <h3>KDEKS</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section">
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
                        <div className="row row-gutter-y-40 d-flex justify-content-center">
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
                <section className="news-section">
                    <div className="container">
                        <div className="blog-box">
                            <div className="section-title-box text-center">
                                <h2 className="section-title">Berita Dan Kegiatan</h2>
                            </div>
                        </div>
                        <div className="row row-gutter-30">
                            {
                                items.slice(0, 4).map((item) => (
                                    <div className="col-lg-3 col-xl-3" key={item.id}>
                                        <div className="berita-card">
                                            <div className="berita-card-imgbox-direktorat ">
                                                <Link to={`/berita-terkait/${item.slug}`}><img src={item.foto} className="img-fluid" alt={item.title} /></Link>
                                            </div>
                                            <div className="berita-content-direktorat">

                                                <div className="event-card-title pb-2">
                                                    <h4>
                                                        <Link to={`/berita-terkait/${item.slug}`}>{item.title}</Link>
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
                <section className="portfolio-section ">

                    <div className="portfolio-content conatainer-fluid">
                        <div className="portfolio-carousel owl-carousel owl-theme">

                            <div className="item">
                                <div className="card-box-b card-shadow news-box">
                                    <div className="img-box-b">
                                        <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-header-b">
                                            <div className="card-category-b">
                                                <a href="#test" className="category-b">Berita Baru</a>
                                            </div>
                                            <div className="card-title-b">
                                                <h2 className="title-2">
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
                            </div>
                            <div className="item">
                                <div className="card-box-b card-shadow news-box">
                                    <div className="img-box-b">
                                        <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-header-b">
                                            <div className="card-category-b">
                                                <a href="#test" className="category-b">Berita Baru</a>
                                            </div>
                                            <div className="card-title-b">
                                                <h2 className="title-2">
                                                    <a href="blog-single.html">Travelx is comming
                                                        new</a>
                                                </h2>
                                            </div>
                                            <div className="card-date">
                                                <span className="date-b">18 Sep. 2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card-box-b card-shadow news-box">
                                    <div className="img-box-b">
                                        <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                    </div>
                                    <div className="card-overlay">
                                        <div className="card-header-b">
                                            <div className="card-category-b">
                                                <a href="#test" className="category-b">Berita Baru</a>
                                            </div>
                                            <div className="card-title-b">
                                                <h2 className="title-2">
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
                            </div>



                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Kdeks