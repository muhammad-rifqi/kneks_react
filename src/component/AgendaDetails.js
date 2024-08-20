import React from "react";
import VenoBox from 'venobox';
const AgendaDetails = () => {
    new VenoBox({
        selector: '.my-image-links-foto',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'swing',
        spinColor: '#5A8DEE',
        titlePosition: 'bottom',
        toolsColor: '#ffffff',
        titleattr: 'data-title',
        titleStyle: 'block'
    });
    new VenoBox({
        selector: '.my-image-links-video',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'swing',
        spinColor: '#5A8DEE',
        titlePosition: 'bottom',
        toolsColor: '#ffffff',
        titleattr: 'data-title',
        titleStyle: 'block'
    });
    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Agenda</h3>
                        </div>
                    </div>
                </section>
                <section className="event-details-section-ber">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="event-details-content-box">
                                    <h4>Webinar Keuangan</h4>
                                    <p style={{ textAlign: `justify` }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar">
                                    <div className="sidebar-widget-event-meta-box">
                                        <div className="sidebar-widget-event-meta-details">
                                            <div className="sidebar-widget-event-box">
                                                <h6>Waktu:</h6>
                                                <p className="m-0">8:00 am to 2:00 pm</p>
                                                <p className="m-0">20 October, 2022</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Penyelenggara:</h6>
                                                <p>Kementerian Keuangan</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Ketegori:</h6>
                                                <span>Webinar</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="department-all">
                    <div className="container">

                        <div className="row row-gutter-y-30 d-flex justify-content-center">

                            <div className="col-lg-12">
                                <div className="row ">
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="team-card-x">
                                            {/* <div className="team-card-img-x">
                                                <img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" />
                                                
                                                </div> */}
                                            <div className="team-card-content-x">
                                                <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <p>21 Mei 2024</p>
                                                    <a href="#t" data-bs-toggle="tooltip" title="download">
                                                        <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="team-card-x">
                                            {/* <div className="team-card-img-x">
                                                <img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" />
                                                
                                                </div> */}
                                            <div className="team-card-content-x">
                                                <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <p>21 Mei 2024</p>
                                                    <a href="#t" data-bs-toggle="tooltip" title="download">
                                                        <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="team-card-x">
                                            {/* <div className="team-card-img-x">
                                                <img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" />
                                                
                                                </div> */}
                                            <div className="team-card-content-x">
                                                <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <p>21 Mei 2024</p>
                                                    <a href="#t" data-bs-toggle="tooltip" title="download">
                                                        <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="team-card-x">
                                            {/* <div className="team-card-img-x">
                                                <img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" />
                                                
                                                </div> */}
                                            <div className="team-card-content-x">
                                                <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <p>21 Mei 2024</p>
                                                    <a href="#t" data-bs-toggle="tooltip" title="download">
                                                        <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row row-gutter-y-30 d-flex justify-content-center pt-5">
                                    <div className="col-md-3 col-lg-3">
                                        <a href={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} className="my-image-links-foto" data-gall="gallery01">
                                            <div className="card-box-b card-shadow news-box">
                                                <div className="img-box-b " data-gall="gallery01">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} alt="imgNews" className="img-b img-fluid" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-lg-3">
                                        <a href={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} className="my-image-links-foto" data-gall="gallery01">
                                            <div className="card-box-b card-shadow news-box">
                                                <div className="img-box-b " data-gall="gallery01">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} alt="imgNews" className="img-b img-fluid" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-lg-3">
                                        <a href={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} className="my-image-links-foto" data-gall="gallery01">
                                            <div className="card-box-b card-shadow news-box">
                                                <div className="img-box-b " data-gall="gallery01">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} alt="imgNews" className="img-b img-fluid" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-lg-3">
                                        <a href={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} className="my-image-links-foto" data-gall="gallery01">
                                            <div className="card-box-b card-shadow news-box">
                                                <div className="img-box-b " data-gall="gallery01">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} alt="imgNews" className="img-b img-fluid" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <section className="video-section-x">
                                        <div className="row row-gutter-y-40">
                                            <div className="col-md-3 col-lg-3">
                                                <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links-video" data-autoplay="true" data-vbtype="video">
                                                    <div className="card-box-b card-shadow news-box">
                                                        <div className="img-box-bc">
                                                            <img src="/assets/image/berita2.jpeg" alt="imgNews" className="img-b img-fluid" />
                                                            <div className="video-btn">
                                                                <div className="play-icon" >
                                                                    <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-md-3 col-lg-3">
                                                <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links-video" data-autoplay="true" data-vbtype="video">
                                                    <div className="card-box-b card-shadow news-box">
                                                        <div className="img-box-bc">
                                                            <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                                            <div className="video-btn">
                                                                <div className="play-icon" >
                                                                    <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-md-3 col-lg-3">
                                                <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links-video" data-autoplay="true" data-vbtype="video">
                                                    <div className="card-box-b card-shadow news-box">
                                                        <div className="img-box-bc">
                                                            <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                                            <div className="video-btn">
                                                                <div className="play-icon" >
                                                                    <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-md-3 col-lg-3">
                                                <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links-video" data-autoplay="true" data-vbtype="video">
                                                    <div className="card-box-b card-shadow news-box">
                                                        <div className="img-box-bc">
                                                            <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                                            <div className="video-btn">
                                                                <div className="play-icon" >
                                                                    <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </a>
                                            </div>

                                        </div>
                                </section>
                                <section className="department-all">
				<div className="container">
					<div className="blog-box-x">
						<div className="section-title-box text-center">
							<h2 className="section-title">Rekomendasi Agenda Lainnya</h2>
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
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AgendaDetails