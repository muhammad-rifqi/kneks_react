// import React ,{ useState, useEffect } from "react"
import { useTranslation } from 'react-i18next';

const Section3 = () => {
    const { t } = useTranslation();
    
    return (
        <section className="about-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="about-image">
                            <div className="about-image-inner img-one">
                                <img src="/assets/image/about-1.svg" className="img-fluid" alt="img-2" />
                            </div>
                            <div className="about-image-inner img-two">
                                <img src="/assets/image/shapes/about-3.jpg" className="floated-image" alt="img-3" />
                                <img src="/assets/image/about-2.svg" className="img-fluid" alt="img-4" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up">
                        <div className="about-inner">
                            <div className="section-title-box">
                                <div className="section-tagline">{t('pernekalkan')}</div>
                                <h2 className="section-title">{t('pernekalkanJudul')}</h2>
                                <p>{t('pernekalkanIsi')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3