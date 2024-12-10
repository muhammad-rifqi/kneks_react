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

	const [data, setData] = useState([]);
	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/statistics')
			.then(resp => resp.json())
			.then((rows) => {
				const arr = [];
				rows.forEach((element) => {
					const ddd = {
						icon: '🌐',
						title: element?.title,
						value: element?.amount,
						unit: 'Data',
						date: element?.date_created.split('T')[0],
					}
					arr.push(ddd)
				});
				setData(arr)
			})
	})

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


					{data.map((item, index) => (
						<div className="row align-items-center justify-content-center">
							<div className="col-md-12 text-center mb-3 " key={index}>
								<div className="card bg-light border-0 shadow p-3">
									{/* Replace with your actual icon component or image */}
									<i className="fas fa-briefcase fa-2x mb-3"></i>
									<h5 style={{ fontSize: '16px' }} className="card-title mb-0">{cookies.i18next === 'id' ? item.title : item.title_en}</h5>
									<h3 className="card-text mb-0">{item.value}</h3>
									<p className="card-text text-muted">{cookies.i18next === 'id' ? formatDate(item.date, 'id') : formatDate(item.date, 'en')}</p>

								</div>
							</div>
						</div>
					))}

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
