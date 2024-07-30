import React from "react"
const Section6 = () => {
	return (
		<section className="mayor-section">
			<div className="container">
				<div className="blog-box">
					<div className="section-title-box text-center">
						{/* <div className="section-tagline">News</div> */}
						<h2 className="section-title">Rekomendasi Agenda Lainnya</h2>
					</div>
				</div>
				<div className="row ">
					<div className="col-lg-4 col-md-6">
						<div className="card">
							<div className="card-body">
								<div className="avatar-text rounded-2 mb-4">
									<i className="fa fa-calendar"></i>
								</div>
								<h6 className="fw-bold mb-3 text-truncate-1-line">Website design and development</h6>
								<p className="text-muted mb-4 text-truncate-3-line">Website design and development - designing and building a website to meet specific requirements, such as the look and feel, functionality, and content.</p>
								<a href="javascript:void(0);" className="d-block fs-10 fw-bold text-dark text-uppercase text-spacing-1">Learn More →</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Section6