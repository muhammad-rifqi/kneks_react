import React from "react"
const Section11 = () => {
	return (
		<section className="cta-two-section">
			<div className="container">
				<div className="cta-two-section-inner">
					<div className="row">
						<div className="col-xl-5">
							<div className="cta-two-title">
								<div className="cta-two-card-icon">
									<i className="flaticon-envelope-2"></i>
								</div>
								<div className="cta-two-card-content">
									<p>Stay Connected</p>
									<h3>Join Our Newsletter</h3>
								</div>
							</div>
						</div>
						<div className="col-xl-7">
							<form action="/assets/inc/sendemail.php" className="cta-two-form" method="post">
								<div className="cta-two-form-group">
									<input type="email" id="email" className="input-text" placeholder="Email address" name="email" required />
								</div>
								<button className="btn btn-primary">Subscribe</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Section11