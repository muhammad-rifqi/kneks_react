import React,{ useState, useEffect }  from "react";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import isiItemsBerita from "../dumy/dataBerita"
const Section1 = () => {
    const [rows, setItems] = useState([]);
    useEffect(() => {
		const isian = isiItemsBerita();
		setItems(isian);
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

	console.log(rows);
	
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