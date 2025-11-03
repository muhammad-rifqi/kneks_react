import React from "react"
const Section11 = () => {
	return (
		<section className="blog-section">
			<div className="container">
				<div className="blog-box">
					<div className="section-title-box text-center">
						<div className="section-tagline">DIRECT FROM THE BLOG POSTS</div>
						<h2 className="section-title">Checkout Latest News <br />and Articles</h2>
					</div>
				</div>
				<div className="row row-gutter-y-155">
					<div className="col-lg-4">
						<div className="blog-card">
							<div className="blog-card-image">
								<img src="/assets/image/blog/blog-1.jpg" className="img-fluid" alt="img-22" />
									<a href={'detail/'}>Detail</a>
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
					<div className="col-lg-4">
						<div className="blog-card">
							<div className="blog-card-image">
								<img src="/assets/image/blog/blog-2.jpg" className="img-fluid" alt="img-23" />
									<a href={'detail/'}>Detail</a>
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
								<h4><a href="news-details.html">Resilience for TownGov Green Project</a></h4>
								<p>Tellus amet vel nisi, vel felis morbi sit et. Risus, pulvinar ultricie</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="blog-card">
							<div className="blog-card-image">
								<img src="/assets/image/blog/blog-3.jpg" className="img-fluid" alt="img-24" />
									<a href={'detail/'}>Detail</a>
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
								<h4><a href="news-details.html">Save soil and save world project in 2022</a></h4>
								<p>Tellus amet vel nisi, vel felis morbi sit et. Risus, pulvinar ultricie</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Section11