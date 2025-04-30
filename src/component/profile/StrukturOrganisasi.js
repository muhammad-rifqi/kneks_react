import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from "axios";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

const StrukturOrganisasi = () => {
	const { t } = useTranslation()
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			try {
				const url = process.env.REACT_APP_API_URL;
				const endpoint = process.env.REACT_APP_API_STUKTUR_ORGANISASI;
				const response = await axios.get(`${url}${endpoint}`);
				setPosts(response.data.slice(0, 9));
			} catch (err) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err,
				});
			} finally {
				setLoading(false);
			}
		};

		fetchPosts(); // Call fetchPosts function when component mounts

	}, []);

	const convertToSlug = (title) => {
		if (!title) return ""; // Handle null or undefined title
		return title
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, "")
			.replace(/\s+/g, "-")
			.replace(/-+/g, "-");
	};
	return (
		<>
			<div className="page-wrapper">
				<section className="page-banner">
					<div className="container">
						<div className="page-banner-title">
							<h3>{t('menu.strukturOrganisasi')}</h3>
						</div>
					</div>
				</section>
				<section className="about-one-section">
					<div className="container">
						<div className="row row-gutter-y-40 text-center" style={{marginBottom:'80px'}}>
							<div className="col-lg-12 col-xl-12">
								<div className="about-one-image">
									<img src="assets/image/struktur1.svg" alt="img-59" className="img-fluid" />
								</div>
							</div>
						</div>
						<div className="row row-gutter-y-30 d-flex justify-content-center">
							<div className="blog-box-manajemen">
								<div className="section-title-box text-center">
									<h2 className="section-title">{t('manajemenEksekutif')}</h2>
								</div>
							</div>
							{loading ? (
								Array(4).fill().map((_, index) => (
									<div className="col-12 col-md-6 col-xl-3" key={index}>
										<SkeletonCardBerita />
									</div>
								))
							) : (
								<>
									<div className="row row-gutter-30 mb-4">
										<div className="col-12 col-sm-6 col-md-4 col-lg-4 offset-lg-4 offset-md-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[0].name)}`}><img src={posts[0].photo ? `${posts[0].photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[0].name)}`}>{posts[0].name}</a></h4>
													<p>{posts[0].position}</p>
												</div>
											</div>
										</div>
									</div>

									<div className="row mb-4">
										<div className="col-12 col-sm-6 col-md-4 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[1].name)}`}><img src={posts[1].photo ? `${posts[1].photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[1].name)}`}>{posts[1].name}</a></h4>
													<p>{posts[1].position}</p>
												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Pengembangan Halal Assurance System</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Infrastruktur Industri Halal</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Rantai Nilai Produk Halal</span>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-md-4 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[2].name)}`}><img src={posts[2].photo ? `${posts[2].photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[2].name)}`}>{posts[2].name}</a></h4>
													<p>{posts[2].position}</p>


												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Perbankan Syariah</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Jasa Keuangan Syariah Non-Bank Syariah</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Pasar Modal Syariah</span>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-md-4 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[3].name)}`}><img src={posts[3].photo ? `${posts[3].photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[3].name)}`}>{posts[3].name}</a></h4>
													<p>{posts[3].position}</p>

												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Dana Sosial Syariah</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Lembaga Keuangan Mikro Syariah</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Inklusi Keuangan Syariah</span>
													</li>
												</ul>
											</div>
										</div>
									</div>

									<div className="row mb-4">
										<div className="col-12 col-sm-6 col-md-4 offset-lg-2 offset-md-2 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[4].name)}`}><img src={posts[4].photo ? `${posts[4].photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[4].name)}`}>{posts[4].name}</a></h4>
													<p>{posts[4].position}</p>

												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Kemitraan dan Akselerasi Usaha Syariah</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Inkubasi Bisnis Syariah</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Bisnis Digital dan Pusat Ekonomi Syariah</span>
													</li>
													
												</ul><br/><br/>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-md-4 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[5].name)}`}><img src={posts[5].photo ? `${posts[5].photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[5].name)}`}>{posts[5].name}</a></h4>
													<p>{posts[5].position}</p>

												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Hukum Pengembangan Ekonomi Syariah</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Promosi dan Kerja Sama Strategis</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Pengembagan SDM Ekonomi Syariah</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Riset Ekonomi Syariah</span>
													</li>
												</ul>
											</div>
										</div>
									</div>

									<hr />
									<div className="blog-box-manajemen">
										<div className="section-title-box text-center">
											<h2 className="section-title">Sekretariat</h2>
										</div>
									</div>
									<div className="row mb-4">
										<div className="col-12 col-sm-6 col-md-4 col-lg-4 offset-lg-4 offset-md-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[6].name)}`}><img src={posts[6].photo ? `${posts[6].photo}` : "assets/image/profilKosong.png"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[6].name)}`}>{posts[6].name}</a></h4>
													<p>{posts[6].position}</p>
												</div>
											</div>
										</div>
									</div>

									<div className="row mb-4">
										<div className="col-12 col-sm-6 col-md-4 offset-lg-2 offset-md-2 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[7].name)}`}><img src={posts[7].photo ? `${posts[7].photo}` : "assets/image/profilKosong.png"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[7].name)}`}>{posts[7].name}</a></h4>
													<p>{posts[7].position}</p>

												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Perencanaan dan Keuangan</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi SDM dan Kepatuhan Internal</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Dukungan Teknologi dan Rumah Tangga</span>
													</li>
													<br/><br/>
												</ul>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-md-4 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[8].name)}`}><img src={posts[8].photo ? `${posts[8].photo}` : "assets/image/profilKosong.png"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[8].name)}`}>{posts[8].name}</a></h4>
													<p>{posts[8].position}</p>

												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Pemantauan Program dan Industri Produk Halal</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Pemantauan Program dan Industri Jasa Keuangan Syariah</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Pemantauan Program dan Keuangan Sosial Syariah</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src="assets/image/profilKosong.png"
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small">Kepala Divisi Pemantauan Program dan Bisnis dan Kewirausahaan Syariah</span>
													</li>
												</ul>
											</div>
										</div>
									</div>


								</>

							)}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default StrukturOrganisasi;
