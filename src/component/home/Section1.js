import React from "react";
const Section1 = () => {
    return (
        <section className="main-slider">
            <div className="main-slider-swiper owl-carousel owl-theme">
                <div className="item">
                    <div className="item-slider-bg" style={{ backgroundImage: `url("/assets/image/slide.png")` }}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slider-content">
                                    <h1 className="section-title">"Menyatukan langkah, Memajukan Negeri"</h1>
                                    <div className="slider-tagline">Dengan mempercepat, memperluas dan memajukan pengembangan ekonomi dan keuangan syariah dalam rangka memperkuat ketahanan ekonomi nasional </div>
                                    {/* <a href="index-2.html" className="btn btn-primary">Discover More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-slider-bg" style={{ backgroundImage: `url("/assets/image/slide.png")` }}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slider-content">
                                    <h1 className="section-title">"Menyatukan langkah, Memajukan Negeri"</h1>
                                    <div className="slider-tagline">Dengan mempercepat, memperluas dan memajukan pengembangan ekonomi dan keuangan syariah dalam rangka memperkuat ketahanan ekonomi nasional </div>
                                    {/* <a href="index-2.html" className="btn btn-primary">Discover More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section1