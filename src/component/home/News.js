import React from "react"
const News = () => {
	return (
		<section className="news-section">
			{/* <div className="section-title-box text-center">
				<div className="section-tagline">recent work portfolio</div>
				<h2 className="section-title">BERITA DAN KEGIATAN</h2>
			</div> */}

			<div className="container">
				<div className="blog-box">
					<div className="section-title-box text-center">
						<div className="section-tagline">News</div>
						<h2 className="section-title">BERITA DAN KEGIATAN</h2>
					</div>
				</div>
				<div className="row ">
					<div className="col-md-6 col-lg-6">
						<div className="card-box-b card-shadow news-box">
							<div className="img-box-b">
								<img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
							</div>
							<div className="card-overlay">
								<div className="card-header-b">
									<div className="card-category-b">
										<a href="#" className="category-b">Berita Baru</a>
									</div>
									<div className="card-title-b">
										<h2 className="title-2">
											<a href="blog-single.html">Travel is comming
												<br /> new</a>
										</h2>
									</div>
									<div className="card-date">
										<span className="date-b">18 Sep. 2017</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-6">
						<div className="card-box-b card-shadow news-box">
							<div className="img-box-b">
								<img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
							</div>
							<div className="card-overlay">
								<div className="card-header-b">
									<div className="card-category-b">
										<a href="#" className="category-b">Berita Baru</a>
									</div>
									<div className="card-title-b">
										<h2 className="title-2">
											<a href="blog-single.html">Travel is comming
												<br /> new</a>
										</h2>
									</div>
									<div className="card-date">
										<span className="date-b">18 Sep. 2017</span>
									</div>
								</div>
							</div>
						</div>
					</div>/
				</div>
			</div>
		</section>
	)
}
export default News