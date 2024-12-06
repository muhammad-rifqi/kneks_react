import React,{ useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import 'dayjs/locale/id';

const Section2 = () => {
    const { t } = useTranslation();


  

    return (
        <section className="funfact-section-direktorat" >
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-4 mb-3" data-aos="fade-up">
                        <a href="/industri-produk-halal">
                            <div className="card card-dir">
                                <div className="card-body text-center">
                                    <div className="department-card-gambar">
                                        <img src="/assets/image/halal.svg" alt={t('menu.industriProdukHalal')} className="img-b img-fluid" />
                                    </div>
                                    <div className="department-card-content mt-3 ">
                                        <h5>{t('menu.industriProdukHalal')}</h5>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-2 col-md-4 mb-3" data-aos="fade-up">
                        <a href="/jasa-keuangan-syariah">
                            <div className="card card-dir">
                                <div className="card-body text-center">
                                    <div className="department-card-gambar">
                                        <img src="/assets/image/jasa.svg" alt={t('menu.jasaKeuanganSyariah')} className="img-b img-fluid" />
                                    </div>
                                    <div className="department-card-content mt-3">
                                        <h5>{t('menu.jasaKeuanganSyariah')}</h5>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-3" data-aos="fade-up">
                        <a href="/keuangan-sosial-syariah">
                            <div className="card card-dir">
                                <div className="card-body text-center">
                                    <div className="department-card-gambar">
                                        <img src="/assets/image/sosial.svg" alt={t('menu.keuanganSosialSyariah')} className="img-b img-fluid" />
                                    </div>
                                    <div className="department-card-content mt-3">
                                        <h5>{t('menu.keuanganSosialSyariah')}</h5>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-3" data-aos="fade-up">
                        <a href="/bisnis-dan-kewiraushaan-syariah">
                            <div className="card card-dir">
                                <div className="card-body text-center px-2">
                                    <div className="department-card-gambar">
                                        <img src="/assets/image/sme.svg" alt={t('menu.bisnisDanKewirausahaan')} className="img-b img-fluid" />
                                    </div>
                                    <div className="department-card-content mt-3">
                                        <h5>{t('menu.bisnisDanKewirausahaan')}</h5>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 mb-3" data-aos="fade-up">
                        <a href="/infrastruktur-ekosistem-syariah">
                            <div className="card card-dir">
                                <div className="card-body text-center">
                                    <div className="department-card-gambar">
                                        <img src="/assets/image/infra.svg" alt={t('menu.infrastrukturEkosistem')} className="img-b img-fluid" />
                                    </div>
                                    <div className="department-card-content mt-3 ">
                                        <h5>{t('menu.infrastrukturEkosistem')}</h5>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2