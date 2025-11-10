import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

const SkeletonLoader = () => (
    <div className="skeleton-banner-slider">
        <div className="skeleton-banner-image"></div>
        <div className="skeleton-banner-title"></div>
        <div className="skeleton-banner-text"></div>
        <div className="skeleton-banner-button"></div>
    </div>
);

const Section1 = () => {
    const { t } = useTranslation();
    const [posts, setPosts] = useState([]);
    const [cookies] = useCookies(["i18next"]);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_BANNER;
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

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <section className="main-slider">
            {loading ? (
                <SkeletonLoader />
            ) : posts.length > 0 ? (
                <>
                    <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark">
                        {posts.map((item, idx) => (
                            <Carousel.Item key={idx} interval={3000}>
                                <div
                                    className="item-slider-bg"
                                    style={{ backgroundImage: `url("${item?.image}")` }}
                                ></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="slider-content-two">
                                                <h1 className="section-title">
                                                    "{cookies.i18next === "id" ? item?.title : item?.title_en}"
                                                </h1>
                                                <div className="slider-tagline">
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: cookies.i18next === "id" ? item?.content : item?.content_en,
                                                        }}
                                                    />
                                                </div>
                                                {/* <a href="banner/detail" className="btn btn-primary mt-3">
                                                    {t("tombol")}
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    {/* Dot Navigasi */}
                    <div className="text-center carousel-indicators-custom ">
                        {posts.map((_, dotIndex) => (
                            <button
                                key={dotIndex}
                                className={`dot ${index === dotIndex ? "active" : ""}`}
                                onClick={() => setIndex(dotIndex)}
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    margin: "5px",
                                    borderRadius: "50%",
                                    border: "none",
                                    background: index === dotIndex ? "#007bff" : "#ccc",
                                    cursor: "pointer",									
									zIndex: "10",
                                }}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <p className="text-center">No posts available.</p>
            )}
        </section>
    );
};

export default Section1;
