import React, { useState, useEffect } from "react";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';



import axios from 'axios';
import Swal from "sweetalert2";
const Section1 = () => {
	useEffect(() => {

		if (document.querySelector('.swiper-banner')) {
			// var mySwiper = new Swiper('.swiper-kdeks', {
			// pengaturan Swiper

			const swipers = new Swiper('.swiper-berita', {
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
				const response = await axios.get(`https://webdev.rifhandi.com/posts`);
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
		<section className="main-slider main-slider-two">
			<div className="main-slider-two-swiper-x owl-carousel owl-theme">
				<div className="item ">
					<div className="item-slider-bg" style={{ backgroundImage: `url("/assets/image/slide.png")` }}></div>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="slider-content-two">
									<h1 className="section-title">"Menyatukan langkah, Memajukan Negeri"</h1>
									<div className="slider-tagline">Dengan mempercepat, memperluas dan memajukan pengembangan ekonomi dan keuangan syariah dalam rangka memperkuat ketahanan ekonomi nasional </div>
									<a href="#" class="btn btn-primary mt-3 ">Lihat Selengkapnya</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="item-slider-bg" style={{ backgroundImage: `url("/assets/image/slide.png")` }}></div>
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="slider-content-two">
									<h1 className="section-title">"Menyatukan langkah, Memajukan Negeri"</h1>
									<div className="slider-tagline">Dengan mempercepat, memperluas dan memajukan pengembangan ekonomi dan keuangan syariah dalam rangka memperkuat ketahanan ekonomi nasional </div>
									<a href="#" class="btn btn-primary mt-3">Lihat Selengkapnya</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Section1