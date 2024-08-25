import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../../src/component/skeleton/CardBerita";
import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
const Opini = () => {
    const [visible, setVisible] = useState(4)

    const [loading, setLoading] = useState(true);

    const [loadingMore, setLoadingMore] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Function to fetch posts
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_POST;
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

    const showMore = () => {
        setLoadingMore(true);

        setTimeout(() => {
            setVisible((preValue) => preValue + 3);
            setLoadingMore(false);
        }, 2000);
    }
    const convertToSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };
    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Opini</h3>
                        </div>
                    </div>
                </section>
                <section className="event-three-section">
                    <div className="event-section-outer">
                        <div className="container">
                            <div className="row row-gutter-y-30">
                                {loading ? (
                                    Array(visible).fill().map((_, index) => (
                                        <div className="col-12 col-lg-12 col-xl-12" key={index}>
                                            <SkeletonCardBerita />
                                        </div>
                                    ))
                                ) : (
                                    posts.slice(0, visible).map((item) => (
                                        <div className="col-12 col-lg-12 col-xl-12 " key={item.id}>
                                            <div className="event-card">
                                                <div className="event-card-image">
                                                    <div className="event-card-image-inner-x">
                                                        <a href={`/opini/${convertToSlug(item.title)}`}><img src="/assets/image/berita.jpg" className="img-fluid" alt={item.title} /></a>

                                                    </div>
                                                </div>
                                                <div className="event-card-content align-self-center">
                                                    <div className="event-card-info-x pb-3">
                                                        <ul className="list-unstyled" style={{ color: `#F2994A` }}>
                                                            <li>
                                                                <span>#BERITABARU</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="event-card-title pb-4">
                                                        <h4><a href={`/opini/${convertToSlug(item.title)}`}>{item.title}</a></h4>
                                                    </div>
                                                    <div className="event-card-info">
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <span>{dayjs(item.news_datetime).format('DD MMMM YYYY')}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                                {loadingMore && (
                                    Array(3).fill().map((_, index) => (
                                        <div className="col-12 col-lg-12 col-xl-12" key={index + visible}>
                                            <SkeletonCardBerita />
                                        </div>
                                    ))
                                )}

                                {visible < posts.length && (
                                    <div className="col-12 pt-5">
                                        <div className="block-box load-more-btn">
                                            <div className="item-btn" onClick={showMore}>
                                                <i className="fa-solid fa-refresh"></i>Load More
                                            </div>
                                        </div>
                                    </div>
                                )}



                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Opini