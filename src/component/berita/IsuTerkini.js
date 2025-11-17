import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import 'dayjs/locale/en';
import { useCookies } from 'react-cookie';

import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
const IsuTerkini = () => {

    const { t } = useTranslation()
    const [cookies] = useCookies(['i18next']);
    const formatDate = (date, locale = 'en') => {
        dayjs.locale(locale); // Set the locale dynamically
        return dayjs(date).format('DD MMMM YYYY'); // Format the date
    };
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;
    const [startDate, setStartDate] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
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
                const url = process.env.REACT_APP_API_URL+'/hotissue';
                // const endpoint = process.env.REACT_APP_API_INFO_TERKINI;
                // const response = await axios.get(`${url}${endpoint}`);
                const response = await axios.get(`${url}`);
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
        let filtered = posts;

        // ✅ Filter berdasarkan tanggal jika ada input
        if (startDate) {
            const formattedDate = dayjs(startDate).format("YYYY-MM-DD");
            filtered = filtered.filter(
                (post) => dayjs(post.hot_issue_datetime).format("YYYY-MM-DD") === formattedDate
            );
        }

        // ✅ Filter berdasarkan judul jika ada input
        if (searchTitle) {
            filtered = filtered.filter((post) =>
                post.title.toLowerCase().includes(searchTitle.toLowerCase())
            );
        }

        setFilteredPosts(filtered);
        setCurrentPage(1); // Reset ke halaman pertama setelah filter berubah
    }, [searchTitle, startDate, posts]);
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
            placeholder={cookies.i18next === 'id' ? 'Filter Tanggal' : 'Filter Date'}
            readOnly // Makes the input read-only
            size="sm"
            style={{ paddingTop: '8px', paddingBottom: '9px', border: '1px solid #ccc' }}
        />
    ));

    return (
        <>
            <div className='page-wrapper'>
                <section className='page-banner'>
                    <div className='container'>
                        <div className='page-banner-title'>
                            <h3>{t('isuTerkini')}</h3>
                        </div>
                    </div>
                </section>
                <section className='berita-section'>
                    <div className='container'>
                        <Row className="pb-3" >
                            <Col md={7} className="pb-3 offset-md-2">
                                <InputGroup >

                                    <input
                                        type="text"
                                        placeholder={cookies.i18next === 'id' ? 'Filter Judul' : 'Filter Title'}
                                        value={searchTitle}
                                        className="form-control form-control-sm"
                                        onChange={(e) => setSearchTitle(e.target.value)}
                                        style={{ paddingTop: '8px', paddingBottom: '9px', border: '1px solid #ccc' }}
                                    />
                                    <InputGroup.Text><i className="fa fa-search text-muted"></i></InputGroup.Text>
                                </InputGroup>
                            </Col>

                            <Col md={3} className="" >
                                <InputGroup className="d-flex justify-content-end">
                                    <DatePicker
                                        dateFormat="dd-MM-yyyy"
                                        onChange={(date) => setStartDate(date)}
                                        selected={startDate}
                                        // placeholderText="Pilih tanggal"
                                        //   className="form-control"
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                        isClearable={!!startDate}
                                        customInput={<CustomInput />}
                                        className="w-100"

                                    />
                                    <InputGroup.Text><i className="fa fa-calendar text-muted"></i></InputGroup.Text>
                                </InputGroup>
                            </Col>
                        </Row>
                        <div className='row row-gutter-30'>
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
                                :
                                currentPosts.length > 0 ? (
                                    currentPosts.map((item) => (
                                        <div
                                            className='col-lg-4 col-md-6'
                                            key={item.id}>
                                            <div className='berita-card'>
                                                <div className='berita-card-imgbox '>
                                                    <a
                                                        href={`/isu-terkini/${btoa(item.id)}/${convertToSlug(
                                                            item.title
                                                        )}`}>
                                                        {/* <img src={item.image ? `${process.env.REACT_APP_API_PHOTO_BERITA}${item.image}` : "assets/image/defaulttumbnail.jpeg"} className="img-fluid w-100" alt={item.title} />  */}
                                                        <img
                                                            src={item?.image === "" ? '/assets/image/foto-beritas.png' : item?.image}
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                e.target.src = `/assets/image/foto-beritas.png`;
                                                            }}
                                                            className='img-fluid w-100'
                                                            alt={cookies.i18next === 'id' ? item.title : item.title_en}

                                                        />
                                                    </a>
                                                </div>
                                                <div className='berita-content '>
                                                    <div
                                                        className='event-card-info-x '
                                                        style={{
                                                            color: `#F2994A`,
                                                        }}>
                                                        {/* <span>{cookies.i18next === 'id' ? '#BERITABARU' : '#CURRENTNEWS'}</span> */}
                                                        {/* 
                                                        {item.tags.split(",").map((tag, index) => (
                                                            <span key={index}>{tag ? '#' + tag : ''} </span>
                                                        ))} */}
                                                        {Array.isArray(item.tags) && item.tags.map((tag, index) => (
                                                            <span key={index}>#{tag.value} </span>
                                                        ))}
                                                    </div>
                                                    <div className='event-card-title pb-4'>
                                                        <h4>
                                                            <a
                                                                href={`/isu-terkini/${btoa(item.id)}/${convertToSlug(
                                                                    item?.title
                                                                )}`}>
                                                                {cookies.i18next === 'id' ? item?.title : item?.title_en}
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div className='event-card-info'>
                                                        <span>
                                                            {cookies.i18next === 'id' ? formatDate(item?.hot_issue_datetime, 'id') : formatDate(item?.hot_issue_datetime, 'en')}
                                                        </span>
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
                    </div>
                </section>
            </div>
        </>
    );
};

export default IsuTerkini;
