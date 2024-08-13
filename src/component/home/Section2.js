import React from "react";
import { Link } from "react-router-dom";
const Section2 = () => {
    return (
        <section className="department-section-x">
            <div className="row justify-content-center">
                <div className="col-lg-2 col-md-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="department-card-gambar">
                                <Link to="/industri-produk-halal"><img src="/assets/image/halal.svg" alt="Industri Produksi Halal" className="img-b img-fluid" /></Link>
                            </div>
                            <div className="department-card-content">
                                <h5><Link to="/industri-produk-halal">Industri Produksi Halal</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="department-card-gambar">
                                <Link to="/jasa-keuangan-syariah"><img src="/assets/image/jasa.svg" alt="Jasa Keuangan Syariah" className="img-b img-fluid" /></Link>
                            </div>
                            <div className="department-card-content">
                                <h5><Link to="/jasa-keuangan-syariah">Jasa Keuangan Syariah</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="department-card-gambar">
                                <Link to="/keuangan-sosial-syariah"><img src="/assets/image/sosial.svg" alt="Keuangan Sosial Syariah" className="img-b img-fluid" /></Link>
                            </div>
                            <div className="department-card-content">
                                <h5><Link to="/keuangan-sosial-syariah">Keuangan Sosial Syariah</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="department-card-gambar">
                                <Link to="/bisnis-dan-kewiraushaan-syariah"><img src="/assets/image/sme.svg" alt="Bisnis Dan Kewirausahaan Syariah" className="img-b img-fluid" /></Link>
                            </div>
                            <div className="department-card-content">
                                <h5><Link to="/bisnis-dan-kewiraushaan-syariah">Bisnis Dan Kewirausahaan Syariah</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="department-card-gambar">
                                <Link to="/infrastruktur-ekosistem-syariah"><img src="/assets/image/infra.svg" alt="Bisnis Dan Kewirausahaan Syariah" className="img-b img-fluid" /></Link>
                            </div>
                            <div className="department-card-content">
                                <h5><Link to="/infrastruktur-ekosistem-syariah">Infrastruktur Ekosistem Syariah </Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Section2