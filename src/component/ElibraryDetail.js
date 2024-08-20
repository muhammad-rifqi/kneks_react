import React from "react";
const Elibrabry = () => {
    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner-perpus">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>E-Pustaka</h3>
                        </div>
                    </div>
                </section>
                <section className="department-details-section">
                    <div className="container-sm">
                        <div className="row row-gutter-y-40">
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-image">
                                    <img src={`${process.env.PUBLIC_URL}/assets/image/gallery/about-7.jpg`} alt="img-59" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 d-flex align-items-center">
                                <div className="about-one-inner">

                                    <h2 className="section-title">Webinar Keuangan</h2>
                                    <p style={{ textAlign: `justify` }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumnibh egestas tempus turpis, sit amet mattis magna varius non.</p>

                                </div>
                            </div>
                            <div className="row row-gutter-y-40">
                                <div className="col-lg-12">
                                    <button className="btn btn-primary ">Unduh <i className="fa-solid fa-download" aria-hidden="true"></i></button>
                                </div>
                            </div>
                            <div className="row row-gutter-y-40">
                                <div className="col-lg-12">
                                    <div className="card ">
                                        <div className="card-header p-3">
                                            <h3 className="fw-bold mb-0 text-primary" >Ekonomi Syariah Indonesia</h3>
                                        </div>
                                        <div class="card-body">
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Judul:</div>
                                                <div className="col-sm-6 text-primary">Alexandra Della</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Kategori:</div>
                                                <div className="col-sm-6 text-primary">Della</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Tanggal:</div>
                                                <div className="col-sm-6 text-primary">theme_ocean</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Penulis:</div>
                                                <div className="col-sm-6 text-primary">26 May, 2000</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Penerbit:</div>
                                                <div className="col-sm-6 text-primary">+01 (375) 5896 3214</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Sinopsis:</div>
                                                <div className="col-sm-6 text-primary">alex.della@outlook.com</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">ISBN:</div>
                                                <div className="col-sm-6 text-primary">California, United States</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Jumlah Halaman:</div>
                                                <div className="col-sm-6 text-primary">20 Dec, 2023</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Lebar:</div>
                                                <div className="col-sm-6 text-primary">United States</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Panjang:</div>
                                                <div className="col-sm-6 text-primary">Email, Phone</div>
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

export default Elibrabry