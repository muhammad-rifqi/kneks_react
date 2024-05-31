import React from "react"
const Section7 = () => {
	return (
		<section className="portfolio-section">
			<div className="section-title-box text-center">
				<div className="section-tagline">recent work portfolio</div>
				<h2 className="section-title">Explore City Highlights <br />Portfolios</h2>
			</div>
			<div className="portfolio-content conatainer-fluid">
				<div className="portfolio-carousel owl-carousel owl-theme">
					<div className="item">
						<div className="portfolio-card">
							<img src="/assets/image/portfolio/portfolio-1.jpg" className="img-fluid" alt="img-9" />
								<div className="portfolio-card-meta">
									<div className="portfolio-card-text"><a href="portfolio-details.html">Places</a></div>
									<div className="portfolio-card-title"><a href="portfolio-details.html">Broadway Road</a></div>
								</div>
						</div>
					</div>
					<div className="item">
						<div className="portfolio-card">
							<img src="/assets/image/portfolio/portfolio-2.jpg" className="img-fluid" alt="img-10" />
								<div className="portfolio-card-meta">
									<div className="portfolio-card-text"><a href="portfolio-details.html">Intercity</a></div>
									<div className="portfolio-card-title"><a href="portfolio-details.html"> Grand Central Terminal</a></div>
								</div>
						</div>
					</div>
					<div className="item">
						<div className="portfolio-card">
							<img src="/assets/image/portfolio/portfolio-3.jpg" className="img-fluid" alt="img-11" />
								<div className="portfolio-card-meta">
									<div className="portfolio-card-text"><a href="portfolio-details.html">Business</a></div>
									<div className="portfolio-card-title"><a href="portfolio-details.html">Empire State Building</a></div>
								</div>
						</div>
					</div>
					<div className="item">
						<div className="portfolio-card">
							<img src="/assets/image/portfolio/portfolio-4.jpg" className="img-fluid" alt="img-12" />
								<div className="portfolio-card-meta">
									<div className="portfolio-card-text"><a href="portfolio-details.html">Travel</a></div>
									<div className="portfolio-card-title"><a href="portfolio-details.html">Fulton Center</a></div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Section7