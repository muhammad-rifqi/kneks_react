import React from "react";
const LiputanMedia = () => {
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
                <section className="causes-section">
                    <div className="container">
                        <div className="row row-gutter-30">
                            <div className="col-lg-6 col-xl-4">
                                <div className="causes-card">
                                    <div className="causes-card-imgbox">
                                        <img src="assets/image/causes/causes-1.jpg" className="img-fluid" alt="img-117" />
                                    </div>
                                    <div className="causes-content">
                                        <div className="causes-card-funding">
                                            
                                            <div className="causes-card-funding-list">
                                                <div className="causes-card-funding-item">
                                                    <div className="causes-card-funding-amount">$25,487</div>
                                                    <div className="causes-card-funding-text">Raised</div>
                                                </div>
                                                <div className="causes-card-funding-item">
                                                    <div className="causes-card-funding-amount">$30,000</div>
                                                    <div className="causes-card-funding-text">Goal</div>
                                                </div>
                                            </div>
                                        </div>
                                        <h4> <a href="cause-details.html">Your little help can heal their pains</a> </h4>
                                        <p>Aellentesque porttitor lacus quis enim varius sed efficitur...</p>
                                        <a href="cause-details.html" className="btn btn-primary">Donate Now</a>
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

export default LiputanMedia