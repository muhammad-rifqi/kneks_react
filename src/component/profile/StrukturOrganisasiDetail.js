import React, { useState, useEffect, useRef } from "react";
import { useParams,useLocation  } from "react-router-dom";
import Swal from "sweetalert2";
// import dayjs from 'dayjs';
// import 'dayjs/locale/id';
import axios from 'axios';
import { useCookies } from 'react-cookie';
const StrukturOrganisasiDetail = () => {
	const [cookies] = useCookies(['i18next']);
	const { slug } = useParams();
	const [rows, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	const { search } = useLocation();
  	const queryParams = new URLSearchParams(search);
	const nama_table = atob(queryParams.get('tbl'));
  	const id_table = atob(queryParams.get('keyid'));

	// const convertToSlug = (title) => {
	// 	if (!title) return ""; 
	// 	return title
	// 		.toLowerCase()
	// 		.trim()
	// 		.replace(/[^\w\s-]/g, "")
	// 		.replace(/\s+/g, "-")
	// 		.replace(/-+/g, "-");
	// };

	const effectrun = useRef(false);
	useEffect(() => {
		if (effectrun.current === false) {
			const fetchPosts = async () => {
				setLoading(true)
				try {
					const url = process.env.REACT_APP_API_URL;
					const endpoint = process.env.REACT_APP_API_DETAIL_MULTI_STRUCTURE+'?tbl='+nama_table+'&keyid='+id_table;
					const responsei = await axios.get(`${url}${endpoint}`);
					// const foundItem = responsei.data.find(kneks => convertToSlug(kneks.position) === slug);
					if(responsei){
						setItem(responsei.data);
					}



				} catch (err) {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: err.message || "An error occurred while fetching data.",
					});
				} finally {
					setLoading(false);
				}
			};

			fetchPosts();

			return () => {
				effectrun.current = true
			}
		}
	}, [slug,id_table,nama_table]);

	function decodeHtmlEntities(str) {
		const txt = document.createElement("textarea");
		txt.innerHTML = str;
		return txt.value;
	}

	if (loading) {
		return (
			<div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}
	return (
		<>
			<div className="page-wrapper">
				{/* <section className="page-banner-structure" style={{ backgroundColor: '#cecece', paddingTop: '70px', paddingBottom: '85px', height: '320px' }}>
					<div className="container">
						<div className="row d-flex align-items-center">
							<div className="col-lg-6 col-md-6 col-sm-12 page-banner-title-x  d-none d-lg-block d-md-block">
								<h3 style={{ display: 'none' }}>{rows?.name}</h3>
								<h5 style={{ display: 'none' }}>{rows?.position}</h5>
							</div>
							<div className="struktur-profil col-lg-6 col-md-6 col-sm-12 text-end  d-none d-lg-block d-md-block">
								<img src={rows?.photo ? `${rows?.photo}` : "assets/image/defaulttumbnail.jpeg"} alt="" className="img-fluid" style={{ display: 'none' }} />
							</div>

							<div className="struktur-profil col-lg-6 col-md-6 col-sm-12 text-center  d-block d-lg-none d-md-none">
								<img style={{ display: 'none' }} src={rows?.photo ? `${rows?.photo}` : "assets/image/defaulttumbnail.jpeg"} alt="" className="img-fluid" />
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 page-banner-title-x  text-center d-block d-lg-none d-md-none pt-5">
								<h3 style={{ display: 'none' }}>{rows?.name}</h3>
								<h5 style={{ display: 'none' }}>{rows?.position}</h5>
							</div>
						</div>
					</div>
				</section> */}
				<section className="page-banner">
					<div className="container">
						<div className="page-banner-title">
							{/* */}
						</div>
					</div>
				</section>
				<section className="event-details-section-ber" style={{ marginTop: '-35px' }}>
					<div className="container">
						{/* Profile Section */}
						<div className="row align-items-center">
							<div className="col-md-4 text-center mb-3 mb-md-0">
								<div className="struktur-profil">
									<img
										src={rows[0]?.photo ? rows[0]?.photo : `${process.env.PUBLIC_URL}/assets/image/profilKosong.png`}
										alt="Profile"
										className="img-fluid rounded-circle"
									/>
								</div>
							</div>
							<div className="col-md-8 text-center text-md-start">
								<h5 className="text-secondary">{rows[0]?.name}</h5>
								<p className="text-secondary">{cookies.i18next === 'id' ? rows[0]?.position : rows[0]?.position_en}</p>
							</div>
						</div>
						<hr className="my-4" />
						{/* Details Section */}
						<div className="row">
							<div className="col-lg-9">
								<div className="event-details-content-box">
									<p style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: cookies.i18next === 'id' ? decodeHtmlEntities(rows[0]?.description) : decodeHtmlEntities(rows[0]?.description_en) }} />
								</div>
							</div>
							<div className="col-lg-3 text-center text-lg-start">
								{/* Social Media Links */}
								<div className="sidebar-widget-event-meta-socials d-flex justify-content-center justify-content-lg-start gap-3">
									<a href={rows[0]?.x || "https://x.com/"} target="_blank" rel="noreferrer" className="social-icon">
										<i className="fa-brands fa-x-twitter"></i>
									</a>
									<a href={rows[0]?.facebook || "https://web.facebook.com/"} target="_blank" rel="noreferrer" className="social-icon">
										<i className="fa-brands fa-facebook"></i>
									</a>
									<a href={rows[0]?.linkedin || "https://linkedin.com/"} target="_blank" rel="noreferrer" className="social-icon">
										<i className="fa-brands fa-linkedin"></i>
									</a>
									<a href={rows[0]?.instagram || "https://instagram.com/"} target="_blank" rel="noreferrer" className="social-icon">
										<i className="fa-brands fa-instagram"></i>
									</a>
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