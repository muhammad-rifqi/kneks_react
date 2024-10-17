import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
const GaleriFoto = () => {
    const [visible, setVisible] = useState(9)

    const [loading, setLoading] = useState(true);

    const [loadingMore, setLoadingMore] = useState(false);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        // Function to fetch posts
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_PHOTO;
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
        }, 2000); // Simulate network delay
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
                            <h3>Galeri Foto</h3>
                        </div>
                    </div>
                </section>
                <section className="foto-section">
                    <div className="container">
                        <div className="row row-gutter-y-40">
                            {loading ? (
                                Array(visible).fill().map((_, index) => (
                                    <div className="col-md-4 col-lg-4" key={index}>
                                        <SkeletonCardBerita />
                                    </div>
                                ))
                            ) : (
                                posts.slice(0, visible).map((item) => (
                                    <div className="col-md-4 col-lg-4" key={item.id}>
                                        <a href={`/galeri-foto/${convertToSlug(item.title)}`}>
                                            <div className="card-box-b card-shadow news-box">
                                                <div className="img-box-b ">
                                                    <img src={`${process.env.REACT_APP_API_IMAGE}` + item.photo} className="img-fluid img-b" alt={item.title} />
                                                </div>
                                                <div className="card-overlay">
                                                    <div className="card-header-b">

                                                        <div className="card-title-b">
                                                            <h2 className="title-2">
                                                                {item.title}{item.is_publish}
                                                            </h2>
                                                        </div>
                                                        <div className="card-date">
                                                            <span>{dayjs(item.news_datetime).format('DD MMMM YYYY')}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            )}

                            {loadingMore && (
                                Array(3).fill().map((_, index) => (
                                    <div className="col-md-4 col-lg-4" key={index + visible}>
                                        <SkeletonCardBerita />
                                    </div>
                                ))
                            )}

                            {visible < posts.length && (
                                <div className="col-12 pt-5">
                                    <div className="block-box load-more-btn">
                                        <a className="item-btn" onClick={showMore} href="#t" rel="noreferrer">
                                            <i className="fa-solid fa-refresh"></i>Load More
                                        </a>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </section >

            </div >
        </>
    )
}

export default GaleriFoto