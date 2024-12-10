import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';


// import DatePicker from "react-multi-date-picker"
// import transition from "react-element-popper/animations/transition"
const SiaranPers = () => {


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
                const endpoint = process.env.REACT_APP_API_PERS;
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

    // const [selectedDates, setSelectedDates] = useState();


    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Siaran Pers</h3>
                        </div>
                    </div>
                </section>
                <section className="berita-section">
                    <div className="container">
                        {/* <div className="row row-gutter-30">
                            <div className="col-lg-12 col-xl-12 d-flex justify-content-end">
                                <div className="sidebar-form-content">
                                    <div className="sidebar__item sidebar__item--search">
                                        <form action="#" className="sidebar__search">
                                            <label for="search" className="sr-only">Filter Tanggal</label>
                                            <DatePicker
                                                value={selectedDates}
                                                onChange={setSelectedDates}
                                                format="DD-MM-YYYY"
                                                placeholder="Filter Tanggal"
                                                animations={[
                                                    transition({
                                                        from: 35,
                                                        transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                                    }),
                                                ]}
                                            />
                                            <button type="submit" aria-label="search submit" className="thm-btn">
                                                <i className="fa-solid fa-calendar-days"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="row row-gutter-30">

                            {loading ? (
                                Array(visible).fill().map((_, index) => (
                                    <div className="col-lg-4 col-xl-4" key={index}>
                                        <SkeletonCardBerita />
                                    </div>
                                ))
                            ) : (
                                posts.slice(0, visible).map((item) => (
                                    <div className="col-lg-4 col-xl-4" key={item.id}>
                                        <div className="berita-card">
                                            <div className="berita-card-imgbox ">
                                                <a href={`/siaran-pers/${convertToSlug(item.title)}`}>
                                                    {/* <img src={`${process.env.REACT_APP_API_NEWS}` + item.image} className="img-fluid" alt={item.title} /> */}
                                                    <img src={item?.image === "" ? '/assets/image/foto-beritas.png' : item?.image} className="img-fluid" alt={item.title} />
                                                </a>
                                            </div>
                                            <div className="berita-content ">
                                                <div className="event-card-info-x " style={{ color: `#F2994A` }}>

                                                    <span>#BERITABARU</span>
                                                </div>
                                                <div className="event-card-title pb-4">
                                                    <h4>
                                                        <a href={`/siaran-pers/${convertToSlug(item.title)}`}>{item.title}</a>
                                                    </h4>
                                                </div>
                                                <div className="event-card-info">
                                                    <span>{dayjs(item.news_datetime).format('DD MMMM YYYY')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}

                            {loadingMore && (
                                Array(3).fill().map((_, index) => (
                                    <div className="col-lg-4 col-xl-4" key={index + visible}>
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


                        </div >
                    </div >
                </section >
            </div >
        </>
    )
}

export default SiaranPers