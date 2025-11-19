import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
// import { useCookies } from 'react-cookie';
// import { InstagramEmbed } from 'react-social-media-embed';


const Section11 = () => {
	// const [cookies] = useCookies(['i18next']);
	const { t } = useTranslation()
	const [posts, setPosts] = useState([]);
	const [posts1, setPosts1] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			try {
				const url = process.env.REACT_APP_API_URL;

				const response = await axios.get(`${url}/institutions`);
				setPosts(response.data);

			} catch (err) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err.message,
				});
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	useEffect(() => {
		const fetchPosts1 = async () => {
			setLoading(true);
			try {
				const url = process.env.REACT_APP_API_URL;
				const response1 = await axios.get(`${url}/postsosmedfe`);
				setPosts1(response1.data);

			} catch (err) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: err.message,
				});
			} finally {
				setLoading(false);
			}
		};

		fetchPosts1();
	}, []);

	useEffect(() => {
		if (window.instgrm) {
			window.instgrm.Embeds.process();
		}
	}, [posts1]);

	if (loading) return <p>Loading...</p>

	return (
		<>
			{/* <section className="sm-section funfact-section-post"> */}
			<section className="mayor-section">
				<div className="container">
					<div className="sm-box">
						<div className="section-title-box text-center" data-aos="fade-up">
							<div className="section-tagline-b">{t('sosialMedia')}</div>
							<h2 className="section-title text-dark">{t('instagram')}</h2>
						</div>
					</div>
					<div className="row m-0" data-aos="fade-down" >
						{posts1 && posts1.length > 0 ? (
							<>
								{posts1.slice(0, 3).map((item1, indexs) => (
									<div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={item1.id || indexs}>
										<blockquote className="instagram-media"
											data-instgrm-permalink={item1?.link_post || 'instagram'}
											data-instgrm-version="14"
											style={{ background: "#FFF", border: "0", margin: "0 auto", maxWidth: "540px", width: "100%" }}>
										</blockquote>
									</div >
								))}
							</>
						) : (
							<div className="col-lg-12 col-md-12" style={{ paddingBottom: '100px' }}>
								<p className="text-center text-danger">No posts available</p>
							</div>
						)}


					</div>

					<div className="sm-box" style={{ marginTop: `100px` }}>
						<div className="section-title-box text-center" data-aos="fade-up">

							<h2 className="section-title text-dark">{t('instansi')}</h2>
							<div className="section-text-b "><p className="text-dark ">
								{t('instansiIsi')} <br /> {t('instansiIsi2')}	</p>
							</div>
						</div>
					</div>
				</div >
			</section >

			<section className="funfact-section-instan">
				<div className="container">
					<div className="row">
						{posts && posts.length > 0 ? (
							<>
								{/* Render 12 item pertama dengan layout col-6 col-md-4 col-lg-2 */}
								{posts.slice(0, 12).map((item, index) => (
									<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up" key={item.id || index}>
										<a rel="noreferrer" href={item?.link} target="_blank" className="component-service d-block">
											<div className="service-image">
												<img src={item?.logo} className="img-fluid" alt={item?.title || "service"} />
											</div>
										</a>
									</div>
								))}

								{/* Render item ke-13 hingga ke-16 dengan layout col-6 col-md-4 col-lg-3 */}
								{posts.length > 12 && posts.slice(12, 16).map((item, index) => (
									<div className="col-6 col-md-4 col-lg-3 pb-3" data-aos="fade-up" key={item.id || index + 12}>
										<a rel="noreferrer" href={item?.link} target="_blank" className="component-service d-block">
											<div className="service-image">
												<img src={item?.logo} className="img-fluid" alt={item?.title || "service"} />
											</div>
										</a>
									</div>
								))}
							</>
						) : (
							<div className="col-lg-12 col-md-12" style={{ paddingBottom: '100px' }}>
								<p className="text-center text-danger">No posts available</p>
							</div>
						)}
						{/* <div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.kemenkeu.go.id/`} target="_blank" className="component-service d-block ">
								<div className="service-image ">
									<img src="assets/image/kemenkeu.png" className="img-fluid " alt="kemenkeu" />
								</div>
							</a>
						</div> */}
						{/* <div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.ekon.go.id/`} target="_blank" className="component-service  d-block">
								<div className="service-image">
									<img src="assets/image/instansi2.png" className="img-fluid" alt="kementriang bidang perekonomian republik indonesia" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.kemenkopmk.go.id/`} target="_blank" className="component-service  d-block">
								<div className="service-image">
									<img src="assets/image/instansi32.png" className="img-fluid" alt="kemenko pmk" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.maritim.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi41.png" className="img-fluid" alt="maritim" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.kemenag.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi5.png" className="img-fluid" alt="kemenag" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.kemendag.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi7.png" className="img-fluid" alt="kemendag" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://bappenas.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi8.png" className="img-fluid" alt="bappenas" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://bumn.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi9.png" className="img-fluid" alt="bumn" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://kemenkopukm.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi10.png" className="img-fluid" alt="kemenkopukm" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://kemenparekraf.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi11.png" className="img-fluid" alt="kemenparekraf" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://mui.or.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi15.png" className="img-fluid" alt="mui" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-2 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://kadin.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi17.png" className="img-fluid" alt="kadin" />
								</div>
							</a>
						</div> */}

						{/* <div className="col-6 col-md-4 col-lg-3 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://bi.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi13.png" className="img-fluid" alt="bi" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-3 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://lps.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi14.png" className="img-fluid" alt="lps" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-3 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://www.kemenperin.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi6.png" className="img-fluid" alt="kemenperin" />
								</div>
							</a>
						</div>
						<div className="col-6 col-md-4 col-lg-3 pb-3" data-aos="fade-up">
							<a rel="noreferrer" href={`https://ojk.go.id/`} target="_blank" className="component-service d-block">
								<div className="service-image">
									<img src="assets/image/instansi12.png" className="img-fluid" alt="ojk" />
								</div>
							</a>
						</div> */}
					</div>
				</div>
			</section>

		</>
	)
}
export default Section11