import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import SkeletonCardBerita from "../skeleton/CardBerita";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const SearchHome = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");

    const [posts, setPosts] = useState([]);
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
        const fetchSearch = async () => {
            setLoading(true);
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_SEARCH_POST;
                const response = await axios.get(
                    `${url}${endpoint}?cari=${query}`
                );
                setPosts(response.data);
              
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
                                                  href={`/berita-kegiatan/${convertToSlug(
                                                      item.title
                                                  )}`}>
                                                  <img
                                                      src={
                                                          "/assets/image/berita.jpg"
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
                                                          href={`/berita-kegiatan/${convertToSlug(
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
                                            className={`pagination-btn ${
                                                page === currentPage
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
    );
};

export default SearchHome;
