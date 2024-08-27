import React, { useState, useEffect, useLayoutEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';

import VenoBox from 'venobox';
const GaleriVideo = () => {
    const [visible, setVisible] = useState(9)

    const [loading, setLoading] = useState(true);

    const [loadingMore, setLoadingMore] = useState(false);
    const [posts, setPosts] = useState([]);


    useLayoutEffect(() => {

        new VenoBox({
            selector: '.my-image-links',
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


    }, []);


    useEffect(() => {

        // Function to fetch posts
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_VIDEO;
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



    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Galeri Video</h3>
                        </div>
                    </div>
                </section>
                <section className="video-section">
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
                                    <div className="col-md-4 col-lg-4" key={item.id} >
                                        <a href={`https://img.youtube.com/vi/m7QQctvbdEc/` +
                                            item.video
                                        } className="my-image-links" data-autoplay="true" data-vbtype="video">
                                            <div className="card-box-b card-shadow news-box">
                                                <div className="img-box-bc">
                                                    <img src="/assets/image/berita2.jpeg" alt="imgNews" className="img-b img-fluid" />
                                                    <div className="video-btn">
                                                        <div className="play-icon" >
                                                            <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-overlay ">
                                                    <div className="card-header-b ">
                                                        <div className="row d-flex align-items-center" >
                                                            <div className="col-6">
                                                                <div className="card-title-b">
                                                                    <h2 className="title-2-x text-white">
                                                                        {item.title}
                                                                    </h2>
                                                                </div>

                                                                <div className="card-date">
                                                                    <span className="date-b">{dayjs(item.news_datetime).format('DD MMMM YYYY')}</span>
                                                                </div>
                                                            </div>
                                                            <div className="col-6 text-end">
                                                                <span className="date-b bg-dark p-1">{item.duration}</span>
                                                            </div>
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

export default GaleriVideo