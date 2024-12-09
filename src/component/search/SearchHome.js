import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import VenoBox from 'venobox';
const SearchHome = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");

    const [posts, setPosts] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [videos, setVideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const postsPerPage = 9;
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const convertToSlug = (title) => {
        if (!title) return "";
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    };

    useEffect(() => {

        // Initialize VenoBox after data is fetched and component is rendered
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
            titleStyle: 'block',
        });

        return () => {
            // Manually reset the Venobox initialization
            const elements = document.querySelectorAll(".my-image-links");
            elements.forEach((el) => {
                el.removeAttribute("data-venobox-initialized");
            });
        };

    }, [videos]);

    useEffect(() => {
        const fetchSearch = async () => {
            setLoading(true);
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_SEARCH_POST;
                const response = await axios.get(
                    `${url}${endpoint}?cari=${query}`
                );
                setPosts(response.data.news);
                setPhoto(response.data.photos);
                setVideos(response.data.videos);

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

        if (query) {
            fetchSearch();
        }
    }, [query]);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const generatePaginationItems = () => {
        const paginationItems = [];
        const maxPageNumbersToShow = 10;

        let startPage, endPage;

        if (totalPages <= maxPageNumbersToShow) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = maxPageNumbersToShow;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - maxPageNumbersToShow + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationItems.push(i);
        }

        if (startPage > 1) {
            paginationItems.unshift("...");
        }
        if (endPage < totalPages) {
            paginationItems.push("...");
        }

        return paginationItems;
    };

    return (
        <div className='page-wrapper'>
            <section className='berita-section'>
                <div className='container'>
                    <div className='row'>
                        {/* Display search result information */}
                        <div className='col-12 mb-4'>
                            <h5>
                                {loading
                                    ? "Memuat hasil pencarian..."
                                    : `Menampilkan ${posts.length} hasil pencarian untuk "${query}"`}
                            </h5>
                        </div>
                    </div>
                    <div className='row row-gutter-30'>

                        <h2>Berita</h2>
                        {loading
                            ? Array(postsPerPage)
                                .fill()
                                .map((_, index) => (
                                    <div
                                        className='col-lg-4 col-md-6'
                                        key={index}>
                                        <SkeletonCardBerita />
                                    </div>
                                ))
                            : currentPosts.map((item) => (
                                <div
                                    className='col-lg-4 col-md-6'
                                    key={item.id}>
                                    <div className='berita-card'>
                                        <div className='berita-card-imgbox'>
                                            <a
                                                href={`/berita-kegiatan/${item.id}/${convertToSlug(
                                                    item.title
                                                )}`}>
                                                <img
                                                    src={
                                                        item?.image
                                                    }
                                                    className='img-fluid'
                                                    alt={item.title}
                                                />
                                            </a>
                                        </div>
                                        <div className='berita-content'>
                                            <div
                                                className='event-card-info-x'
                                                style={{ color: `#F2994A` }}>
                                                <span>#BERITABARU</span>
                                            </div>
                                            <div className='event-card-title pb-4'>
                                                <h4>
                                                    <a
                                                        href={`/berita-kegiatan/${item.id}/${convertToSlug(
                                                            item.title
                                                        )}`}>
                                                        {item.title}
                                                    </a>
                                                </h4>
                                            </div>
                                            <div className='event-card-info'>
                                                <span>
                                                    {dayjs(
                                                        item.news_datetime
                                                    ).format("DD MMMM YYYY")}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        {!loading && totalPages > 1 && (
                            <div className='pagination mt-4'>
                                {generatePaginationItems().map(
                                    (page, index) => (
                                        <button
                                            key={index}
                                            className={`pagination-btn ${page === currentPage
                                                ? "active"
                                                : ""
                                                }`}
                                            onClick={() => {
                                                if (page !== "...") {
                                                    handlePageChange(page);
                                                }
                                            }}
                                            disabled={page === "..."}>
                                            {page}
                                        </button>
                                    )
                                )}
                            </div>
                        )}
                    </div>

                    <div className="row row-gutter-30 mt-3">
                        <h2>Foto</h2>
                        {
                            videos.length > 0 ? (
                                photo.map((item) => (
                                    <div
                                        className='col-md-4 col-lg-4 d-flex'
                                        key={item.id}>
                                        <a
                                            href={`/galeri-foto/${convertToSlug(
                                                item.title
                                            )}`}
                                            className='card-box-b card-shadow news-box flex-grow-1'>
                                            <div className='img-box-b'>
                                                <img
                                                    // src={item.photo ? `${process.env.REACT_APP_API_IMAGE}${item.photo}` : "assets/image/defaulttumbnail.jpeg"}
                                                    src={item.photo}
                                                    className='img-fluid img-b cover-image'
                                                    alt={item.title}
                                                />
                                            </div>
                                            <div className='card-overlay'>
                                                <div className='card-header-b'>
                                                    <div className='card-title-b'>
                                                        <h2 className='title-2'>
                                                            {item.title}
                                                            {item.is_publish}

                                                        </h2>
                                                    </div>
                                                    <div className='card-date'>
                                                        <span>
                                                            {dayjs(
                                                                item.news_datetime
                                                            ).format(
                                                                "DD MMMM YYYY"
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center">
                                    <p>Tidak ada foto .</p>
                                </div>
                            )
                        }
                    </div>


                    <div className="row row-gutter-30 mt-3">
                        <h2>Video</h2>
                        {
                            videos.length > 0 ? (
                                videos.map((item) => (
                                    <div className="col-md-6 col-lg-4" key={item.id} >
                                        <a href={`https://img.youtube.com/vi/` +
                                            item.video
                                        } className="my-image-links" data-autoplay="true" data-vbtype="video">
                                            <div className="card-box-b card-shadow news-box">
                                                <div className="img-box-bc">
                                                    <img src={`https://img.youtube.com/vi/` + item.video + '/0.jpg'} alt="imgNews" className="img-b img-fluid" />
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
                            ) : (
                                <div className="text-center">
                                    <p>Tidak ada video .</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SearchHome;
