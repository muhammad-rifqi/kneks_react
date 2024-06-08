import React from "react"
const Section4 = () => {
	return (
		<section className="service-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<div className="section-title-box">
							<div className="section-tagline">Government Service</div>
							<div className="section-title text-white">Explore our Online <br /> Governmet Services <br /> & Resources</div>
							<div className="section-text">
								<p>Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.</p>
							</div>
							<div className="service-arrow-image">
								<img src="/assets/image/shapes/arrow.png" alt="img-6" />
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="service-card">
							<div className="service-card-video">
								{/* <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup">
										<i className="fa fa-play"></i>
									</a> */}
							</div>
							<ul className="list-unstyled">
								<li><a href="department-details.html">Parking Permission <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="department-details.html">File a Tax Return <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="department-details.html">Order Birth Certificate <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="department-details.html">Get Building Permission <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="department-details.html">Apply for Driving License <i className="fa-solid fa-chevron-right"></i></a></li>
								<li><a href="department-details.html">Report Polution <i className="fa-solid fa-chevron-right"></i></a></li>
							</ul>
							<div className="service-button">
								<a href="department-details.html" className="btn btn-primary">Discover More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Section4

