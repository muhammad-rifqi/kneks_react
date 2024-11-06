import React, { useState, useEffect } from "react";
import SkeletonCardBerita from "../../component/skeleton/CardBerita";
import axios from "axios";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import "dayjs/locale/id";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

const Pidato = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const postsPerPage = 8;

    dayjs.locale('id');

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
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_PUSTAKA;
                const response = await axios.get(`${url}${endpoint}`);

                const res = response.data.filter(post => post.report_category_id === 2);
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
    const filteredPosts = posts.filter(post =>
        post.title && post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


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

    return (
        <>
            <Row className="d-flex justify-content-end">
                <Col lg={{ span: 6 }}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Cari Pidato/Paparan..."
                            aria-label="Cari Pidato/Paparan..."
                            aria-describedby="basic-addon2"
                            style={{ border: '1px solid #ccc', padding: '8px' }}
                            size="sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <InputGroup.Text id="basic-addon2"><i className="fa fa-search"></i></InputGroup.Text>
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
                                        <a href={`/e-pustaka/${convertToSlug(
                                            item?.title
                                        )}`}>
                                            <img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" />
                                        </a>
                                    </div>
                                    <div className="team-card-content-x">
                                        <h4><a href={`/e-pustaka/${convertToSlug(
                                            item?.title
                                        )}`}>{item?.title}</a></h4>
                                        <div className="d-flex justify-content-between align-items-end">
                                            <p>{dayjs(item?.date).format("DD MMMM YYYY")}</p>
                                            <a href="#t" data-bs-toggle="tooltip" title="Downloadable">
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
                        {generatePaginationItems().map((page, index) => (
                            <button
                                key={index}
                                className={`pagination-btn ${page === currentPage ? "active" : ""}`}
                                onClick={() => { if (page !== "...") handlePageChange(page); }}
                                disabled={page === "..."}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Pidato;
