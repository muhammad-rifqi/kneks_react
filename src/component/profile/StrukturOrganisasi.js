import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from "axios";
import Swal from "sweetalert2";

const StrukturOrganisasi = () => {
	const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

	useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_STUKTUR_ORGANISASI;
                const response = await axios.get(`${url}${endpoint}`);
                setPosts(response.data);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchPosts(); // Call fetchPosts function when component mounts

    }, []);

	const convertToSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    };

	return (
		<>
			<div className="page-wrapper">
				<section className="page-banner">
					<div className="container">
						<div className="page-banner-title">
							<h3>Struktur Organisasi</h3>
						</div>
					</div>
				</section>
				<section className="about-one-section funfact-section-struktur">
					<div className="container">
						<div className="row row-gutter-y-40 text-center">
							<div className="col-lg-12 col-xl-12">
								<div className="about-one-image">
									<img src="assets/image/struktur1.svg" alt="img-59" className="img-fluid" />
								</div>
							</div>
						</div>
						<div className="row row-gutter-y-30 d-flex justify-content-center">
							<div className="blog-box-manajemen">
								<div className="section-title-box text-center">
									<h2 className="section-title">Manajemen Eksekutif</h2>
								</div>
							</div>
							{loading ? (
                                Array(4).fill().map((_, index) => (
                                    <div className="col-12 col-md-6 col-xl-3" key={index}>
                                        <SkeletonCardBerita />
                                    </div>
                                ))
                            ) : (
                                posts.slice(0,6).map((item) => (
								    <div className="col-12 col-md-6 col-xl-3" key={item.id}>
									    <div className="team-card">
										    <div className="team-card-img">
											    <a href="/struktur-organisasi/detail"><img src={item.photo ? `${process.env.REACT_APP_API_IMAGE}${item.photo}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid" alt="img-40" /></a>
											    <div className="team-card-icon">
												    {/* Social Media Icons */}
											    </div>
										    </div>
										    <div className="team-card-content">
											    <h4><a href="/struktur-organisasi/detail">{item.name}</a></h4>
											    <p>{item.position}</p>
										    </div>
									    </div>
								    </div>
							    ))
                            )}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default StrukturOrganisasi;
