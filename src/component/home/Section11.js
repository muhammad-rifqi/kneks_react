import React, { useEffect, useState } from "react"
import { InstagramEmbed } from 'react-social-media-embed';
import { useTranslation } from 'react-i18next';

const Section11 = () => {
	const { t } = useTranslation();
	
	return (
		<>
			<section className="sm-section funfact-section-post">
				<div className="container">
					<div className="sm-box">
						<div className="section-title-box text-center" data-aos="fade-up">
							<div className="section-tagline-b">{t('sosialMedia')}</div>
							<h2 className="section-title">{t('instagram')}</h2>
						</div>
					</div>
					<div className="row m-0" data-aos="fade-down" >
						<div className="col-lg-4 col-md-4 col-sm-6 mb-4">
							<InstagramEmbed url="https://www.instagram.com/p/C6pooCOBSOA"
								width="100%"


							/>

						</div >
						<div className="col-lg-4 col-md-4 col-sm-6 mb-4">

							<InstagramEmbed url="https://www.instagram.com/p/CtjUgOFrnVn/"
								width="100%"

							/>

						</div >
						<div className="col-lg-4 col-md-4 col-sm-6 mb-4">

							<InstagramEmbed url="https://www.instagram.com/p/DB2pOXjz09c/"
								width="100%"

							/>


						</div >



					</div>

					<div className="sm-box" style={{ marginTop: `100px` }}>
						<div className="section-title-box text-center" data-aos="fade-up">

							<h2 className="section-title">{t('instansi')}</h2>
							<div className="section-text-b "><p className="text-white ">
								{t('instansiIsi')} <br /> {t('instansiIsi2')}	</p>
							</div>
						</div>
					</div>
				</div >
			</section >

			<section className="funfact-section-instan">
				<div className="container">
					<div className="row">
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.kemenkeu.go.id/`} target="_blank" className="component-service d-block ">
								<div className="service-image ">
									<img src="assets/image/kemenkeu.png" className="img-fluid " alt="kemenkeu" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.ekon.go.id/`} target="_blank" className="component-service  d-block">
								<div className="service-image">
									<img src="assets/image/instansi2.png" className="img-fluid" alt="kementriang bidang perekonomian republik indonesia" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.kemenkopmk.go.id/`} target="_blank" className="component-service  d-block">
								<div className="service-image">
									<img src="assets/image/instansi32.png" className="img-fluid" alt="kemenko pmk" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.maritim.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi41.png" className="img-fluid" alt="maritim" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.kemenag.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi5.png" className="img-fluid" alt="kemenag" />
								</div>
							</a>
						</div>

						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.kemendag.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi7.png" className="img-fluid" alt="kemendag" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://bappenas.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi8.png" className="img-fluid" alt="bappenas" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://bumn.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi9.png" className="img-fluid" alt="bumn" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://kemenkopukm.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi10.png" className="img-fluid" alt="kemenkopukm" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://kemenparekraf.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi11.png" className="img-fluid" alt="kemenparekraf" />
								</div>
							</a>
						</div>


						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://mui.or.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi15.png" className="img-fluid" alt="mui" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://kadin.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi17.png" className="img-fluid" alt="kadin" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-3 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://bi.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi13.png" className="img-fluid" alt="bi" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-3 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://lps.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi14.png" className="img-fluid" alt="lps" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-3 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.kemenperin.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi6.png" className="img-fluid" alt="kemenperin" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-3 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://ojk.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi12.png" className="img-fluid" alt="ojk" />
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
export default Section11