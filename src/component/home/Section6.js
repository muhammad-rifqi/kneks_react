import React from "react"
const Section6 = () => {
	return (
		<section className="mayor-section">
			<div className="container">
				<div className="blog-box">
					<div className="section-title-box text-center">
						<h2 className="section-title">Rekomendasi Agenda Lainnya</h2>
					</div>
				</div>
				<div className="row ">
					<div className="col-lg-4 col-md-6">
						<div className="card shadow p-3 mb-5 rounded" style={{maxWidth: `18rem`, background:`#146AA4`, color:`#ffffff`}}>
							<div className="card-header" style={{borderBottom: `1px solid #ffffff`, fontSize:`18px`, paddingTop:`10px`,background:`#146AA4`}}>Webinar Keuangan</div>
							<div className="card-body">
								<p className="card-text">24/05/2024 - 24/05/2024</p>
								<p className="card-text">12:00 - 14:00 WIP</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

export default Section6