import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from "axios";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useCookies } from 'react-cookie';

const StrukturOrganisasi = () => {
	const [cookies] = useCookies(['i18next']);
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
				console.log(response)
				setPosts(response.data.slice(0, 36));
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
													<a href={`/struktur-organisasi/${convertToSlug(posts[0].position)}`}><img src={posts[0].photo ? `${posts[0].photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[0].position)}`}>{posts[0].name}</a></h4>
													<p>{cookies.i18next === 'id' ? posts[0].position : posts[0].position_en}</p>
												</div>
											</div>
										</div>
									</div>

									<div className="row mb-4">
										<div className="col-12 col-sm-6 col-md-4 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[1].position)}`}><img src={posts[1].photo ? `${posts[1].photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[1].position)}`}>{posts[1].name}</a></h4>
													<p>{cookies.i18next === 'id' ? posts[1].position : posts[1].position_en}</p>
												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[9].photo ? `${posts[9].photo}` : "assets/image/pejabat/pak_binsar.jpg"}
															alt="img1"
															className="rounded-circle me-2"
														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[9].position)}`}><b style={{ color: 'black' }}>{posts[9].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[9].position : posts[9].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[10].photo ? `${posts[10].photo}` : "assets/image/pejabat/pak_binsar.jpg"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[10].position)}`}><b style={{ color: 'black' }}>{posts[10].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[10].position : posts[10].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[11].photo ? `${posts[11].photo}` : "assets/image/pejabat/pak_umar.jpg"}
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[11].position)}`}><b style={{ color: 'black' }}>{posts[11].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[11].position : posts[11].position_en}</span>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-md-4 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[2].position)}`}><img src={posts[2].photo ? `${posts[2].photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[2].position)}`}>{posts[2].name}</a></h4>
													<p>{cookies.i18next === 'id' ? posts[2].position : posts[2].position_en}</p>


												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[12].photo ? `${posts[12].photo}` : "assets/image/pejabat/bu_yos_abc.jpeg"}
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[12].position)}`}><b style={{ color: 'black' }}>{posts[12].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[12].position : posts[12].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[13].photo ? `${posts[13].photo}` : "assets/image/profilKosong.png"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[13].position)}`}><b style={{ color: 'black' }}>{posts[13].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[13].position : posts[13].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[14].photo ? `${posts[14].photo}` : "assets/image/profilKosong.png"}
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[14].position)}`}><b style={{ color: 'black' }}>{posts[14].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[14].position : posts[14].position_en}</span>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-md-4 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[3].position)}`}><img src={posts[3].photo ? `${posts[3].photo}` : "assets/image/profilKosong.png"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[3].position)}`}>{posts[3].name}</a></h4>
													<p>{cookies.i18next === 'id' ? posts[3].position : posts[3].position_en}</p>

												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[15].photo ? `${posts[15].photo}` : "assets/image/pejabat/pak_urip.jpg"}
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[15].position)}`}><b style={{ color: 'black' }}>{posts[15].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[15].position : posts[15].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[16].photo ? `${posts[16].photo}` : "assets/image/pejabat/pak_bagus.jpg"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[16].position)}`}><b style={{ color: 'black' }}>{posts[16].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[16].position : posts[16].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[17].photo ? `${posts[17].photo}` : "assets/image/pejabat/pak_eka.jpg"}
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[17].position)}`}><b style={{ color: 'black' }}>{posts[17].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[17].position : posts[17].position_en}</span>
													</li>
												</ul>
											</div>
										</div>
									</div>

									<div className="row mb-4">
										<div className="col-12 col-sm-6 col-md-4 offset-lg-2 offset-md-2 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[4].position)}`}><img src={posts[4].photo ? `${posts[4].photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[4].position)}`}>{posts[4].name}</a></h4>
													<p>{cookies.i18next === 'id' ? posts[4].position : posts[4].position_en}</p>

												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[18].photo ? `${posts[18].photo}` : "assets/image/pejabat/pak_iqbal.jpg"}
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[18].position)}`}><b style={{ color: 'black' }}>{posts[18].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[18].position : posts[18].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[19].photo ? `${posts[19].photo}` : "assets/image/pejabat/pak_helma.png"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[19].position)}`}><b style={{ color: 'black' }}>{posts[19].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[19].position : posts[19].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[20].photo ? `${posts[20].photo}` : "assets/image/pejabat/pak_dedi.jpg"}
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[20].position)}`}><b style={{ color: 'black' }}>{posts[20].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[20].position : posts[20].position_en}</span>
													</li>

												</ul><br /><br />
											</div>
										</div>
										<div className="col-12 col-sm-6 col-md-4 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[5].position)}`}><img src={posts[5].photo ? `${posts[5].photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[5].position)}`}>{posts[5].name}</a></h4>
													<p>{cookies.i18next === 'id' ? posts[5].position : posts[5].position_en}</p>

												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[20].photo ? `${posts[21].photo}` : "assets/image/pejabat/pak_dece.jpg"}
															alt="img1"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[21].position)}`}><b style={{ color: 'black' }}>{posts[21].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[21].position : posts[21].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[22].photo ? `${posts[22].photo}` : "assets/image/pejabat/pak_inza.jpg"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[22].position)}`}><b style={{ color: 'black' }}>{posts[22].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[22].position : posts[22].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[23].photo ? `${posts[23].photo}` : "assets/image/profilKosong.png"}
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[23].position)}`}><b style={{ color: 'black' }}>{posts[23].name}</b> </a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[23].position : posts[23].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[24].photo ? `${posts[24].photo}` : "assets/image/profilKosong.png"}
															alt="img3"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[24].position)}`}><b style={{ color: 'black' }}>{posts[24].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[24].position : posts[24].position_en}</span>
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
													<a href={`/struktur-organisasi/${convertToSlug(posts[6].position)}`}><img src={posts[6].photo ? `${posts[6].photo}` : "assets/image/profilKosong.png"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[6].position)}`}>{posts[6].name}</a></h4>
													<p>{cookies.i18next === 'id' ? posts[6].position : posts[6].position_en}</p>
												</div>
											</div>
										</div>
									</div>

									<div className="row mb-4">
										<div className="col-12 col-sm-6 col-md-4 offset-lg-2 offset-md-2 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[7].position)}`}><img src={posts[7].photo ? `${posts[7].photo}` : "assets/image/profilKosong.png"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[7].name)}`}>{posts[7].name}</a></h4>
													<p>{cookies.i18next === 'id' ? posts[7].position : posts[7].position_en}</p>

												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[32].photo ? `${posts[32].photo}` : "assets/image/profilKosong.png"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[32].position)}`}><b style={{ color: 'black' }}>{posts[32].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[32].position : posts[32].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[26].photo ? `${posts[26].photo}` : "assets/image/profilKosong.png"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[26].position)}`}><b style={{ color: 'black' }}>{posts[26].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[26].position : posts[26].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[27].photo ? `${posts[27].photo}` : "assets/image/profilKosong.png"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[27].position)}`}><b style={{ color: 'black' }}>{posts[27].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[27].position : posts[27].position_en}</span>
													</li>
													<br /><br />
												</ul>
											</div>
										</div>
										<div className="col-12 col-sm-6 col-md-4 mb-4">
											<div className="team-card-rev">
												<div className="team-card-img-rev">
													<a href={`/struktur-organisasi/${convertToSlug(posts[8].position)}`}><img src={posts[8].photo ? `${posts[8].photo}` : "assets/image/profilKosong.png"} className="img-fluid" alt="img-40" /></a>
													<div className="team-card-icon-rev">

													</div>
												</div>
												<div className="team-card-content-rev">
													<h4><a href={`/struktur-organisasi/${convertToSlug(posts[8].position)}`}>{posts[8].name}</a></h4>
													<p>{cookies.i18next === 'id' ? posts[8].position : posts[8].position_en}</p>

												</div>
												<ul className="list-unstyled text-left">
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[28].photo ? `${posts[28].photo}` : "assets/image/profilKosong.png"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[28].position)}`}><b style={{ color: 'black' }}>{posts[28].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[28].position : posts[28].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[29].photo ? `${posts[29].photo}` : "assets/image/profilKosong.png"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[29].position)}`}><b style={{ color: 'black' }}>{posts[29].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[29].position : posts[29].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[30].photo ? `${posts[30].photo}` : "assets/image/profilKosong.png"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[30].position)}`}><b style={{ color: 'black' }}>{posts[30].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[30].position : posts[30].position_en}</span>
													</li>
													<li className="d-flex align-items-center mb-2">
														<img
															src={posts[31].photo ? `${posts[31].photo}` : "assets/image/profilKosong.png"}
															alt="img2"
															className="rounded-circle me-2"

														/>
														<span className="text-small"><b style={{ fontWeight: 'bold' }}><u><a href={`/struktur-organisasi/${convertToSlug(posts[31].position)}`}><b style={{ color: 'black' }}>{posts[31].name}</b></a></u> </b>, <br /> {cookies.i18next === 'id' ? posts[31].position : posts[31].position_en}</span>
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
