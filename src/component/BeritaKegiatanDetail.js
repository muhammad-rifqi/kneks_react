import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import 'dayjs/locale/en';
import axios from 'axios';
import { useTranslation } from "react-i18next";

import { useCookies } from 'react-cookie';

const upsertMeta = ({ name, property, content }) => {
    if (!content) return;

    const selector = name
        ? `meta[name="${name}"]`
        : `meta[property="${property}"]`;

    let tag = document.querySelector(selector);

    if (!tag) {
        tag = document.createElement("meta");
        if (name) tag.setAttribute("name", name);
        if (property) tag.setAttribute("property", property);
        document.head.appendChild(tag);
    }

    tag.setAttribute("content", content);
};

// canonical updater
const upsertCanonical = (href) => {
    if (!href) return;
    let link = document.querySelector(`link[rel="canonical"]`);
    if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
    }
    link.setAttribute("href", href);
};

// excerpt dari html
const stripHtml = (html = "") =>
    html.replace(/<[^>]*>?/gm, "").replace(/\s+/g, " ").trim();

const makeExcerpt = (html, max = 160) => {
    const text = stripHtml(html);
    return text.length > max ? text.slice(0, max - 1) + "…" : text;
};

const BeritaKegiatanDetail = () => {
    const [cookies] = useCookies(['i18next']);
    const { t } = useTranslation()
    const formatDate = (date, locale = 'en') => {
        dayjs.locale(locale); // Set the locale dynamically
        return dayjs(date).format('DD MMMM YYYY'); // Format the date
    };

    const { id, slug } = useParams();
    const [rows, setItem] = useState([]);

    const [itemx, setItemx] = useState([]);

    const convertToSlug = (title) => {
        if (!title) return ""; // Handle null or undefined title
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
                    // const endpoint = process.env.REACT_APP_API_POST;
                    const responsei = await axios.get(`${url}/newsdetail/${atob(id)}`);
                    const responlain = await axios.get(`${url}/news_category/cat/1`);

                    // const foundItem = responsei.data.find(
                    //     (post) =>
                    //         post.id === atob(id) &&
                    //         convertToSlug(post.title) === slug
                    // );

                    // throw new Error("Error!");

                    if (responlain) {
                        setItemx(responlain.data);
                        setItem(responsei?.data);

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
        const item = rows?.[0];
        if (!item) return;

        const isEn = cookies.i18next === "en";

        const title = (isEn ? item.title_en : item.title) || item.title;
        const contentHtml = (isEn ? item.content_en : item.content) || item.content;

        const excerpt = makeExcerpt(contentHtml, 160);

        const imageUrl =
            item.image && item.image !== ""
                ? item.image
                : `${window.location.origin}/assets/image/foto-beritas.png`;

        const pageUrl = `${window.location.origin}/berita-kegiatan/${atob(id)}/${slug}`;

        // TITLE
        document.title = `${title} | KNEKS`;

        // BASIC META
        upsertMeta({ name: "description", content: excerpt });

        // OG
        upsertMeta({ property: "og:title", content: title });
        upsertMeta({ property: "og:description", content: excerpt });
        upsertMeta({ property: "og:image", content: imageUrl });
        upsertMeta({ property: "og:type", content: "article" });
        upsertMeta({ property: "og:url", content: pageUrl });

        // Twitter
        upsertMeta({ name: "twitter:title", content: title });
        upsertMeta({ name: "twitter:description", content: excerpt });
        upsertMeta({ name: "twitter:image", content: imageUrl });

        // canonical
        upsertCanonical(pageUrl);
    }, [rows, cookies.i18next, id, slug]);
    return (
        <>
            <div className="page-wrapper">
                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>{t('beritaDanKegiatan')}</h3>
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
                                    // <div className="col-lg-12 text-center ">
                                    //     <p className="text-white bg-danger p-2">Tidak ada foto</p>
                                    // </div>
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
                                <h4>Tags : {rows[0]?.tag}</h4>
                            </div>
                            {/* {(rows?.tagging || "").trim().length > 0 && (
                                <div className="news-details-list-button">
                                    {(JSON.parse(rows?.tagging) || "")
                                        .map((tag, index) => (
                                            <a href="#t" key={index} className="btn btn-primary">{tag.value}</a>
                                        ))}
                                </div>
                            )} */}
                            {rows[0]?.tagging && (
                                <div className="news-details-list-button">
                                    {(JSON.parse(rows[0].tagging || '[]')).map((t, i) => (
                                        <a key={i} href="#t" className="btn btn-primary me-2">
                                            {t.value}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
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
                                                <a href={`/berita-kegiatan/${btoa(item.id)}/${convertToSlug(item?.title)}`}>
                                                    <img
                                                        src={item?.image === "" ? '/assets/image/foto-beritas.png' : item?.image}
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = `/assets/image/foto-beritas.png`;
                                                        }}
                                                        className="img-fluid" alt={item?.title} />
                                                    {/* <img src={`${process.env.REACT_APP_API_NEWS}` + item.image} className="img-fluid" alt={item.title} /> */}
                                                </a>
                                            </div>
                                            <div className="berita-content ">
                                                <div className="event-card-info-x " style={{ color: `#F2994A` }}>
                                                    {/* <span>#BERITABARU</span> */}
                                                    {item?.tags?.split(",").map((tag, index) => (
                                                        <span key={index}>{tag ? '#' + tag : ''} </span>

                                                    ))}
                                                </div>
                                                <div className="event-card-title pb-4">
                                                    <h4>
                                                        <a href={`/berita-kegiatan/${btoa(item?.id)}/${convertToSlug(item?.title)}`}>{item?.title}</a>
                                                    </h4>
                                                </div>
                                                <div className="event-card-info">
                                                    <span>{dayjs(item?.news_datetime).format("DD MMMM YYYY")}</span>
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

export default BeritaKegiatanDetail