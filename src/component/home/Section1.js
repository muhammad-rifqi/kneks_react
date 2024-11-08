import React, { useState, useEffect } from "react";
// import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.css';

import Carousel from 'react-bootstrap/Carousel';

import axios from 'axios';
import Swal from "sweetalert2";
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';

const Section1 = () => {
	const { t } = useTranslation();
	const [posts, setPosts] = useState([]);
	const [cookies] = useCookies(['i18next']);



	useEffect(() => {
		// Function to fetch posts
		const fetchPosts = async () => {
			// setLoading(true);
			try {
				const url = process.env.REACT_APP_API_URL;
				const endpoint = process.env.REACT_APP_API_BANNER;
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
			{posts.length > 0 ? (
				<Carousel data-bs-theme="dark">
					{posts.map((item, index) => (
						<Carousel.Item key={index} interval={5000}>
							<div
								className="item-slider-bg"
								style={{ backgroundImage: `url("${item?.image}")` }}
							></div>
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<div className="slider-content-two">
											<h1 className="section-title">"{cookies.i18next === 'id' ? item?.title : item?.title_en}"</h1>
											<div className="slider-tagline"><div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'id' ? item?.content : item?.content_en }} /></div>
											<a href="banner/detail" className="btn btn-primary mt-3">
												{t('tombol')}
											</a>
										</div>
									</div>
								</div>
							</div>
						</Carousel.Item>
					))}
				</Carousel>
			) : (
				<p className="text-center">No posts available.</p>
			)}
		</section>


	)
}
export default Section1