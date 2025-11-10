import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import 'dayjs/locale/en';
import { useCookies } from 'react-cookie';
import { useTranslation } from "react-i18next";
import axios from 'axios';
const OpiniDetail = () => {
    const { t } = useTranslation()
    const [cookies] = useCookies(['i18next']);
    const formatDate = (date, locale = 'en') => {
        dayjs.locale(locale); // Set the locale dynamically
        return dayjs(date).format('DD MMMM YYYY'); // Format the date
    };

    const { id, slug } = useParams();
    const [rows, setItem] = useState(null);

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
                    const endpoint = process.env.REACT_APP_API_POST;
                    const responsei = await axios.get(`${url}${endpoint}`);
                    // const foundItem = responsei.data.find(kneks => convertToSlug(kneks.title) === slug);

                    // throw new Error("Error!");
                    const foundItem = responsei.data.find(
                        (post) =>
                            post.id === Number(id) &&
                            convertToSlug(post.title) === slug
                    );
                    console.log(foundItem)
                    if (responsei) {
                        setItemx(responsei.data);
                        setItem(foundItem);
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
    // const formattedDate = rows?.news_datetime ? dayjs(rows?.news_datetime).format("DD MMMM YYYY") : "Tanggal tidak tersedia";


    return (
        <>
            <div className="page-wrapper">
                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">

                            <h3>{t('menu.opini')}</h3>
                        </div>
                    </div>
                </section>
                <section className="event-details-section-ber">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="event-details-content-box">
                                    <h4>{cookies.i18next === 'id' ? rows?.title : rows?.title_en}</h4>
                                    <p>{cookies.i18next === 'id' ? formatDate(rows?.date, 'id') : formatDate(rows?.date, 'en')}</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="event-details-inner-box">
                                    {/* <img src={`${process.env.PUBLIC_URL}/assets/image/berita3.svg`} width={`100%`} className="img-fluid" alt={cookies.i18next === 'id' ? rows.title : rows.title_en} /> */}
                                    <img
                                        src={rows?.image === "" ? '/assets/image/foto-beritas.png' : rows?.image}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `/assets/image/foto-beritas.png`;
                                        }}
                                        className="img-fluid" width={`100%`} alt={cookies.i18next === 'id' ? rows?.title : rows?.title_en} />
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
                                    <div dangerouslySetInnerHTML={{ __html: cookies.i18next === 'en' ? rows?.content_en : rows?.content }} />
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
                            {rows?.tagging && (
                                <div className="news-details-list-button">
                                    {(JSON.parse(rows.tagging || '[]')).map((t, i) => (
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
                                                <a href={`/liputan-media/${item.id}/${convertToSlug(item.title)}`}>
                                                    {/* <img src={`${process.env.PUBLIC_URL}/assets/image/berita3.svg`} className="img-fluid" alt={item.title} /> */}
                                                    <img
                                                        src={item?.image === "" ? '/assets/image/foto-beritas.png' : item?.image}
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = `/assets/image/foto-beritas.png`;
                                                        }}
                                                        className="img-fluid" alt={item.title} />
                                                </a>
                                            </div>
                                            <div className="berita-content ">
                                                <div className="event-card-info-x " style={{ color: `#F2994A` }}>
                                                    {item.tags.split(",").map((tag, index) => (
                                                        <span key={index}>{tag ? '#' + tag : ''} </span>
                                                    ))}
                                                </div>
                                                <div className="event-card-title pb-4">
                                                    <h4>
                                                        <a href={`/liputan-media/${item.id}/${convertToSlug(item.title)}`}>{item.title}</a>
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

export default OpiniDetail