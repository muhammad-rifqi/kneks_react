import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import 'dayjs/locale/en';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import { useCookies } from 'react-cookie';
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
const GaleriFoto = () => {
    const { t } = useTranslation()
    const [posts, setPosts] = useState([]);
    const formatDate = (date, locale = 'en') => {
        dayjs.locale(locale); // Set the locale dynamically
        return dayjs(date).format('DD MMMM YYYY'); // Format the date
    };
    const [cookies] = useCookies(['i18next']);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;
    const [startDate, setStartDate] = useState("");
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
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
    const currentPosts = filteredPosts.slice(firstPostIndex, lastPostIndex);

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

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

    useEffect(() => {
        let filtered = posts;

        // ✅ Filter berdasarkan tanggal jika ada input
        if (startDate) {
            const formattedDate = dayjs(startDate).format("YYYY-MM-DD");
            filtered = filtered.filter(
                (post) => dayjs(post.news_datetime).format("YYYY-MM-DD") === formattedDate
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

    // const [selectedDates, setSelectedDates] = useState();

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
                    <div className='row row-gutter-y-40 d-flex flex-wrap'>
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
                                                    src={item?.photo === "" ? '/assets/image/foto-beritas.png' : item?.photo}
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = `/assets/image/foto-beritas.png`;
                                                    }}
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
                                                            {cookies.i18next === 'id' ? formatDate(item.news_datetime, 'id') : formatDate(item.news_datetime, 'en')}
                                                        </span>
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
            </section>
        </div>
    );
};

export default GaleriFoto;
