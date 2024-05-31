import React from "react";
const Section1 = () => {
    return (
        <section className="main-slider">
            <div className="main-slider-swiper owl-carousel owl-theme">
                <div className="item">
                    <div className="item-slider-bg" style={{backgroundImage: `url("/assets/image/bg/slider-bg-1.png")`}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slider-content">
                                    <div className="slider-tagline">City Goverment Online Services</div>
                                    <h1 className="section-title">Fastest Growing<br /> City Rome</h1>
                                    <a href="index-2.html" className="btn btn-primary">Discover More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="item-slider-bg" style={{backgroundImage: `url("/assets/image/bg/slider-two-bg-1.png")`}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slider-content">
                                    <div className="slider-tagline">City Goverment Online Services</div>
                                    <h1 className="section-title">Fastest Growing <br />City Rome</h1>
                                    <a href="index-2.html" className="btn btn-primary">Discover More</a>
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