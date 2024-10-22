import React from "react";
import { useTranslation } from 'react-i18next';
const Section2 = () => {
    const { t} = useTranslation();
    return (
        <section className="department-section-x">
            <div className="row justify-content-center">
                <div className="col-lg-2 col-md-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="department-card-gambar">
                                <a href="/industri-produk-halal"><img src="/assets/image/halal.svg" alt={t('menu.industriProdukHalal')} className="img-b img-fluid" /></a>
                            </div>
                            <div className="department-card-content">
                                <h5><a href="/industri-produk-halal">{t('menu.industriProdukHalal')}</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-2 col-md-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="department-card-gambar">
                                <a href="/jasa-keuangan-syariah"><img src="/assets/image/jasa.svg" alt={t('menu.jasaKeuanganSyariah')} className="img-b img-fluid" /></a>
                            </div>
                            <div className="department-card-content">
                                <h5><a href="/jasa-keuangan-syariah">{t('menu.jasaKeuanganSyariah')}</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="department-card-gambar">
                                <a href="/keuangan-sosial-syariah"><img src="/assets/image/sosial.svg" alt={t('menu.keuanganSosialSyariah')} className="img-b img-fluid" /></a>
                            </div>
                            <div className="department-card-content">
                                <h5><a href="/keuangan-sosial-syariah">{t('menu.keuanganSosialSyariah')}</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="department-card-gambar">
                                <a href="/bisnis-dan-kewiraushaan-syariah"><img src="/assets/image/sme.svg" alt={t('menu.bisnisDanKewirausahaan')} className="img-b img-fluid" /></a>
                            </div>
                            <div className="department-card-content">
                                <h5><a href="/bisnis-dan-kewiraushaan-syariah">{t('menu.bisnisDanKewirausahaan')}</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="department-card-gambar">
                                <a href="/infrastruktur-ekosistem-syariah"><img src="/assets/image/infra.svg" alt={t('menu.infrastrukturEkosistem')} className="img-b img-fluid" /></a>
                            </div>
                            <div className="department-card-content">
                                <h5><a href="/infrastruktur-ekosistem-syariah">{t('menu.infrastrukturEkosistem')}</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2