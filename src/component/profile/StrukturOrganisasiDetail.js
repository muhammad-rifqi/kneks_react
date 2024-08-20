import React from "react";
const StrukturOrganisasiDetail = () => {
	return (
		<>
			<div className="page-wrapper">

				<section className="page-banner">
					<div className="container">
						<div className="row d-flex align-items-center">
							<div className="col-lg-6 col-md-6 col-sm-12 page-banner-title-x  d-none d-lg-block d-md-block">
								<h3>Nama Direktur</h3>
								<h5>Jabatan</h5>
							</div>
							<div className="struktur-profil col-lg-6 col-md-6 col-sm-12 text-end  d-none d-lg-block d-md-block">
								<img src={`${process.env.PUBLIC_URL}/assets/image/team/team-1.jpg`} alt="" className="img-fluid" />
							</div>



							<div className="struktur-profil col-lg-6 col-md-6 col-sm-12 text-center  d-block d-lg-none d-md-none">
								<img src={`${process.env.PUBLIC_URL}/assets/image/team/team-1.jpg`} alt="" className="img-fluid" />
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 page-banner-title-x  text-center d-block d-lg-none d-md-none pt-5">
								<h3>Nama Direktur</h3>
								<h5>Jabatan</h5>
							</div>
						</div>
					</div>
				</section>
				<section className="event-details-section-ber">
					<div className="container">
						<div className="row">
							<div className="col-lg-9">
								<div className="event-details-content-box">
									<p style={{ textAlign: `justify` }}>
										Warga Negara Indonesia kelahiran tahun 1956, Agus Dermawan Wintarto Martowardojo mendapatkan persetujuan pemegang saham untuk pengalihan tugas dan wewenang sebagai Komisaris Utama GoTo dari Komisaris pada tahun 2023. Agus memiliki pengalaman lebih dari 35 tahun di bidang keuangan. Beliau adalah mantan bankir dan menjabat sebagai Gubernur Bank Indonesia periode 2013 hingga 2018, serta Menteri Keuangan RI pada tahun 2010 hingga 2013. Saat ini beliau juga menjabat sebagai Komisaris Utama Bank BNI.

										Sebelum berkarir di pemerintahan, Agus memegang banyak posisi kunci di industri perbankan Indonesia. Ia pernah menjabat sebagai Direktur Utama dan CEO Bank Mandiri (2005-2010), Direktur Utama Bank Permata (2002-2005), Penasehat Utama Badan Penyehatan Perbankan Nasional (2002), Direktur Utama Bank Mandiri (1999-2002), Presiden Direktur PT Bank Exim Indonesia (1998-1999) dan Presiden Direktur Bank Bumiputera (1995-1998), Agus mengawali karir di Bank of America (1985-1986) dan Bank Niaga (1986-1994).

										Agus telah menerima banyak penghargaan, termasuk Bintang Mahaputera Adipradana, penghargaan sipil tertinggi kedua di Indonesia. Di tingkat internasional, ia mendapatkan penghargaan Gubernur Bank Sentral Terbaik Asia Pasifik dari Global Markets (EuroMoney) pada tahun 2017, Menteri Keuangan Tahun Ini 2012 dari The Banker, dan Eksekutif Terbaik Asia dari AsiaMoney pada tahun 2006.

										Ia juga pernah menjadi Ketua International Islamic Liquidity Management (2016) dan Ketua Islamic Financial Services Board (2015).

										Agus meraih gelar Sarjana Ekonomi dari Universitas Indonesia pada tahun 1984, dan telah mengikuti berbagai program pengembangan eksekutif di State University of New York - Buffalo, Harvard Business School, Stanford University, dan Wharton Executive Education.

										Agus tidak memiliki hubungan keluarga dengan anggota Dewan Komisaris maupun Direksi lainnya.
									</p>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="sidebar-widget-event-meta-socials">
									<a href="/twitter"><i className="fa-brands fa-x-twitter s"></i></a>
									<a href="/twitter"><i className="fa-brands fa-facebook"></i></a>
									<a href="/twitter"><i className="fa-brands fa-linkedin"></i></a>
									<a href="/twitter"><i className="fa-brands fa-instagram"></i></a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default StrukturOrganisasiDetail