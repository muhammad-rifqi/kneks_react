import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import "dayjs/locale/id";


import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from "react-multi-date-picker"
import transition from "react-element-popper/animations/transition"
import { useTranslation } from "react-i18next";
const GaleriFoto = () => {
    const { t } = useTranslation()
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    useEffect(() => {
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

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const convertToSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    };

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

    const [selectedDates, setSelectedDates] = useState();
    return (
        <div className='page-wrapper'>
            <section className='page-banner'>
                <div className='container'>
                    <div className='page-banner-title'>
                        <h3>{t('menu.galeriFoto')}</h3>
                    </div>
                </div>
            </section>

            <section className='foto-section'>
                <div className='container'>
                    <div className='row row-gutter-y-40 d-flex flex-wrap'>
                        <Col lg={{ span: 12 }} >

                            <InputGroup className="justify-content-end d-flex ">
                                <DatePicker
                                    value={selectedDates}
                                    onChange={setSelectedDates}
                                    format="DD-MM-YYYY"
                                    placeholder="Filter Tanggal"
                                    style={{ padding: '18px ', width: '100%' }}
                                    animations={[
                                        transition({
                                            from: 35,
                                            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                                        }),
                                    ]}
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
                            : currentPosts.map((item) => (
                                <div
                                    className='col-md-4 col-lg-4 d-flex'
                                    key={item.id}>
                                    <a
                                        href={`/galeri-foto/${item.id}/${convertToSlug(
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
                            ))}
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
            </section>
        </div>
    );
};

export default GaleriFoto;
