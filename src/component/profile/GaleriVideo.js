import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import 'dayjs/locale/en';

import VenoBox from 'venobox';

import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import { useCookies } from 'react-cookie';
import './pf.css'
const GaleriVideo = () => {
    const { t } = useTranslation()
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;
    const [searchTitle, setSearchTitle] = useState("");
    const [cookies, setCookie] = useCookies(['i18next']);
    const formatDate = (date, locale = 'en') => {
        dayjs.locale(locale); // Set the locale dynamically
        return dayjs(date).format('DD MMMM YYYY'); // Format the date
    };
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
        // Pastikan posts sudah dimuat dan tidak dalam keadaan loading
        if (!loading && posts.length > 0) {
            // Tunggu sebentar untuk memastikan DOM sudah diperbarui
            setTimeout(() => {
                // Periksa apakah elemen dengan kelas my-videos-linksx ada
                if (document.querySelectorAll('.my-videos-linksx-x').length > 0) {
                    try {
                        // Hapus instance VenoBox yang mungkin sudah ada
                        const elements = document.querySelectorAll(".my-videos-linksx-x");
                        elements.forEach((el) => {
                            el.removeAttribute("data-venobox-initialized");
                        });

                        // Inisialisasi VenoBox baru
                        const myVenoBox = new VenoBox({
                            selector: '.my-videos-linksx-x',
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

                        // Simpan instance ke window untuk akses global
                        window.myVideoVenoBox = myVenoBox;
                    } catch (error) {
                        console.error("Error initializing VenoBox:", error);
                    }
                }
            }, 500);
        }

        return () => {
            // Bersihkan instance VenoBox saat komponen unmount
            if (window.myVideoVenoBox) {
                try {
                    window.myVideoVenoBox.close();
                    delete window.myVideoVenoBox;
                } catch (e) {
                    console.error("Error closing VenoBox:", e);
                }
            }

            // Hapus atribut inisialisasi dari elemen
            const elements = document.querySelectorAll(".my-videos-linksx-x");
            elements.forEach((el) => {
                el.removeAttribute("data-venobox-initialized");
            });

            // Hapus overlay VenoBox dari DOM
            const venoboxOverlay = document.querySelector('.vbox-overlay');
            if (venoboxOverlay) {
                venoboxOverlay.remove();
            }
        };
    }, [posts, loading]); // Tambahkan loading sebagai dependency
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
                        <div className="row row-gutter-y-40">
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
                                            } className="my-videos-linksx-x" data-autoplay="true" data-vbtype="video"
                                                data-title={cookies.i18next === 'id' ? item.title : item.title_en}
                                                title={cookies.i18next === 'id' ? item.title : item.title_en}>
                                                <div className="card-box-b card-shadow news-box">
                                                    <div className="img-box-bc">
                                                        <img src={`https://img.youtube.com/vi/` + item.video + '/0.jpg'} alt="imgNews" className="img-b img-fluid" title={cookies.i18next === 'id' ? item.title : item.title_en} />
                                                        <div className="video-btn d-flex justify-content-center">
                                                            <div className="play-icon" >
                                                                <img src="/assets/image/play-circle.svg" alt="imgplay"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-overlay ">
                                                        <div className="card-header-b-xx ">
                                                            <div className="row d-flex align-items-center">
                                                                <div className="col-6">
                                                                    <div className="card-title-b-xx">
                                                                        <h2 className="title-2-x-xx text-white">
                                                                            {cookies.i18next === 'id' ? item.title : item.title_en}
                                                                        </h2>
                                                                    </div>
                                                                    <div className="card-date-xx">
                                                                        <span className="date-b-xx">
                                                                            {cookies.i18next === 'id' ? formatDate(item.news_datetime, 'id') : formatDate(item.news_datetime, 'en')}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6 text-end">
                                                                    <span className="date-b-sd-xx bg-dark p-2">{item.duration}</span>
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