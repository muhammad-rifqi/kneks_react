import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

const Section3 = () => {
    const { t } = useTranslation();
    const [posts, setPosts] = useState([]);
    const [cookies] = useCookies(["i18next"]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = '/detailabouts/1';
                const response = await axios.get(`${url}${endpoint}`);
                setPosts(response.data);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message || "Something went wrong!",
                });
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <section className="about-section">
            {loading ? (
                <p>Loading...</p>
            ) : posts.length > 0 ? (
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="about-image">
                                <div className="about-image-inner img-one">
                                    <img
                                        src="/assets/image/about-1.svg"
                                        className="img-fluid"
                                        alt="img-2"
                                    />
                                </div>

                                <div className="about-image-inner img-two">
                                    <img
                                        src="/assets/image/shapes/about-3.jpg"
                                        className="floated-image"
                                        alt="img-3"
                                    />
                                    <img
                                        src="/assets/image/about-2.svg"
                                        className="img-fluid"
                                        alt="img-4"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="about-inner">
                                <div className="section-title-box">
                                    <div className="section-tagline">{t("pernekalkan")}</div>

                                    <h2 className="section-title">
                                        {cookies.i18next === "id"
                                            ? posts[0]?.title
                                            : posts[0]?.title_en}
                                    </h2>

                                    <p>
                                        <div 
                                            dangerouslySetInnerHTML={{
                                                __html: cookies.i18next === "id" ? posts[0]?.about_content : posts[0]?.about_content_en,
                                            }}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    )
}

export default Section3