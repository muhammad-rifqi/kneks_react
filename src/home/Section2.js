import React from "react";
const Section2 = () => {
    return (
        <section className="department-section">
            <div className="container">
                <div className="department-section-inner">
                    <div className="row row-gutter-y-40">
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="department-card">
                                <div className="department-card-icon">
                                    <a href="departments.html"><i className="flaticon-parthenon"></i></a>
                                </div>
                                <div className="department-card-content">
                                    <h5><a href="department-details.html">Your Government</a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="department-card">
                                <div className="department-card-icon">
                                    <a href="departments.html"><i className="flaticon-suitcase"></i></a>
                                </div>
                                <div className="department-card-content">
                                    <h5><a href="department-details.html">Jobs & Unemployment</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="department-card">
                                <div className="department-card-icon">
                                    <a href="departments.html"><i className="flaticon-industry"></i></a>
                                </div>
                                <div className="department-card-content">
                                    <h5><a href="department-details.html">Business & Industry</a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="department-card">
                                <div className="department-card-icon">
                                    <a href="departments.html"><i className="flaticon-bus"></i></a>
                                </div>
                                <div className="department-card-content">
                                    <h5><a href="department-details.html">Roads & Transport</a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="department-card">
                                <div className="department-card-icon">
                                    <a href="departments.html"><i className="flaticon-lotus"></i></a>
                                </div>
                                <div className="department-card-content">
                                    <h5><a href="department-details.html">Culture & Recreation</a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="department-card">
                                <div className="department-card-icon">
                                    <a href="departments.html"><i className="flaticon-balance-1"></i></a>
                                </div>
                                <div className="department-card-content">
                                    <h5><a href="department-details.html">Justice, Safety Law</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="department-search-section">
                <div className="container">
                    <form className="department-search-form">
                        <input type="text" placeholder="Get our quick services from the city municipal" name="search" />
                        <button type="submit">View All Services</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Section2