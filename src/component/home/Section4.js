import React from "react"
import { useTranslation } from 'react-i18next';
const Section4 = () => {
	const {t} = useTranslation();
	return (
		<section className="service-section funfact-section-isu">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<div className="section-title-box">
							<div className="section-tagline-b-x" style={{color:'#F4EE5C'}}>{t('isuUtama')}</div>
							<h2 className="section-title text-white">{t('isuJudul')}
								<br /> {t('isuJudul2')}</h2>
							<div className="section-text-b">
								<p>{t('isuIsi')}</p>
							</div>
							<div className="service-arrow-image">
								<img src="/assets/image/shapes/arrow.png" alt="img-6" />
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="service-card">
							<ul className="list-unstyled">
								<li><a href="/isu-ekonomi">{t('isuPengembanganProdukIndustriHalal')} <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="/isu-ekonomi">{t('isuPengembanganJasaKeuanganSyariah')} <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="/isu-ekonomi">{t('isuPengembanganKeuanganSosialSyariah')} <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="/isu-ekonomi">{t('isuPengembanganBisnisDanKewirausahaanSyariah')} <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="/isu-ekonomi">{t('isuPengembanganInfrastrukturEkosistemSyariah')} <i className="fa-solid fa-chevron-right"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}
export default Section4
