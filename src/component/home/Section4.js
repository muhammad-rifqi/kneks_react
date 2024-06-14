import React from "react"
const Section4 = () => {
	return (
		<section className="service-section funfact-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<div className="section-title-box">
							<div className="section-tagline">Isu Utama</div>
							<h2 className="section-title text-white">Ekonomi & Keuangan
							 <br /> Syariah</h2>
							<div className="section-text-b">
								<p>Indonesia merupakan negara dengan mayoritas muslim terbesar dan jumlah institusi keuangan syariah terbanyak di dunia. KNKS hadir sebagai katalisator dalam upaya mempercepat, memperluas dan memajukan pengembangan ekonomi dan keuangan syariah dalam rangka memperkuat ketahanan ekonomi nasional.</p>
							</div>
							<div className="service-arrow-image">
								<img src="/assets/image/shapes/arrow.png" alt="img-6" />
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="service-card">
							{/* <div className="service-card-video">
								<a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
										<i className="fa fa-play"></i>
									</a>
							</div> */}
							<ul className="list-unstyled">
								<li><a href="department-details.html">Pengembangan Produk Industri Halal <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="department-details.html">Pengembangan Jasa Keuangan Syariah <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="department-details.html">Pengembangan Keuangan Sosial Syariah <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="department-details.html">Pengembangan Bisnis dan Kewirausahaan Syariah <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="department-details.html">Pengembangan Infrastruktur Ekosistem Syariah <i className="fa-solid fa-chevron-right"></i></a></li>
								{/* <li><a href="department-details.html">Report Polution <i className="fa-solid fa-chevron-right"></i></a></li> */}
							</ul>
							{/* <div className="service-button">
								<a href="department-details.html" className="btn btn-primary">Discover More</a>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}
export default Section4

