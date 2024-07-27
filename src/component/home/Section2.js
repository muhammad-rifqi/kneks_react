import React from "react";
const Section2 = () => {
    return (
        <section className="department-section">
            <div className="container">
                <div className="department-section-inner">
                    <div className="row justify-content-center row-gutter-y-40">
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="department-card">
                                <div className="department-card-icon">
                                    {/* <a href="javascript:void(0)"><i className="flaticon-lotus"></i></a> */}
                                    <a href="/industri-produk-halal"><img src="/assets/image/halal.svg" alt="Industri Produksi Halal" className="img-b img-fluid" /></a>
                                </div>
                                <div className="department-card-content">
                                    <h5><a href="/industri-produk-halal">Industri Produksi Halal</a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="department-card">
                                <div className="department-card-icon">
                                    <a href="/jasa-keuangan-syariah"><i className="flaticon-balance-1"></i></a>
                                </div>
                                <div className="department-card-content">
                                    <h5><a href="/jasa-keuangan-syariah">Jasa Keuangan Syariah</a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="department-card">
                                <div className="department-card-icon">
                                    <a href="/keuangan-sosial-syariah"><i className="flaticon-parthenon"></i></a>
                                </div>
                                <div className="department-card-content">
                                    <h5><a href="/keuangan-sosial-syariah">Keuangan Sosial Syariah</a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="department-card">
                                <div className="department-card-icon">
                                    <a href="/bisnis-dan-kewiraushaan-syariah"><i className="flaticon-suitcase"></i></a>
                                </div>
                                <div className="department-card-content">
                                    <h5><a href="/bisnis-dan-kewiraushaan-syariah">Bisnis Dan Kewirausahaan Syariah</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-4 col-md-6">
                            <div className="department-card">
                                <div className="department-card-icon">
                                    <a href="/infrastruktur-ekosistem-syariah"><i className="flaticon-industry"></i></a>
                                </div>
                                <div className="department-card-content">
                                    <h5><a href="/infrastruktur-ekosistem-syariah">Infrastruktur Ekosistem Syariah </a></h5>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2