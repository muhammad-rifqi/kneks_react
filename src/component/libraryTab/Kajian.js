import React, { useState, useEffect, useMemo } from "react";
import SkeletonCardBerita from "../../component/skeleton/CardBerita";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import 'dayjs/locale/en';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { useCookies } from 'react-cookie';
import { Modal, Button } from "react-bootstrap";
const Kajian = () => {
    const [cookies] = useCookies(['i18next']);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [passcode, setPasscode] = useState("");
    const [file, setFile] = useState(null);
    const postsPerPage = 8;

    const formatDate = (date, locale = 'en') => {
        dayjs.locale(locale); // Set the locale dynamically
        return dayjs(date).format('DD MMMM YYYY'); // Format the date
    };

    // const convertToSlug = (title) => {
    //     if (!title) return "";
    //     return title
    //         .toLowerCase()
    //         .trim()
    //         .replace(/[^\w\s-]/g, "")
    //         .replace(/\s+/g, "-")
    //         .replace(/-+/g, "-");
    // };

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_PUSTAKA;
                const response = await axios.get(`${url}${endpoint}`);

                const res = response.data.filter(post => post.report_category_id === 3);
                setPosts(res);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.message,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Filter posts based on the search query
    const filteredPosts = useMemo(() => {
        return posts.filter(post =>
            post.title && post.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [posts, searchQuery]);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = filteredPosts.slice(firstPostIndex, lastPostIndex);

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber !== "...") setCurrentPage(pageNumber);
    };

    const generatePaginationItems = useMemo(() => {
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

        if (startPage > 1) paginationItems.unshift("...");
        if (endPage < totalPages) paginationItems.push("...");

        return paginationItems;
    }, [currentPage, totalPages]);


    return (
        <>
            <Row className="d-flex justify-content-end">
                <Col lg={{ span: 6 }}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Cari Kajian/Penelitian"
                            aria-label="Cari Kajian/Penelitian"
                            aria-describedby="basic-addon2"
                            style={{ border: '1px solid #ccc', padding: '8.5px' }}
                            size="sm"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                        <InputGroup.Text className="inpt-tx" id="basic-addon2"><i className="fa fa-search"></i></InputGroup.Text>
                    </InputGroup>
                </Col>
            </Row>

            <div className="row row-gutter-y-30 mt-3">
                {loading
                    ? Array(postsPerPage).fill().map((_, index) => (
                        <div className='col-12 col-md-6 col-xl-3' key={index}>
                            <SkeletonCardBerita />
                        </div>
                    ))
                    : currentPosts.length > 0 ? (
                        currentPosts.map((item) => (
                            <div className="col-12 col-md-6 col-xl-3" key={item?.id}>
                                <div className="team-card-x">
                                    <div className="team-card-img-x">
                                        <a href={`/e-pustaka/${item?.id}`}>
                                            <img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" />
                                        </a>
                                    </div>
                                    <div className="team-card-content-x">
                                        <h4><a href={`/e-pustaka/${item?.id}`}>{cookies.i18next === 'en' ? item?.title_en : item?.title}</a></h4>
                                        <div className="d-flex justify-content-between align-items-end">
                                            <p>{cookies.i18next === 'id' ? formatDate(item.date, 'id') : formatDate(item.date, 'en')}</p>
                                            <a
                                                title="Downloadable"
                                                href="#download"
                                                onClick={() => {
                                                    setShowModal(true)
                                                    setFile(item?.file)
                                                }}
                                            >
                                                <i className="fa-solid fa-download" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-lg-12 col-md-12" style={{ marginBottom: '200px' }}>
                            <p className="text-center">No posts available</p>
                        </div>
                    )
                }

                {!loading && totalPages > 1 && (
                    <div className='pagination mt-4'>
                        {generatePaginationItems.map((page, index) => (
                            <button
                                key={index}
                                className={`pagination-btn ${page === currentPage ? "active" : ""}`}
                                onClick={() => handlePageChange(page)}
                                aria-label={`Page ${page}`}
                                disabled={page === "..."}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Passcode</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Passcode</Form.Label>
                            <Form.Control
                                type="password"
                                value={passcode}
                                onChange={(e) => setPasscode(e.target.value)}
                                placeholder="Masukkan passcode"
                                className="border"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="success"
                        onClick={() => {
                            if (passcode === "123456") {
                                const link = document.createElement("a");
                                link.href = file || "#";
                                link.setAttribute("download", "file.pdf");
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                                setShowModal(false);
                                setPasscode("");
                            } else {

                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Passcode salah!",
                                });
                            }
                        }}
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Kajian;
