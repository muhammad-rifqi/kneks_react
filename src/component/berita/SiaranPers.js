import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SiaranPers = () => {

    const isiItemsBerita = () => [
        {
            id: "1",
            slug: "slug-satu",
            title: "Slug Satu",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita.jpg"
        },
        {
            id: "2",
            slug: "slug-dua",
            title: "Slug Dua",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita3.svg"
        },
        {
            id: "3",
            slug: "slug-tiga",
            title: "Slug Tiga",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita3.svg"
        },
        {
            id: "4",
            slug: "slug-empat",
            title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita3.svg"
        },
        {
            id: "5",
            slug: "slug-lima",
            title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita.jpg"
        },
        {
            id: "6",
            slug: "slug-enam",
            title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita.jpg"
        },
        {
            id: "7",
            slug: "slug-tujuh",
            title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita.jpg"
        },
        {
            id: "8",
            slug: "slug-delapan",
            title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita.jpg"
        },
        {
            id: "9",
            slug: "slug-sembilan",
            title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita.jpg"
        },
        {
            id: "10",
            slug: "slug-sepuluh",
            title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita3.svg"
        },
        {
            id: "11",
            slug: "slug-sebelas",
            title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita3.svg"
        },
        {
            id: "12",
            slug: "slug-dua-belas",
            title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita3.svg"
        },
        {
            id: "13",
            slug: "slug-tiga-belas",
            title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita3.svg"
        },
        {
            id: "14",
            slug: "slug-empat-belas",
            title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita3.svg"
        },
        {
            id: "15",
            slug: "slug-lima-belas",
            title: "Slug Lima Belas",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita3.svg"
        },
        {
            id: "16",
            slug: "slug-enam-belas",
            title: "Slug Enam Belas",
            tag: "#BERITABARU",
            tanggal: "20 Juni 2024",
            foto: "assets/image/berita3.svg"
        },

    ];
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
                            <h3>Siaran Pers</h3>
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
                                                <img src={item.foto} className="img-fluid" alt={item.title} />
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
                                                <h4> <Link to={`/siaran-pers/${item.slug}`}>{item.title}</Link></h4>
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

export default SiaranPers