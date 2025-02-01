import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';

import VenoBox from 'venobox';

import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import FormControl from 'react-bootstrap/FormControl';
const GaleriVideo = () => {
    const { t } = useTranslation()
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;
 
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = filteredPosts.slice(firstPostIndex, lastPostIndex);

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

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
            paginationItems.unshift('...');
        }
        if (endPage < totalPages) {
            paginationItems.push('...');
        }

        return paginationItems;
    };


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

    useEffect(() => {
        // if (!loading) {
            // Initialize VenoBox after data is fetched and component is rendered
            new VenoBox({
                selector: '.my-videos-linksx',
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
                const elements = document.querySelectorAll(".my-videos-linksx");
                elements.forEach((el) => {
                    el.removeAttribute("data-venobox-initialized");
                });
            };
        // }
    }, [ posts]); // Re-run effect if loading or posts change

    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <FormControl
            value={value}
            onClick={onClick}
            ref={ref}
            placeholder="Filter Tanggal"
            readOnly // Makes the input read-only
            size="sm"
            style={{ paddingTop: '8px', paddingBottom: '9px', border: '1px solid #ccc' }}
        />
    ));

    useEffect(() => {
        if (startDate) {
            const formattedDate = dayjs(startDate).format('YYYY-MM-DD'); // Lowercase 'yyyy'
            const filtered = posts.filter(post =>
                dayjs(post.news_datetime).format('YYYY-MM-DD') === formattedDate
            );

            setFilteredPosts(filtered);
            setCurrentPage(1); // Reset to the first page after filtering
        } else {
            setFilteredPosts(posts);
        }
    }, [startDate, posts]);

    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>{t('menu.galeriVideo')}</h3>
                        </div>
                    </div>
                </section>
                <section className="video-section">
                    <div className="container">
                        <div className="row row-gutter-y-40">
                            <Col lg={{ span: 12 }} >

                                <InputGroup className="justify-content-end d-flex ">
                                    <DatePicker

                                        dateFormat="dd-MM-yyyy"
                                        // placeholderText="Filter Tanggal"
                                        onChange={(date) => setStartDate(date)}
                                        selected={startDate}
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        isClearable={!!startDate}
                                        customInput={<CustomInput />}
                                    />
                                    <InputGroup.Text id="basic-addon2" ><i className="fa fa-calendar"></i></InputGroup.Text>
                                </InputGroup>

                            </Col>
                            {loading
                                ? Array(postsPerPage)
                                    .fill()
                                    .map((_, index) => (
                                        <div
                                            className='col-md-4 col-lg-4 d-flex'
                                            key={index}>
                                            <SkeletonCardBerita />
                                        </div>
                                    ))
                                :
                                currentPosts.length > 0 ? (
                                    currentPosts.map((item) => (
                                        <div className="col-md-6 col-lg-4" key={item.id} >
                                            <a href={`https://www.youtube.com/watch?v=` +
                                                item.video
                                            } className="my-videos-linksx" data-autoplay="true" data-vbtype="video">
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
                                    <div className="col-lg-12 col-md-12" style={{ marginBottom: '200px' }}>
                                        <p className="text-center">No posts available</p>
                                    </div>
                                )
                            }
                        </div>
                        {!loading && totalPages > 1 && (
                        <div className='pagination mt-4'>
                            {generatePaginationItems().map((page, index) => (
                                <button
                                    key={index}
                                    className={`pagination-btn ${page === currentPage
                                        ? "active"
                                        : ""
                                        }`}
                                    onClick={() => {
                                        if (page !== '...') {
                                            handlePageChange(page);
                                        }
                                    }}
                                    disabled={page === '...'}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>
                    )}
                    </div>
                </section >
            </div >
        </>
    )
}

export default GaleriVideo