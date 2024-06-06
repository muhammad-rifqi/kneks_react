import React from "react"
const Section7 = () => {
	return (
		<section className="portfolio-section">
			{/* <div className="section-title-box text-center">
				<div className="section-tagline">recent work portfolio</div>
				<h2 className="section-title">BERITA DAN KEGIATAN</h2>
			</div> */}

			<div className="container pb-5">
				<div className="blog-box">
					<div className="section-title-box text-center">
						<div className="section-tagline">News</div>
						<h2 className="section-title">BERITA DAN KEGIATAN</h2>
					</div>
				</div>
				<div className="row row-gutter-y-155">
					<div className="col-lg-6">
						<div className="blog-card">
							<div className="blog-card-image">
								<img src="/assets/image/blog/blog-1.jpg" className="img-fluid" alt="img-22" />
								<a href="news-details.html"></a>
							</div>
							<div className="blog-card-date">
								<a href="news-details.html">28SEP</a>
							</div>
							<div className="blog-card-content">
								<div className="blog-card-meta">
									<span className="author">
										by<a href="news-details.html">Admin</a>
									</span>
									<span className="comment">
										<a href="news-details.html">02 Comments</a>
									</span>
								</div>
								<h4><a href="news-details.html">Supporting local business to bounce back</a></h4>
								<p>Tellus amet vel nisi, vel felis morbi sit et. Risus, pulvinar ultricie</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="blog-card">
							<div className="blog-card-image">
								<img src="/assets/image/blog/blog-1.jpg" className="img-fluid" alt="img-22" />
								<a href="news-details.html"></a>
							</div>
							<div className="blog-card-date">
								<a href="news-details.html">28SEP</a>
							</div>
							<div className="blog-card-content">
								<div className="blog-card-meta">
									<span className="author">
										by<a href="news-details.html">Admin</a>
									</span>
									<span className="comment">
										<a href="news-details.html">02 Comments</a>
									</span>
								</div>
								<h4><a href="news-details.html">Supporting local business to bounce back</a></h4>
								<p>Tellus amet vel nisi, vel felis morbi sit et. Risus, pulvinar ultricie</p>
							</div>
						</div>
					</div>
				</div>
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