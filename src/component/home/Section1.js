import React, { useState, useEffect } from "react";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import Carousel from 'react-bootstrap/Carousel';

import axios from 'axios';
import Swal from "sweetalert2";
import { useTranslation } from 'react-i18next';
const Section1 = () => {
	const { t } = useTranslation();
	useEffect(() => {

		if (document.querySelector('.swiper-banner')) {
			// var mySwiper = new Swiper('.swiper-kdeks', {
			// pengaturan Swiper

			const swipers = new Swiper('.swiper-banner', {
				// pengaturan Swiper
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				// breakpoints: {
				// 	640: {
				// 		slidesPerView: 2,
				// 		spaceBetween: 20,
				// 	},
				// 	768: {
				// 		slidesPerView: 3,
				// 		spaceBetween: 30,
				// 	},
				// 	1024: {
				// 		slidesPerView: 4,
				// 		spaceBetween: 20,
				// 	},
				// },
			});
			// Cleanup function to destroy Swiper instance
			return () => {
				if (swipers) {
					swipers.destroy(true, true);
				}
			};
		}

	}, []);

	const [posts, setPosts] = useState([]);
	useEffect(() => {
		// Function to fetch posts
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

		fetchPosts(); // Call fetchPosts function when component mounts
	}, []);

	return (
		<section className="main-slider main-slider">
			<Carousel data-bs-theme="dark">
				{posts.slice(0, 2).map((item) => (
					<Carousel.Item>
						<div className="item-slider-bg" style={{ backgroundImage: `url("/assets/image/slide.png")` }}></div>
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="slider-content-two">
										<h1 className="section-title">"{t('bannerJudul')}"</h1>
										<div className="slider-tagline">{t('bannerIsi')}</div>
										<a href="#t" class="btn btn-primary mt-3">{t('tombol')}</a>
									</div>
								</div>
							</div>
						</div>
					</Carousel.Item>
				))}
			</Carousel>
		</section>


	)
}
export default Section1