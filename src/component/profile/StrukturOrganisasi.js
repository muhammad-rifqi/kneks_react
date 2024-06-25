import React from "react";
const StrukturOrganisasi = () => {
    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Struktur Organisasi</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section">
                    <div className="container">
                        <div className="row row-gutter-y-40 text-center">
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-image">
                                    <img src="assets/image/struktur1.svg" alt="img-59" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-image">
                                    <img src="assets/image/struktur2.svg" alt="img-60" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-image">
                                    <img src="assets/image/struktur3.svg" alt="img-61" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                        <div className="row row-gutter-y-40 d-flex justify-content-center pt-5">
                            <div className="col-lg-8 col-xl-8">
                                <div className="search-popup-content-x">
                                    <form action="#">
                                        <label for="search" className="sr-only">search here</label>
                                        <input type="text" id="opini" placeholder="Masukkan Opini Anda" />
                                        <button type="submit" aria-label="search submit" className="search-btn">
                                            <span><i className="fa fa-paper-plane"></i></span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default StrukturOrganisasi