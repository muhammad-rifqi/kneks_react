import React from "react"
const Section10 = () => {
	return (
		<section className="event-section">
			<div className="container">
				<div className="event-section-inner">
					<div className="row">
						<div className="col-lg-6">
							<div className="section-title-box">
								<div className="section-tagline">LATEST EVENTS</div>
								<h2 className="section-title">Explore Upcoming City Event Schedule</h2>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="event-content-box">
								<div className="section-text">
									<p>Aliquam viverra arcu. Donec aliquet blandit enim feugiat.
										Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row row-gutter-y-40">
						<div className="col-xl-5">
							<div className="event-subscribe-card">
								<div className="event-details-card-title">
									<div className="event-icon">
										<i className="flaticon-envelope"></i>
									</div>
									<h5>Subscribe</h5>
									<p>Get latest news & events details</p>
								</div>
								<div className="event-details-card-content">
									<form action="/assets/inc/sendemail.php" className="contact-form" method="post">
										<div className="form-group">
											<input type="email" id="Email" className="input-text" placeholder="Email address" name="email" required />
										</div>
										<button className="btn btn-primary w-100">Subscribe</button>
										<p>Never share your email with others.</p>
									</form>
								</div>
							</div>
						</div>
						<div className="col-xl-7">
							<div className="event-card">
								<div className="event-card-image">
									<div className="event-card-image-inner">
										<a href="event-details.html"><img src="/assets/image/event/event-2.jpg" className="img-fluid" alt="img-20" /></a>
										<div className="event-card-meta">
											<div className="event-meta-number">
												<span>28</span>
											</div>
											<div className="event-meta-date">
												<span>October 2022</span>
											</div>
										</div>
									</div>
								</div>
								<div className="event-card-content">
									<div className="event-card-info">
										<ul className="list-unstyled">
											<li>
												<i className="fa-solid fa-clock"></i>
												<span>08:00am - 05:00pm</span>
											</li>
											<li>
												<i className="fa-sharp fa-solid fa-location-pin"></i>
												<span>New Hyde Park, NY 11040</span>
											</li>
										</ul>
									</div>
									<div className="event-card-title">
										<h4><a href="event-details.html">Organizing 2022 city photography new contest</a></h4>
									</div>
								</div>
							</div>
							<div className="event-card">
								<div className="event-card-image">
									<div className="event-card-image-inner">
										<a href="event-details.html"><img src="/assets/image/event/event-3.jpg" className="img-fluid" alt="img-21" /></a>
										<div className="event-card-meta">
											<div className="event-meta-number">
												<span>28</span>
											</div>
											<div className="event-meta-date">
												<span>October 2022</span>
											</div>
										</div>
									</div>
								</div>
								<div className="event-card-content">
									<div className="event-card-info">
										<ul className="list-unstyled">
											<li>
												<i className="fa-solid fa-clock"></i>
												<span>08:00am - 05:00pm</span>
											</li>
											<li>
												<i className="fa-sharp fa-solid fa-location-pin"></i>
												<span>New Hyde Park, NY 11040</span>
											</li>
										</ul>
									</div>
									<div className="event-card-title">
										<h4><a href="event-details.html">Organizing 2022 city photography new contest</a></h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}
export default Section10