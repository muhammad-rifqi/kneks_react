import React, { useState, useEffect } from "react";

import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';

import 'dayjs/locale/id';
import 'dayjs/locale/en';

import { useCookies } from 'react-cookie';

const Section7 = () => {

    const [cookies] = useCookies(['i18next']);
    const formatDate = (date, locale = 'en') => {
        dayjs.locale(locale); // Set the locale dynamically
        return dayjs(date).format('DD MMMM YYYY'); // Format the date
    };

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            // setLoading(true);
            try {
               const url = process.env.REACT_APP_API_URL;
                const endpoint = '/hotissue';
                const response = await axios.get(`${url}${endpoint}`);
                setPosts(response.data);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,

                });
            } finally {
                // setLoading(false);
            }
        };

        fetchPosts();


    }, []);

    useEffect(() => {
        if (posts.length > 0) {
            if (document.querySelector('.swiper-berita')) {
                const swipers = new Swiper('.swiper-berita', {
                    // pengaturan Swiper
                    loop: false,

                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    // autoplay: {
                    // 	delay: 2500,
                    // },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        2048: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    },
                });
                // Cleanup function to destroy Swiper instance
                return () => {
                    if (swipers) {
                        swipers.destroy(true, true);
                    }
                };
            }
        }

    }, [posts]);

    const convertToSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };


    return (
        <section className="portfolio-section ">

            <div className="portfolio-content" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                <div className="container">
                    <div className="row m-0">
                        {posts.length > 0 ? (
                            <div className="swiper swiper-berita">
                                <div className="swiper-wrapper">
                                    {posts.slice(3, 25).map((item) => (
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 swiper-slide" key={item.id}>
                                            <div className="berita-card-kdeks d-flex flex-column">
                                                <div className="berita-card-imgbox-berita">
                                                    <a href={`/berita-terkait/${item.id}/${convertToSlug(item.title)}`}>
                                                        <img
                                                            src={item?.image === "" ? '/assets/image/foto-beritas.png' : item?.image}
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                e.target.src = `/assets/image/foto-beritas.png`;
                                                            }}
                                                            className="" alt={item.title} />
                                                    </a>
                                                </div>

                                                <div className="berita-content-direktorat-x flex-grow-1 d-flex flex-column justify-content-between">
                                                    <div>
                                                        <div className="direktorat-tag-home mb-2">
                                                            {item?.tags?.split(",").map((tag, index) => (
                                                                <span key={index}>{tag ? '#' + tag : ''} </span>
                                                            ))}
                                                        </div>
                                                        <div className="event-card-title pb-2">
                                                            <h4 className="mb-0">
                                                                <a href={`/berita-terkait/${item.id}/${convertToSlug(item.title)}`}>{cookies.i18next === 'id' ? item.title : item.title_en}</a>
                                                            </h4>
                                                        </div>
                                                        <div className="event-card-info-direktorat mt-auto">
                                                            <span>{cookies.i18next === 'id' ? formatDate(item?.hot_issue_datetime, 'id') : formatDate(item?.hot_issue_datetime, 'en')}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="swiper-button-prev">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </div>
                                <div className="swiper-button-next">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center">No posts available.</p>
                        )}
                    </div >
                </div>
            </div>
        </section>
    )
}
export default Section7