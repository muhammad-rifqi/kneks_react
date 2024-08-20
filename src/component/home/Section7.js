import React, { useState, useEffect } from "react";
import isiItemsBerita from "../dumy/dataBerita"
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
const Section7 = () => {
	const [rows, setItems] = useState([]);
	useEffect(() => {
		const isian = isiItemsBerita();
		setItems(isian);
		// alert(items.length);
		if (document.querySelector('.swiper-berita')) {
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

	}, []);
	return (
		<section className="portfolio-section ">

			<div className="portfolio-content conatainer-fluid">
				<div className="row row-gutter-30">
					<div className="swiper swiper-berita">
						<div className="swiper-wrapper">
							{
								rows.slice(0, 5).map((item) => (
									<div className="col-lg-3 col-xl-3 swiper-slide" key={item.id}>
										<div className="berita-card-kdeks shadow">
											<div className="berita-card-imgbox-berita ">
												<a href={`/berita-terkait/${item.slug}`}><img src={item.foto} className="img-fluid" alt={item.title} /></a>
											</div>
											<div className="berita-content-direktorat">

												<div className="event-card-title pb-2">
													<h4>
														<a href={`/berita-terkait/${item.slug}`}>{item.title}</a>
													</h4>
												</div>
												<div className="event-card-info-direktorat">
													<span>{item.tanggal}</span>
												</div>
											</div>
										</div>
									</div>
								))}
						</div >
						<div className="swiper-button-prev">
						</div>
						<div className="swiper-button-next">
						</div>
					</div >
				</div >
			</div>
		</section>
	)
}
export default Section7