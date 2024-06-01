import React from "react"
import { Link } from "react-router-dom"
const Section11 = () => {
	return (
		<section className="cta-five-section">
			<div className="container">
				<div className="cta-five-card">
					<div className="cta-five-card-icon">
						<i className="flaticon-file"></i>
					</div>
					<div className="cta-five-content">
						<h4>Download Recent Documents</h4>
						<p>There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered in some form, by injected humour words.</p>
					</div>
					<div className="cta-five-button">
						{/* <a href="#" className="btn btn-primary"></a> */}
						<Link to={'download/'} className="btn btn-primary">Download Files</Link>
					</div>
					<div className="cta-five-img">
						<i className="flaticon-file"></i>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Section11