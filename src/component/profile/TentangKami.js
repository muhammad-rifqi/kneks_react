import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useCookies } from 'react-cookie';
const TentangKami = () => {
    const [cookies] = useCookies(['i18next']);
    const { t } = useTranslation()
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const url = process.env.REACT_APP_API_URL;
                const response = await axios.get(`${url}/abouts`);
                setPosts(response.data);

            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    return (

        <>
            <div className="page-wrapper">
                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>{t('menu.tentangKami')}</h3>
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
                                    <img src="assets/image/gallery/img-knks-1.png" alt="img-59" className="img-fluid" />
                                </div>
                            </div>

                            {/* konten sebelah kanan */}
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-inner-x">
                                    {/* <h2 className="section-title">{t('menu.tentangKami')}</h2> */}
                                    {/* <p>{t('about.kneksMerupakan')}</p>
                                    <p>{t('about.pencananganTitikAwal')}</p> */}
                                    <h2 className="section-title">{cookies.i18next === 'en' ? posts?.[0]?.about_en : posts?.[0]?.about}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? posts?.[0]?.about_content_en : posts?.[0]?.about_content }} />
                                    {/* <p></p> */}
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
                                    {/* <h2 className="section-title">{t('sejarahKneks')}</h2>
                                    <p>{t('dalamRangkaMendukung')}</p> */}
                                    <h2 className="section-title">{cookies.i18next === 'en' ? posts?.[0]?.history_en : posts?.[0]?.history}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? posts?.[0]?.history_content_en : posts?.[0]?.history_content }} />
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
                                    {/* <h2 className="section-title" style={{ textAlign: 'center' }}>{t('landasanHukum')}</h2>
                                    <p className="section-title" style={{ textAlign: 'center', fontSize: '12pt', }}>{t('peraturanPresiden')}</p>
                                    <p>{t('isiPerpres')}</p> */}
                                    <h2 className="section-title" style={{ textAlign: 'center' }}>{cookies.i18next === 'en' ? posts?.[0]?.legal_foundation_en : posts?.[0]?.legal_foundation}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? posts?.[0]?.legal_foundation_content_en : posts?.[0]?.legal_foundation_content }} />
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

                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-image" style={{ textAlign: 'center' }}>
                                    <img src="assets/image/filosofiTk.svg" alt="img-59" className="img-fluid" />
                                </div>
                            </div>

                            {/* konten sebelah kanan */}
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-inner-x">
                                    {/* <h2 className="section-title" style={{ textAlign: 'center' }}>{t('filosofiLogo')}</h2> */}
                                    <h2 className="section-title" style={{ textAlign: 'center' }}>{cookies.i18next === 'en' ? posts?.[0]?.logo_philosophy_en : posts?.[0]?.logo_philosophy}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? posts?.[0]?.content_en : posts?.[0]?.content }} />
                                </div>
                            </div>

                            {/* konten sebelah kiri */}


                        </div>
                        {/* end row konten */}

                        {/* row untuk masing - masing konten */}
                        {/* <div className="row row-gutter-y-40" >

                        
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
                    

                        <br /> */}

                        {/* row untuk masing - masing konten */}
                        <div className="row row-gutter-y-40" style={{ paddingBottom: '75px' }}>

                            {/* deskripsi landasan hukum */}
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-inner-x">
                                    {/* <h2 className="section-title" style={{ textAlign: 'center' }}>{t('tugasKneks')}</h2>
                                    <p>{t('KneksBertugasMempercepat')}</p> */}
                                    <h2 className="section-title" style={{ textAlign: 'center' }}>{cookies.i18next === 'en' ? posts?.[0]?.kneks_task_en : posts?.[0]?.kneks_task}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? posts?.[0]?.kneks_task_content_en : posts?.[0]?.kneks_task_content }} />
                                </div>
                            </div>

                            {/* deskripsi landasan hukum */}
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-inner-x">
                                    {/* <h2 className="section-title" style={{ textAlign: 'center' }}>{t('fungsiKneks')}</h2>
                                    <ol >
                                        <li><p>{t('pemberianRekomendasiArahKebijakan')}</p></li>
                                        <li><p>{t('pelaksanaanKoordinasiSinkronisasi')}</p></li>
                                        <li><p>{t('perumusanDanPemberianRekomendasi')}</p></li>
                                        <li><p>{t('pemantauanDanEvaluasi')}</p></li>
                                    </ol> */}
                                    <h2 className="section-title" style={{ textAlign: 'center' }}>{cookies.i18next === 'en' ? posts?.[0]?.function_en : posts?.[0]?.function}</h2>

                                    {/* <li><p>{t('pemberianRekomendasiArahKebijakan')}</p></li> */}
                                    <div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? posts?.[0]?.function_content_en : posts?.[0]?.function_content }} />

                                </div>
                            </div>

                        </div>
                        {/* end row konten */}

                    </div>
                </section >
                {/* END SECTION FILOSOFI LOGO */}

            </div >
        </>
    )
}

export default TentangKami