import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import 'dayjs/locale/en';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';

const Section8 = () => {
	const { t } = useTranslation();
	const [cookies] = useCookies(['i18next']);
	const formatDate = (date, locale = 'en') => {
		dayjs.locale(locale); // Set the locale dynamically
		return dayjs(date).format('DD MMMM YYYY'); // Format the date
	};
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			// setLoading(true);
			try {
				const url = process.env.REACT_APP_API_URL;
				const endpoint = process.env.REACT_APP_API_AGENDA;
				const response = await axios.get(`${url}${endpoint}`);
				setPosts(response.data);
			} catch (err) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err,

				});
			} finally {
				// setLoading(false);
			}
		};

		fetchPosts();


	}, []);
	const convertToSlug = (title) => {
		if (!title) return ""; // Handle null or undefined title
		return title
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, '')
			.replace(/\s+/g, '-')
			.replace(/-+/g, '-');
	};

	return (
		<section className="mayor-section">
			<div className="container">
				<div className="blog-box-x" data-aos="flip-up" style={{ marginTop: '-60px' }}>
					<div className="section-title-box text-center">
						<h2 className="section-title">{t('rekomendasi')}</h2>
					</div>
				</div>
				<div className="row">
					{posts.length > 0 ? (

						posts.slice(0, 4).map((item) => (
							<div style={{ marginTop: '-40px' }} className="col-lg-3 col-md-4" data-aos="fade-down-left" key={item?.id}>
								<a href={`/agenda/${convertToSlug(item?.title)}`}>
									<div className="card shadow p-3 rounded card-agendas h-100" style={{ background: `#146AA4`, color: `#ffffff` }}>
										<div className="card-header" style={{ borderBottom: `1px solid #ffffff`, paddingBottom: `10px`, background: `#146AA4` }}><h4>{cookies.i18next === 'id' ? item.title : item.title_en}</h4></div>
										<div className="card-body">
											<div className="card-text">{cookies.i18next === 'id' ? formatDate(item.agenda_datetime, 'id') : formatDate(item.agenda_datetime, 'en')}</div>
											<div className="card-text">{dayjs(item.agenda_datetime).locale('id').format('h:mm')} WIB</div>

										</div>
										<div className="card-footer text-end" style={{ borderTop: `none`, background: `#146AA4`, color: `#ffffff` }}>
											<i className="fa-solid fa-calendar "></i>
										</div>
									</div>
								</a>
							</div>
						))

					) : (
						<p className="text-center">No posts available.</p>
					)}
				</div>
				<div className="selengkapnya" data-aos="fade-down-left" style={{ textAlign: 'center', marginTop: '20px' }}>
					<a href={`/agenda`} className="btn btn-primary btn-sm" style={{ backgroundColor: "#006699" }}>
						Lihat Selengkapnya
					</a>
				</div>
			</div>
		</section >
	)
}
export default Section8