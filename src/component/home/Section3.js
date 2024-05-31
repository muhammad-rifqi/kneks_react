import React from "react"

const Section3 = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <div className="about-image">
                            <div className="about-image-inner img-one">
                                <img src="/assets/image/gallery/about-1.jpg" className="img-fluid" alt="img-2" />
                                <div className="sign-text">Kevin Martin</div>
                                <div className="about-image-caption">
                                    <div className="about-image-caption-inner">
                                        <span className="about-caption-number">18</span>
                                        <span className="about-caption-text">Years of<br />experience</span>
                                    </div>
                                </div>
                            </div>
                            <div className="about-image-inner img-two">
                                <img src="/assets/image/shapes/about-3.jpg" className="floated-image" alt="img-3" />
                                <img src="/assets/image/gallery/about-2.jpg" className="img-fluid" alt="img-4" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-inner">
                            <div className="section-title-box">
                                <div className="section-tagline">Our introductions</div>
                                <h2 className="section-title">Welcome & Support to City Municipal</h2>
                                <p>Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.</p>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-12 col-md-6">
                                    <div className="about-card">
                                        <h4 className="about-title"><i className="fa-solid fa-circle-check"></i>Business & Economy</h4>
                                        <p className="about-text">Lorem ipsum dolor sited amet consectetur notted.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-6">
                                    <div className="about-card">
                                        <h4 className="about-title"><i className="fa-solid fa-circle-check"></i>Health & Education</h4>
                                        <p className="about-text">Lorem ipsum dolor sited amet consectetur notted.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-author-box">
                                <div className="about-author-image">
                                    <img src="/assets/image/gallery/about-4.png" className="img-fluid" alt="img-5" />
                                </div>
                                <div className="about-author-box-meta">
                                    <h5>Mr. Kevin Martin</h5>
                                    <span>City Mayor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3