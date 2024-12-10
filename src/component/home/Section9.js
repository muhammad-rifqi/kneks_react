import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { useCookies } from 'react-cookie';


const Section9 = () => {
	const [cookies] = useCookies(['i18next']);
	const formatDate = (date, locale = 'en') => {
		dayjs.locale(locale); // Set the locale dynamically
		return dayjs(date).format('DD MMMM YYYY'); // Format the date
	};
	const { t } = useTranslation();
	
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	const options = {
		items: 1,
		margin: 30,
		loop: true, // Disable looping since we only have one slide
		navigation: true,
		autoplay: true,
		autoplayTimeout: 4000,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
			},
		},
	};

	useEffect(() => {
		// Function to fetch posts
		const fetchPosts = async () => {
			setLoading(true);
			try {
				const url = process.env.REACT_APP_API_URL;
				const endpoint = process.env.REACT_APP_API_DATA;
				const response = await axios.get(`${url}${endpoint}`);
				setPosts(response.data);
				console.log(response.data)
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
	// const data = [
	// 	{
	// 		icon: '💼', // Replace with actual icon component or image path
	// 		title: 'Tingkat Pengangguran Terbuka',
	// 		value: '4,82',
	// 		unit: 'Persen',
	// 		date: 'Februari 2024',
	// 	},
	// 	{
	// 		icon: '💰', // Replace with actual icon component or image path
	// 		title: 'Gini Rasio',
	// 		value: '0,379',
	// 		date: 'Maret 2024',
	// 	},
	// 	{
	// 		icon: '🏠', // Replace with actual icon component or image path
	// 		title: 'IPM (UHH LF SP2020)',
	// 		value: '74,39',
	// 		date: '2023',
	// 	},
	// 	{
	// 		icon: '🌐', // Replace with actual icon component or image path
	// 		title: 'Nilai Ekspor',
	// 		value: '24.421,6',
	// 		unit: 'Juta US$',
	// 		date: 'Oktober 2024',
	// 	},
	// 	{
	// 		icon: '🌐', // Replace with actual icon component or image path
	// 		title: 'Nilai Impor',
	// 		value: '21.938,3',
	// 		unit: 'Juta US$',
	// 		date: 'Oktober 2024',
	// 	},
	// 	{
	// 		icon: '🌐', // Replace with actual icon component or image path
	// 		title: 'Nilai Impor',
	// 		value: '21.938,3',
	// 		unit: 'Juta US$',
	// 		date: 'Oktober 2024',
	// 	},
	// 	{
	// 		icon: '🌐', // Replace with actual icon component or image path
	// 		title: 'Nilai Impor',
	// 		value: '21.938,3',
	// 		unit: 'Juta US$',
	// 		date: 'Oktober 2024',
	// 	},
	// ];

	return (
		<section className='funfact-section'>
			<div className='container'>
				<div className='blog-box' style={{ paddingBottom: "50px" }}>
					<div className='section-title-box text-center' data-aos="flip-up">
						<h2 className='section-title text-white'>
							{t("statistik_slider")}
						</h2>
					</div>
				</div>
				<OwlCarousel className="owl-themes" {...options} data-aos="fade-down-left" >

					{posts.length > 0 ? (
						posts.map((item,index) => (
							<div className="row align-items-center justify-content-center">
								<div className="col-md-12 text-center mb-3 " key={index}>
									<div className="card bg-light border-0 shadow p-3">
										{/* Replace with your actual icon component or image */}
										{/* <i className="fas fa-briefcase fa-2x mb-3"></i> */}
										<h5 style={{ fontSize: '16px' }} className="card-title mb-0">{cookies.i18next === 'id' ? item.title : item.title_en}</h5>
										<h3 className="card-text mb-0">{item.amount}</h3>
										<p className="card-text text-muted">{cookies.i18next === 'id' ? formatDate(item.date_created, 'id') : formatDate(item.date_created, 'en')}</p>
									</div>
								</div>
							</div>
						))
					) : (
						<p className="text-center">No posts available.</p>
					)}

				</OwlCarousel>
				{/* <Tabs
                    activeKey={activeTab}
                    onSelect={setActiveTab}
                    className="mb-3 justify-content-center"
                >
                    {dataTabs.map((tab) => (
                        <Tab eventKey={tab.key} title={tab.key} key={tab.key}>
                            {tab.contents}
                        </Tab>
                    ))}
                </Tabs> */}
			</div>
		</section>
	);
};

export default Section9;
