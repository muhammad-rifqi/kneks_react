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
				setPosts(response.data.slice(0, 35));
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
						<div className="row row-gutter-y-40 text-center" style={{ marginBottom: '80px' }}>
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
															src={posts[9].photo ? `${posts[9].photo}` : "assets/image/pejabat/pak_binsar.jpg"}
															alt="img1"
															className="rounded-circle me-2"
														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[9].name)}`}>{posts[9].name}</a></u> </b>, <br /> {posts[9].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[10].photo ? `${posts[10].photo}` : "assets/image/pejabat/pak_binsar.jpg"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[10].name)}`}>{posts[10].name}</a></u> </b>, <br /> {posts[10].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[11].photo ? `${posts[11].photo}` : "assets/image/pejabat/pak_umar.jpg"}
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[11].name)}`}>{posts[11].name}</a></u> </b>, <br /> {posts[11].position}</span>
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
															src={posts[12].photo ? `${posts[12].photo}` : "assets/image/pejabat/bu_yos_abc.jpeg"}
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[12].name)}`}>{posts[12].name}</a></u> </b>, <br /> {posts[12].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[13].photo ? `${posts[13].photo}` : "assets/image/profilKosong.png"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[13].name)}`}>{posts[13].name}</a></u> </b>, <br /> {posts[13].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[14].photo ? `${posts[14].photo}` : "assets/image/profilKosong.png"}
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[14].name)}`}>{posts[14].name}</a></u> </b>, <br /> {posts[14].position}</span>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-md-4 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[3].name)}`}><img src={posts[3].photo ? `${posts[3].photo}` : "assets/image/profilKosong.png"} className="img-fluid" alt="img-40" /></a>
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
															src={posts[15].photo ? `${posts[15].photo}` : "assets/image/pejabat/pak_urip.jpg"}
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[15].name)}`}>{posts[15].name}</a></u> </b>, <br /> {posts[15].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[16].photo ? `${posts[16].photo}` : "assets/image/pejabat/pak_bagus.jpg"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[16].name)}`}>{posts[16].name}</a></u> </b>, <br /> {posts[16].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[17].photo ? `${posts[17].photo}` : "assets/image/pejabat/pak_eka.jpg"}
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[17].name)}`}>{posts[17].name}</a></u> </b>, <br />{posts[17].position}</span>
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
															src={posts[18].photo ? `${posts[18].photo}` : "assets/image/pejabat/pak_iqbal.jpg"}
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[18].name)}`}>{posts[18].name}</a></u> </b>, <br /> {posts[18].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[19].photo ? `${posts[19].photo}` : "assets/image/pejabat/pak_helma.png"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[19].name)}`}>{posts[19].name}</a></u> </b>, <br />{posts[19].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[20].photo ? `${posts[20].photo}` : "assets/image/pejabat/pak_dedi.jpg"}
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[20].name)}`}>{posts[20].name}</a></u> </b>, <br />{posts[20].position}</span>
													</li>

												</ul><br /><br />
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
															src={posts[20].photo ? `${posts[21].photo}` : "assets/image/pejabat/pak_dece.jpg"}
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[21].name)}`}>{posts[21].name}</a></u> </b>, <br />{posts[21].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[22].photo ? `${posts[22].photo}` : "assets/image/pejabat/pak_inza.jpg"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[22].name)}`}>{posts[22].name}</a></u> </b>, <br />{posts[22].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[23].photo ? `${posts[23].photo}` : "assets/image/profilKosong.png"}
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[23].name)}`}>{posts[23].name}</a></u> </b>, <br />{posts[23].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[24].photo ? `${posts[24].photo}` : "assets/image/profilKosong.png"}
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[24].name)}`}>{posts[24].name}</a></u> </b>, <br />{posts[24].position}</span>
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
															src={posts[26].photo}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[26].name)}`}>{posts[26].name}</a></u> </b>, <br />{posts[26].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[27].photo}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[27].name)}`}>{posts[27].name}</a></u> </b>, <br />{posts[27].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[28].photo}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[28].name)}`}>{posts[28].name}</a></u> </b>, <br />{posts[28].position}</span>
													</li>
													<br /><br />
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
															src={posts[29].photo}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[29].name)}`}>{posts[29].name}</a></u> </b>, <br />{posts[29].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[30].photo}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[30].name)}`}>{posts[30].name}</a></u> </b>, <br />{posts[30].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[31].photo}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[31].name)}`}>{posts[31].name}</a></u> </b>, <br />{posts[31].position}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[32].photo}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[32].name)}`}>{posts[32].name}</a></u> </b>, <br />{posts[32].position}</span>
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
