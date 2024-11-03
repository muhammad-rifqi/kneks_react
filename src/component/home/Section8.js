import React from "react"
import { useTranslation } from 'react-i18next';
const Section8 = () => {
	const { t } = useTranslation();
	return (
		<section className="mayor-section">
			<div className="container">
				<div className="blog-box-x">
					<div className="section-title-box text-center">
						<h2 className="section-title">{t('rekomendasi')}</h2>
					</div>
				</div>
				<div className="row ">
					<div className="col-lg-3 col-md-3">
						<a href="/agenda/detail">
							<div className="card shadow p-3 mb-5 rounded" style={{ background: `#146AA4`, color: `#ffffff` }}>
								<div className="card-header" style={{ borderBottom: `1px solid #ffffff`, fontSize: `18px`, paddingBottom: `15px`, background: `#146AA4` }}>Webinar Keuangan</div>
								<div className="card-body">
									<div className="card-text">24/05/2024 - 24/05/2024</div>
									<div className="card-text">12:00 - 14:00 WIP</div>

								</div>
								<div className="card-footer text-end" style={{ borderTop: `none`, background: `#146AA4`, color: `#ffffff` }}>
									<i className="fa-solid fa-calendar "></i>
								</div>
							</div>
						</a>
					</div>
					<div className="col-lg-3 col-md-3">
						<a href="/agenda/detail">
							<div className="card shadow p-3 mb-5 rounded" style={{ background: `#146AA4`, color: `#ffffff` }}>
								<div className="card-header" style={{ borderBottom: `1px solid #ffffff`, fontSize: `18px`, paddingBottom: `15px`, background: `#146AA4` }}>Webinar Keuangan</div>
								<div className="card-body">
									<div className="card-text">24/05/2024 - 24/05/2024</div>
									<div className="card-text">12:00 - 14:00 WIP</div>

								</div>
								<div className="card-footer text-end" style={{ borderTop: `none`, background: `#146AA4`, color: `#ffffff` }}>
									<i className="fa-solid fa-calendar "></i>
								</div>
							</div>
						</a>
					</div>
					<div className="col-lg-3 col-md-3">
						<a href="/agenda/detail">
							<div className="card shadow p-3 mb-5 rounded" style={{ background: `#146AA4`, color: `#ffffff` }}>
								<div className="card-header" style={{ borderBottom: `1px solid #ffffff`, fontSize: `18px`, paddingBottom: `15px`, background: `#146AA4` }}>Webinar Keuangan</div>
								<div className="card-body">
									<div className="card-text">24/05/2024 - 24/05/2024</div>
									<div className="card-text">12:00 - 14:00 WIP</div>

								</div>
								<div className="card-footer text-end" style={{ borderTop: `none`, background: `#146AA4`, color: `#ffffff` }}>
									<i className="fa-solid fa-calendar "></i>
								</div>
							</div>
						</a>
					</div>
					<div className="col-lg-3 col-md-3">
						<a href="/agenda/detail">
							<div className="card shadow p-3 mb-5 rounded" style={{ background: `#146AA4`, color: `#ffffff` }}>
								<div className="card-header" style={{ borderBottom: `1px solid #ffffff`, fontSize: `18px`, paddingBottom: `15px`, background: `#146AA4` }}>Webinar Keuangan</div>
								<div className="card-body">
									<div className="card-text">24/05/2024 - 24/05/2024</div>
									<div className="card-text">12:00 - 14:00 WIP</div>

								</div>
								<div className="card-footer text-end" style={{ borderTop: `none`, background: `#146AA4`, color: `#ffffff` }}>
									<i className="fa-solid fa-calendar "></i>
								</div>
							</div>
						</a>
					</div>


				</div>

			</div>
		</section >
	)
}
export default Section8