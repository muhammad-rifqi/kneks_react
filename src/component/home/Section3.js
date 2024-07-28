import React from "react"

const Section3 = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <div className="about-image">
                            <div className="about-image-inner img-one">
                                <img src="/assets/image/about-1.svg" className="img-fluid" alt="img-2" />
                                {/* <div class="about-image-caption">
                                    <div class="about-image-caption-inner">

                                    </div>
                                </div> */}

                            </div>
                            <div className="about-image-inner img-two">
                                <img src="/assets/image/shapes/about-3.jpg" className="floated-image" alt="img-3" />
                                <img src="/assets/image/about-2.svg" className="img-fluid" alt="img-4" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-inner">
                            <div className="section-title-box">
                                <div className="section-tagline">Perkenalkan</div>
                                <h2 className="section-title">Komite Nasional Ekonomi dan Keuangan Syariah (KNEKS)</h2>
                                <p>merupakan perubahan dari KNKS untuk peningkatan pembangunan ekosistem ekonomi dan keuangan syariah serta menjadikan Indonesia sebagai Pusat Halal Dunia.  Pencanangan titik awal untuk memposisikan Indonesia sebagai salah satu pelaku utama dan hub ekonomi syariah dunia dilakukan seiring dengan peluncuran Masterplan Ekonomi Syariah Indonesia pada bulan Mei 2019.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3