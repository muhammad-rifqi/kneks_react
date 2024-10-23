import React from "react"
import { useTranslation } from 'react-i18next';
const News = () => {
	const { t } = useTranslation();
	return (
		<section className="news-section">
			<div className="portfolio-content conatainer-fluid">
				<div className="blog-box">
					<div className="section-title-box text-center">
						<h2 className="section-title" style={{ color: '#146AA4' }}>{t('menu.beritaKegiatan')}</h2>
					</div>
				</div>
				<div className="row row-gutter-30">
					<div className="col-md-6 col-lg-6">
						<div className="card-box-b card-shadow news-box">
							<div className="img-box-b">
								<img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
							</div>
							<div className="card-overlay">
								<div className="card-header-b">
									<div className="card-category-b">
										<a href="#Beritabaru" className="category-b-x">#BERITABARU</a>
									</div>
									<div className="card-title-b">
										<h2 className="title-2">
											<a href="/info-terkini/detail">Anugerah Adinata Syariah 2024: Mendukung Transformasi Ekonomi Syariah Daerah</a>
										</h2>
									</div>
									<div className="card-date">
										<span className="date-b">18 September 2017</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-6">
						<div className="card-box-b card-shadow news-box">
							<div className="img-box-b">
								<img src="/assets/image/berita2.jpeg" alt="imgNews" className="img-b img-fluid" />
							</div>
							<div className="card-overlay">
								<div className="card-header-b">
									<div className="card-category-b">
										<a href="/" className="category-b-x">#BERITABARU</a>
									</div>
									<div className="card-title-b">
										<h2 className="title-2">
											<a href="/info-terkini/detail">Pengukuhan KDEKS Provinsi Sulawesi Tengah</a>
										</h2>
									</div>
									<div className="card-date">
										<span className="date-b">18 September 2017</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default News