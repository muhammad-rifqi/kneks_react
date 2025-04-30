import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useTranslation } from "react-i18next";
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

	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + process.env.REACT_APP_API_DATA)
			.then((resp) => {
				if (!resp.ok) throw new Error("Failed to fetch data");
				return resp.json();
			})
			.then((rows) => {
				const arr = rows.map((element) => ({
					icon: '🌐',
					title: element?.title,
					title_en: element?.title_en || element?.title, // Default to original title
					value: element?.amount,
					unit: 'Data',
					date: element?.date_created.split('T')[0],
				}));
				setData(arr);
			})
			.catch((error) => console.error("Error fetching statistics:", error));
	}, []);

	if (data.length > 0) {
		var options = {
			loop: true,
			margin: 10,
			dots: true,
			autoplay: true,
			nav: true,
			navText: [
				"<i class='custom-prev fas fa-chevron-left'></i>",
				"<i class='custom-next fas fa-chevron-right'></i>"
			], // Custom tombol navigasi
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 3,
				},
				1000: {
					items: 4,
				},
			},
		};
	}
	
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
				<OwlCarousel className="owl-theme custom-carouselx" loop={true} nav={true} dots={true} {...options} data-aos="fade-down-left">
					{data.map((item, index) => (
						<div
							key={index}
							className="row align-items-center justify-content-center"
						>
							<div className="col-md-10 text-center mb-3">
								<a
									href={`/data`}>
									<div className="card bg-light border-0 shadow p-3">
										<i className="fas fa-briefcase fa-2x mb-3"></i>
										<h5
											style={{ fontSize: '16px' }}
											className="card-title mb-0"
										>
											{cookies.i18next === 'id'
												? item.title
												: item.title_en}
										</h5>
										<h3 className="card-text mb-0">{item.value}</h3>
										<p className="card-text text-muted">
											{cookies.i18next === 'id'
												? formatDate(item.date, 'id')
												: formatDate(item.date, 'en')}
										</p>
									</div>
								</a>
							</div>
						</div>
					))}
				</OwlCarousel>
			</div>
		</section>
	);
};

export default Section9;
