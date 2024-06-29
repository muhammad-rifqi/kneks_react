import React from "react";

const isiItemsBerita = [
    {
        title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
        tag: "#BERITABARU",
        tanggal: "20 Juni 2024",
        foto: "assets/image/berita.jpg"
    },
    {
        title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
        tag: "#BERITABARU",
        tanggal: "20 Juni 2024",
        foto: "assets/image/berita3.svg"
    },
    {
        title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
        tag: "#BERITABARU",
        tanggal: "20 Juni 2024",
        foto: "assets/image/berita3.svg"
    },
    {
        title: "Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah",
        tag: "#BERITABARU",
        tanggal: "20 Juni 2024",
        foto: "assets/image/berita3.svg"
    },

];

const InfoTerkini = () => {
    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Liputan Media</h3>
                        </div>
                    </div>
                </section>
                <section className="berita-section">
                    <div className="container">
                        <div className="row row-gutter-30">
                            {isiItemsBerita.map((item) => {
                                return (
                                    <div className="col-lg-4 col-xl-4" key={item.title}>
                                        <div className="berita-card">
                                            <div className="berita-card-imgbox">
                                                <img src={item.foto} className="img-fluid" alt="img-117" />
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
                                                <h4> <a href="cause-details.html">{item.title}</a> </h4>
                                                {/* <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p> */}
                                                {/* <a href="cause-details.html" className="btn btn-primary">Donate Now</a> */}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        </div >
                    </div >
                </section >
            </div >
        </>
    )
}
export default InfoTerkini