import React, { useState, useEffect } from "react";

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';

import 'dayjs/locale/id';
import 'dayjs/locale/en';

import { useCookies } from 'react-cookie';

const Section7 = () => {

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

	useEffect(() => {
		if (posts.length > 0) {
			if (document.querySelector('.swiper-berita')) {
				const swipers = new Swiper('.swiper-berita', {
					// pengaturan Swiper
					loop: true,

					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					autoplay: {
						delay: 2500,
					},
					breakpoints: {
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
					},
				});
				// Cleanup function to destroy Swiper instance
				return () => {
					if (swipers) {
						swipers.destroy(true, true);
					}
				};
			}
		}

	}, [posts]);

	const convertToSlug = (title) => {
		return title
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, '')
			.replace(/\s+/g, '-')
			.replace(/-+/g, '-');
	};
	return (
		<section className="portfolio-section ">

			<div className="portfolio-content">
				<div className="row m-0">
					{posts.length > 0 ? (
						<div className="swiper swiper-berita">
							<div className="swiper-wrapper">
								{posts.slice(3, 9).map((item) => (
									<div className="col-lg-3 col-xl-3 swiper-slide" key={item.id}>
										<div className="berita-card-kdeks">
											<div className="berita-card-imgbox-berita">
												<a href={`/berita-terkait/${convertToSlug(item.title)}`}>
													<img src="assets/image/foto-beritas.png" className="img-fluid" alt={item.title} />
												</a>
											</div>

											<div className="berita-content-direktorat-x">
												<div className="direktorat-tag-home">
													<span>{cookies.i18next === 'id' ? '#BERITABARU' : '#CURRENTNEWS'}</span>
												</div>
												<div className="event-card-title pb-2">
													<h4>
														<a href={`/berita-terkait/${convertToSlug(item.title)}`}>{cookies.i18next === 'id' ? item.title : item.title_en}</a>
													</h4>
												</div>
												<div className="event-card-info-direktorat">
													<span>{cookies.i18next === 'id' ? formatDate(item.news_datetime, 'id') : formatDate(item.news_datetime, 'en')}</span>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="swiper-button-prev">
								<i className="fa-solid fa-chevron-left"></i>
							</div>
							<div className="swiper-button-next">
								<i className="fa-solid fa-chevron-right"></i>
							</div>
						</div>
					) : (
						<p className="text-center">No posts available.</p>
					)}
				</div >
			</div>
		</section>
	)
}
export default Section7