import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { useCookies } from 'react-cookie';


const BeritaTerkaitDetail = () => {
    const [cookies] = useCookies(['i18next']);
    const { t } = useTranslation()
    dayjs.locale('id');

    const formatDate = (date, locale = 'en') => {
        dayjs.locale(locale); // Set the locale dynamically
        return dayjs(date).format('DD MMMM YYYY'); // Format the date
    };
    const { id, slug } = useParams();
    const [rows, setItem] = useState([]);

    const [itemx, setItemx] = useState([]);

    const convertToSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    const effectrun = useRef(false);
    useEffect(() => {
        if (effectrun.current === false) {
            const fetchPosts = async () => {
                try {
                    const url = process.env.REACT_APP_API_URL;
                    const endpoint = process.env.REACT_APP_API_POST;
                    const responsei = await axios.get(`${url}/newsdetail/${atob(id)}`);
                    const responlain = await axios.get(`${url}${endpoint}`);

                    // const foundItem = responsei.data.find(
                    //     (post) =>
                    //         post.id === Number(id) &&
                    //         convertToSlug(post.title) === slug
                    // );

                    // throw new Error("Error!");

                    if (responlain) {
                        setItemx(responlain.data);
                        setItem(responsei.data);
                    }
                } catch (err) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: err.message || "An error occurred while fetching data.",
                    });
                }
            };

            fetchPosts();

            return () => {
                effectrun.current = true
            }
        }
    }, [id, slug]);
    // const formattedDate = rows?.news_datetime ? dayjs(rows.news_datetime).format("DD MMMM YYYY") : "Tanggal tidak tersedia";

    useEffect(() => {
        document.title = rows[0]?.title;

        // --- Meta Description ---
        const metaDescription = document.createElement("meta");
        metaDescription.name = "description";
        metaDescription.content = rows[0]?.content
        document.head.appendChild(metaDescription);

        // --- OG Title ---
        const metaOgTitle = document.createElement("meta");
        metaOgTitle.setAttribute("property", "og:title");
        metaOgTitle.content = rows[0]?.title;
        document.head.appendChild(metaOgTitle);

        // --- OG Description ---
        const metaOgDescription = document.createElement("meta");
        metaOgDescription.setAttribute("property", "og:description");
        metaOgDescription.content = rows[0]?.content
        document.head.appendChild(metaOgDescription);

        // --- OG Image ---
        const metaOgImage = document.createElement("meta");
        metaOgImage.setAttribute("property", "og:image");
        metaOgImage.content = rows[0]?.image === "" ? '/assets/image/foto-beritas.png' : rows[0]?.image
        document.head.appendChild(metaOgImage);

        return () => {
            document.head.removeChild(metaDescription);
            document.head.removeChild(metaOgTitle);
            document.head.removeChild(metaOgDescription);
            document.head.removeChild(metaOgImage);
        };

    }, [rows])

    return (
        <>
            <div className="page-wrapper">
                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>{t('beritaTerkait')}</h3>
                        </div>
                    </div>
                </section>
                <section className="event-details-section-ber">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="event-details-content-box">
                                    <h4>{cookies.i18next === 'en' ? rows[0]?.title_en : rows[0]?.title}</h4>
                                    <p>{cookies.i18next === 'id' ? formatDate(rows[0]?.news_datetime, 'id') : formatDate(rows[0]?.news_datetime, 'en')}</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="event-details-inner-box">
                                    <img
                                        src={rows[0]?.image === "" ? '/assets/image/foto-beritas.png' : rows[0]?.image}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `/assets/image/foto-beritas.png`;
                                        }}
                                        width={`100%`} className="img-fluid" alt={rows[0]?.title} />
                                </div>
                            </div>
                            <div className="row">
                                {rows?.foto_gallery && rows?.foto_gallery.length > 0 ? (
                                    rows?.foto_gallery.map((result, index) => (
                                        <div className="col-lg-3 pb-3" key={index}>
                                            <a href={`${process.env.PUBLIC_URL}/${result.foto}`} className="beritaDetail" data-gall="gallery01">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/${result.foto}`}
                                                    width="100%"
                                                    style={{ height: "195px" }}
                                                    className="img-fluid"
                                                    alt={rows?.title}
                                                />
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className="col-lg-12">
                                <div className="event-details-content-box">
                                    {/* <p style={{ textAlign: `justify` }}>{rows?.content}</p> */}
                                    <div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? rows[0]?.content_en : rows[0]?.content }} />
                                </div>
                            </div>
                            <hr />
                            <div className="news-details-list-title pb-3">
                                <h4>Tags :</h4>
                            </div>

                            {/* {(rows?.tagging || "").trim().length > 0 && (
                                <div className="news-details-list-button">
                                    {(rows?.tagging || "")
                                        .split(",")
                                        .map((tag, index) => (
                                            <a href="#t" key={index} className="btn btn-primary">{tag.trim()}</a>
                                        ))}
                                </div>
                            )} */}
                            {rows[0]?.tagging && (
                                <div className="news-details-list-button">
                                    {(JSON.parse(rows[0]?.tagging || '[]')).map((t, i) => (
                                        <a key={i} href="#t" className="btn btn-primary me-2">
                                            {t.value}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                          {/* <div>
                            ShareThis BEGIN 
                            <br /><br />
                            <div className="sharethis-inline-share-buttons" style={{ textAlign: "left" }}></div>
                            ShareThis END 
                        </div> */}
                    </div>
                </section>

                <section className="berita-section-det">
                    <div className="container">
                        <div className="row row-gutter-y-40 mb-5">
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-inner">
                                    <div className="section-tagline">
                                        Berita Lainnya
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-gutter-30">
                            {itemx.slice(0, 3).map((item) => {
                                return (
                                    <div className="col-lg-4 col-xl-4" key={item.id}>
                                        <div className="berita-card">
                                            <div className="berita-card-imgbox ">
                                                <a href={`/berita-terkait/${btoa(item.id)}/${convertToSlug(item.title)}`}>
                                                    <img
                                                        src={item?.image === "" ? '/assets/image/foto-beritas.png' : item?.image}
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = `/assets/image/foto-beritas.png`;
                                                        }}
                                                        className="img-fluid w-100" alt={item.title} /></a>
                                            </div>
                                            <div className="berita-content ">
                                                <div className="event-card-info-x " style={{ color: `#F2994A` }}>
                                                    {item.tags.split(",").map((tag, index) => (
                                                        <span key={index}>{tag ? '#' + tag : ''} </span>
                                                    ))}
                                                </div>
                                                <div className="event-card-title pb-4">
                                                    <h4>
                                                        <a href={`/berita-terkait/${btoa(item.id)}/${convertToSlug(item.title)}`}>{item.title}</a>
                                                    </h4>
                                                </div>
                                                <div className="event-card-info">
                                                    <span>{dayjs(rows.news_datetime).format("DD MMMM YYYY")}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </section>

            </div>
        </>
    )
}

export default BeritaTerkaitDetail