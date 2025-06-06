import React, { useState, useEffect } from "react";
// import { useTranslation } from 'react-i18next';
import 'dayjs/locale/id';
import { useCookies } from 'react-cookie';
import Swal from "sweetalert2";
import axios from "axios";
const Section2 = () => {
    const [cookies] = useCookies(['i18next']);
    // const { t } = useTranslation();
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_MENU_DIREKTORAT;
                const response = await axios.get(`${url}${endpoint}`);
                setMenu(response.data);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,
                });
            }
        };

        fetchMenu();
    }, []);
    const convertToSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    return (
        <>
            <section className="funfact-section-direktorat" >
                <div className="container-fluid">
                    <div className="row justify-content-center ">

                        {menu.map((item, index) => (
                            //   <li key={index}>
                            //     <a href={`/${convertToSlug(item.title)}`}>{cookies.i18next === 'en' ? item.title_en : item.title}</a>
                            //   </li>

                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3" data-aos="fade-up" key={index}>
                                <a href={`/${convertToSlug(item.title)}/${item.id}`}>
                                    <div className="card card-dir h-100">
                                        <div className="card-body text-center ">
                                            <div className="department-card-gambar mb-3">
                                                <img src={item.images} alt={cookies.i18next === 'en' ? item.title_en : item.title} className="img-b img-fluid" />
                                            </div>
                                            <div className="department-card-content mt-3 ">
                                                <h5 className="mb-0">{cookies.i18next === 'en' ? item.title_en : item.title}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        ))}
                        {/* <div className="col-lg-2 col-md-4 mb-3" data-aos="fade-up">
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
                        <a href="/bisnis-dan-kewirausahaan-syariah">
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
                    </div> */}
                    </div>
                </div>
            </section>
            <div style={{ marginBottom: '30px' }}>

            </div>
        </>
    )
}

export default Section2