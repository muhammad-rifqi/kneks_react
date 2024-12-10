import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
// import dayjs from 'dayjs';
// import 'dayjs/locale/id';
import axios from 'axios';
const StrukturOrganisasiDetail = () => {
	const { slug } = useParams();
	const [rows, setItem] = useState(null);
	const convertToSlug = (title) => {
		if (!title) return ""; // Handle null or undefined title
		return title
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, "")
			.replace(/\s+/g, "-")
			.replace(/-+/g, "-");
	};

	const effectrun = useRef(false);
	useEffect(() => {
		if (effectrun.current === false) {
			const fetchPosts = async () => {
				try {
					const url = process.env.REACT_APP_API_URL;
					const endpoint = process.env.REACT_APP_API_STUKTUR_ORGANISASI;
					const responsei = await axios.get(`${url}${endpoint}`);
					const foundItem = responsei.data.find(kneks => convertToSlug(kneks.name) === slug);

					// throw new Error("Error!");

					if (responsei) {
						// setItemx(responsei.data);
						setItem(foundItem);
					}
				} catch (err) {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: err.message || "An error occurred while fetching data.",
					});
				}
			};

			fetchPosts();

			return () => {
				effectrun.current = true
			}
		}
	}, [slug]);
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
				<section className="event-details-section-ber" style={{marginTop:'-35px'}}>
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="struktur-profil text-center">
									<img src={rows?.photo ? `${rows?.photo}` : "assets/image/defaulttumbnail.jpeg"} alt="" className="img-fluid"/>
								</div>
							</div>
							<div className="col-md-8 text-center ">
								<br />
								<br />
								<h5 className="text-secondary">{rows?.name}</h5>
								<p className="text-secondary">{rows?.position}</p>
							</div>
						</div>
						<br />
						<br />
						<div className="row">
							<div className="col-lg-9">
								<div className="event-details-content-box">
									<p style={{ textAlign: `justify` }} dangerouslySetInnerHTML={{ __html: rows?.description }}>
									</p>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="sidebar-widget-event-meta-socials">
									<a href="https://x.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter s"></i></a>
									<a href="https://facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
									<a href="https://linkedln/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
									<a href="https://instagram.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
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