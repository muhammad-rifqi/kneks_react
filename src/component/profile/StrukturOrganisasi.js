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
				const endpoint = process.env.REACT_APP_API_MULTI_STRUCTURE;
				const response = await axios.get(`${url}${endpoint}`);
				// setPosts(response.data.slice(0, 36));
				setPosts(response.data);
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

		fetchPosts();

	}, []);

	const convertToSlug = (title) => {
		if (!title) return "";
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

									{
										posts.length > 0 && (
											<div>
												{Object.values(posts).map((items1, index, arr) => (
													<React.Fragment key={items1.id}>
														{index === Math.floor(arr.length / 2) && (
															<>
																<hr />
																<div className="blog-box-manajemen">
																	<div className="section-title-box text-center">
																		<h2 className="section-title">Sekretariat</h2>
																	</div>
																</div>
															</>
														)}
														<div className="row row-gutter-30 mb-4">
															<div className="col-12 col-sm-6 col-md-4 col-lg-4 offset-lg-4 offset-md-4">
																<div className="team-card-rev">
																	<div className="team-card-img-rev">
																		<a href={`/struktur-organisasi/${convertToSlug(items1?.position)}`}>
																			<img
																				src={items1?.photo ? `${items1?.photo}` : "assets/image/defaulttumbnail.jpeg"}
																				className="img-fluid"
																				alt="img-40"
																			/>
																		</a>
																		<div className="team-card-icon-rev"></div>
																	</div>
																	<div className="team-card-content-rev">
																		<h4>
																			<a href={`/struktur-organisasi/${convertToSlug(items1?.position)}`}>{items1?.name}</a>
																		</h4>
																		<p>{cookies.i18next === 'id' ? items1?.position : items1?.position_en}</p>
																	</div>
																</div>
															</div>
														</div>


														{items1?.ag?.length > 0 && (
															<div className="row mb-4 justify-content-center">
																{
																	items1?.ag.map((item2) => (
																		<div className="col-12 col-sm-6 col-md-4 mb-4" key={item2.id}>
																			<div className="team-card-rev">
																				<div className="team-card-img-rev">
																					<a href={`/struktur-organisasi/${convertToSlug(item2?.position)}`}>
																						<img
																							src={item2?.photo ? `${item2?.photo}` : "assets/image/defaulttumbnail.jpeg"}
																							className="img-fluid"
																							alt="img-40"
																						/>
																					</a>
																				</div>
																				<div className="team-card-content-rev">
																					<h4>
																						<a href={`/struktur-organisasi/${convertToSlug(item2?.position)}`}>{item2?.name}</a>
																					</h4>
																					<p>{cookies.i18next === 'id' ? item2?.position : item2?.position_en}</p>
																				</div>

																				{item2?.sag?.length > 0 && (
																					<ul className="list-unstyled text-left">
																						{
																							item2?.sag.map((item3) => (

																								<li className="d-flex align-items-center mb-2" key={item3.id}>
																									<img
																										src={item3?.photo ? `${item3.photo}` : "assets/image/pejabat/pak_dece.jpg"}
																										alt="img1"
																										className="rounded-circle me-2"
																									/>
																									<span className="text-small">
																										<b>
																											<u>
																												<a href={`/struktur-organisasi/${convertToSlug(item3?.position)}`}>
																													<b style={{ color: 'black' }}>{item3?.name}</b>
																												</a>
																											</u>
																										</b>
																										, <br />
																										{cookies.i18next === 'id' ? item3?.position : item3?.position_en}
																									</span>
																								</li>
																							))
																						}
																					</ul>
																				)}
																			</div>
																		</div>

																	))
																}

															</div>
														)}
													</React.Fragment>
												))}
											</div>
										)
									}

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
