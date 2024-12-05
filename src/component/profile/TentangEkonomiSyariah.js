import React from "react";
import { useTranslation } from "react-i18next";
const TentangEkonomiSyariah = () => {
const { t } = useTranslation()
    return (

        <>
            <div className="page-wrapper">
                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>{t('menu.tentangEkonomiSyariah')}</h3>
                        </div>
                    </div>
                </section >
                <section className="about-one-section">
                    <div className="container">
                        {/* row untuk masing - masing konten */}
                        <div className="row row-gutter-y-40">

                            {/* konten sebelah kiri */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-image">
                                    <img src="assets/image/Logo-ekonomi-syariah.png" alt="ekonomisyariah" style={{ width: `90%` }} className="img-fluid" />
                                </div>
                            </div>

                            {/* konten sebelah kanan */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-inner-x">
                                    <h2 className="section-title">{t('menu.tentangKami')}</h2>
                                    <p>{t('about.kneksMerupakan')}</p>
                                    <p>{t('about.pencananganTitikAwal')}</p>
                                </div>



                            </div>

                        </div>
                        {/* end row konten */}

                        <br />

                        {/* row untuk masing - masing konten */}
                        <div className="row row-gutter-y-40">

                            {/* konten sejarah deskripsi */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-inner-x">
                                    <h2 className="section-title">{t('sejarahEkonomiSyariah')}</h2>
                                    <p>{t('dalamRangkaMendukung')}</p>
                                </div>
                            </div>

                            {/* konten sejarah images */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-image">
                                    <img src="assets/image/sejarah.svg" alt="sejarah" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                        {/* end row konten */}

                        <br />

                        {/* row untuk masing - masing konten */}
                        <div className="row row-gutter-y-40">

                            {/* gambar landasan hukum */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-image">
                                    <img src="assets/image/hukum.svg" alt="hukum" className="img-fluid" />
                                </div>
                            </div>

                            {/* deskripsi landasan hukum */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-inner-x">
                                    <h2 className="section-title" style={{ textAlign: 'center' }}>{t('landasanHukum')}</h2>
                                    <p className="section-title" style={{ textAlign: 'center', fontSize: '12pt', }}>{t('peraturanPresiden')}</p>
                                    <p>{t('isiPerpres')}</p>
                                </div>
                            </div>

                        </div>
                        {/* end row konten */}

                    </div>
                </section>

                {/* SECTION FILOSOFI LOGO */}
                <section className="filosofi-logo-section">
                    <div className="container">
                        {/* row untuk masing - masing konten */}
                        <div className="row row-gutter-y-40" >

                            {/* konten sebelah kanan */}
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-inner-x">
                                    <h2 className="section-title" style={{ textAlign: 'center' }}>{t('filosofiLogo')}</h2>
                                </div>
                            </div>

                            {/* konten sebelah kiri */}
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-image" style={{ textAlign: 'center' }}>
                                    <img src="assets/image/filosofiTk.svg" alt="img-59" className="img-fluid" />
                                </div>
                            </div>

                        </div>
                        {/* end row konten */}

                        {/* row untuk masing - masing konten */}
                        <div className="row row-gutter-y-40" >

                            {/* konten sebelah kanan */}
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-inner-x">
                                    <h2 className="section-title">{t('hurufN')}</h2>
                                    <p>{t('hurufNdariKneks')}</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-inner-x">
                                    <h2 className="section-title">{t('pintuGerbang')}</h2>
                                    <p>{t('sengajaDirancangAgarMenyerupaiPintuGerbang')}</p>
                                </div>
                            </div>

                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-inner-x">
                                    <h2 className="section-title">{t('arah')}</h2>
                                    <p>{t('arahPanahKesampingKananAtas')}</p>
                                </div>
                            </div>

                        </div>
                        {/* end row konten */}

                        <br />

                        {/* row untuk masing - masing konten */}
                        <div className="row row-gutter-y-40" style={{ paddingBottom: '75px' }}>

                            {/* deskripsi landasan hukum */}
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-inner-x">
                                    <h2 className="section-title" style={{ textAlign: 'center' }}>{t('tugasKneks')}</h2>
                                    <p>{t('KneksBertugasMempercepat')}</p>
                                </div>
                            </div>

                            {/* deskripsi landasan hukum */}
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-inner-x">
                                    <h2 className="section-title" style={{ textAlign: 'center' }}>{t('fungsiKneks')}</h2>
                                        <ol >
                                            <li><p>{t('pemberianRekomendasiArahKebijakan')}</p></li>
                                            <li><p>{t('pelaksanaanKoordinasiSinkronisasi')}</p></li>
                                            <li><p>{t('perumusanDanPemberianRekomendasi')}</p></li>
                                            <li><p>{t('pemantauanDanEvaluasi')}</p></li>
                                        </ol>
                                </div>
                            </div>

                        </div>
                        {/* end row konten */}

                    </div>
                </section>
                {/* END SECTION FILOSOFI LOGO */}

            </div >
        </>
    )
}

export default TentangEkonomiSyariah