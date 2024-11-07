import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import 'dayjs/locale/en';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';

const News = () => {
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
				const endpoint = process.env.REACT_APP_API_POST;
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
	const { t } = useTranslation();
	const convertToSlug = (title) => {
		return title
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, '')
			.replace(/\s+/g, '-')
			.replace(/-+/g, '-');
	};
	return (
		<section className="news-section">
			<div className="portfolio-content conatainer-fluid">
				<div className="blog-box">
					<div className="section-title-box text-center">
						<h2 className="section-title" style={{ color: '#146AA4' }}>{t('menu.beritaKegiatan')}</h2>
					</div>
				</div>
				<div className="row ">
					{posts.length > 0 ? (

						posts.slice(0, 2).map((item) => (
							<div className="col-md-6 col-lg-6" key={item.id}>
								<a href={`/berita-terkait/${convertToSlug(item.title)}`}>
									<div className="card-box-b card-shadow news-box">
										<div className="img-box-b-home">
											<img src="/assets/image/berita2.jpeg" alt={item.title} className="img-b img-fluid" />
										</div>
										<div className="card-overlay">
											<div className="card-header-b">
												<div className="card-category-b">
													<span className="category-b-x">{cookies.i18next === 'id' ? '#BERITABARU' : '#CURRENTNEWS'}</span>
												</div>
												<div className="card-title-b">
													<h2 className="text-white">
														{cookies.i18next === 'id' ? item.title : item.title_en}
													</h2>
												</div>
												<div className="card-date">
													<span className="date-b">{cookies.i18next === 'id' ? formatDate(item.news_datetime, 'id') : formatDate(item.news_datetime, 'en')}</span>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
						))

					) : (
						<p className="text-center">No posts available.</p>
					)}
				</div>
			</div>
		</section>
	)
}
export default News