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
				setPosts(response.data.slice(0, 6));
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
				<section className="about-one-section funfact-section-struktur">
					<div className="container">
						<div className="row row-gutter-y-40 text-center">
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
								// posts.slice(0,6).map((item) => (
								// <div className="col-12 col-md-6 col-xl-3" key={item.id}>
								<div className="tree" style={{marginTop : '-30px', backgroundColor : 'white'}}>
									<li>
										<ul>
											<li><a href="#test">
												{/* <div className="team-cardx"> */}
												<div className="team-cardx">
													{/* <div className="team-cardx-img"> */}
													<div >
														<a href={`/struktur-organisasi/${convertToSlug(posts[0]?.name)}`}><img src={posts[0]?.photo ? `${posts[0]?.photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40"  width="80"/></a>
														<div className="team-cardx-icon">
															{/* Social Media Icons */}
														</div>
													</div>
													<div className="team-cardx-content mt-3">
														<h5 style={{fontSize : '10px'}}><a href={`/struktur-organisasi/${convertToSlug(posts[0]?.name)}`}>{posts[0]?.name}</a></h5>
														<p style={{fontSize : '10px', fontWeight : 'bold'}}>{posts[0]?.position}</p>
													</div>
												</div>
											</a>
												<ul>
													<li><a href="#test">
														{/* <div className="team-cardx"> */}
														<div className="team-cardx">
															{/* <div className="team-cardx-img"> */}
															<div>
																<a href={`/struktur-organisasi/${convertToSlug(posts[1]?.name)}`}><img src={posts[1]?.photo ? `${posts[1]?.photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" width="80" /></a>
																<div className="team-cardx-icon">
																	{/* Social Media Icons */}
																</div>
															</div>
															<div className="team-cardx-content">
																<p style={{fontSize : '9px'}}><a href={`/struktur-organisasi/${convertToSlug(posts[1]?.name)}`}>{posts[1]?.name}</a></p>
																<p style={{fontSize : '9px', fontWeight : 'bold'}}>{posts[1]?.position}</p>
															</div>
														</div>
													</a>
													</li>
													<li><a href="#test">
														{/* <div className="team-cardx"> */}
														<div className="team-cardx">
															{/* <div className="team-cardx-img"> */}
															<div>
																<a href={`/struktur-organisasi/${convertToSlug(posts[2]?.name)}`}><img src={posts[2]?.photo ? `${posts[2]?.photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" width="80" /></a>
																<div className="team-cardx-icon">
																	{/* Social Media Icons */}
																</div>
															</div>
															<div className="team-cardx-content">
																<p style={{fontSize : '9px'}}><a href={`/struktur-organisasi/${convertToSlug(posts[2]?.name)}`}>{posts[2]?.name}</a></p>
																<p style={{fontSize : '9px', fontWeight : 'bold'}}>{posts[2]?.position}</p>
															</div>
														</div>
													</a>
													</li>
													<li><a href="#test">
														{/* <div className="team-cardx"> */}
														<div className="team-cardx">
															{/* <div className="team-cardx-img"> */}
															<div>
																<a href={`/struktur-organisasi/${convertToSlug(posts[3]?.name)}`}><img src={posts[3]?.photo ? `${posts[3]?.photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" width="80" /></a>
																<div className="team-cardx-icon">
																	{/* Social Media Icons */}
																</div>
															</div>
															<div className="team-cardx-content">
																<p style={{fontSize : '9px'}}><a href={`/struktur-organisasi/${convertToSlug(posts[3]?.name)}`}>{posts[3]?.name}</a></p>
																<p style={{fontSize : '9px', fontWeight : 'bold'}}>{posts[3]?.position}</p>
															</div>
														</div>

													</a>
													</li>
													<li><a href="#test">
														{/* <div className="team-cardx"> */}
														<div className="team-cardx">
															{/* <div className="team-cardx-img"> */}
															<div>
																<a href={`/struktur-organisasi/${convertToSlug(posts[4]?.name)}`}><img src={posts[4]?.photo ? `${posts[4]?.photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" width="80" /></a>
																<div className="team-cardx-icon">
																	{/* Social Media Icons */}
																</div>
															</div>
															<div className="team-cardx-content">
																<p style={{fontSize : '9px'}}><a href={`/struktur-organisasi/${convertToSlug(posts[4]?.name)}`}>{posts[4]?.name}</a></p>
																<p style={{fontSize : '9px', fontWeight : 'bold'}}>{posts[4]?.position}</p>
															</div>
														</div>
													</a>
													</li>
													<li><a href="#test">
														{/* <div className="team-cardx"> */}
														<div className="team-cardx">
															{/* <div className="team-cardx-img"> */}
															<div>
																<a href={`/struktur-organisasi/${convertToSlug(posts[5]?.name)}`}><img src={posts[5]?.photo ? `${posts[5]?.photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" width="80" /></a>
																<div className="team-cardx-icon">
																	{/* Social Media Icons */}
																</div>
															</div>
															<div className="team-cardx-content">
																<p style={{fontSize : '9px'}}><a href={`/struktur-organisasi/${convertToSlug(posts[5]?.name)}`}>{posts[5]?.name}</a></p>
																<p style={{fontSize : '9px', fontWeight : 'bold'}}>{posts[5]?.position}</p>
															</div>
														</div>
													</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</div>
								// ))
							)}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default StrukturOrganisasi;
