import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';

import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";

const LiputanMedia = () => {
    const { t } = useTranslation()
    dayjs.locale('id');
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;
    const [startDate, setStartDate] = useState("");
    const convertToSlug = (title) => {
        if (!title) return ""; // Handle null or undefined title
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    };

    useEffect(() => {
        // Function to fetch posts
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_LIPUTAN_MEDIA;
                const response = await axios.get(`${url}${endpoint}`);
                setPosts(response.data);
                setFilteredPosts(response.data);
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
            paginationItems.unshift("...");
        }
        if (endPage < totalPages) {
            paginationItems.push("...");
        }

        return paginationItems;
    };


    const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
        <FormControl
            value={value}
            onClick={onClick}
            ref={ref}
            placeholder="Filter Tanggal"
            readOnly // Makes the input read-only
            size="sm"
            style={{paddingTop:'8px',paddingBottom:'9px', border:'1px solid #ccc'}}
        />
    ));

    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>{t('menu.liputanMedia')}</h3>
                        </div>
                    </div>
                </section>
                <section className="berita-section">
                    <div className="container">
                        <div className="row row-gutter-30">
                            <Col lg={{ span: 12 }}>
                                <InputGroup className="justify-content-end d-flex">
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
                                    <InputGroup.Text id="basic-addon2"><i className="fa fa-calendar"></i></InputGroup.Text>
                                </InputGroup>
                            </Col>
                        </div>
                        <div className="row row-gutter-30">

                            {loading
                                ? Array(postsPerPage)
                                    .fill()
                                    .map((_, index) => (
                                        <div className='col-lg-4 col-md-6' key={index}>
                                            <SkeletonCardBerita />
                                        </div>
                                    ))
                                : currentPosts.length > 0 ? (
                                    currentPosts.map((item) => (

                                        <div className="col-lg-4 col-xl-4 col-md-6" key={item.id}>
                                            <div className="berita-card">
                                                <div className="berita-card-imgbox ">
                                                    <a href={`/siaran-pers/${item.id}/${convertToSlug(item.title)}`}>
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
                                                            <a href={`/siaran-pers/${item.id}/${convertToSlug(item.title)}`}>{item.title}</a>
                                                        </h4>
                                                    </div>
                                                    <div className="event-card-info">
                                                        <span>{dayjs(item.news_datetime).format('DD MMMM YYYY')}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-lg-12 col-md-12" style={{ marginBottom: '200px' }}>
                                        <p className="text-center">No posts available</p>
                                    </div>
                                )}

                            {!loading && totalPages > 1 && (
                                <div className='pagination mt-4'>
                                    {generatePaginationItems().map((page, index) => (
                                        <button
                                            key={index}
                                            className={`pagination-btn ${page === currentPage ? "active" : ""}`}
                                            onClick={() => {
                                                if (page !== "...") {
                                                    handlePageChange(page);
                                                }
                                            }}
                                            disabled={page === "..."}>
                                            {page}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div >
        </>
    )
}

export default LiputanMedia