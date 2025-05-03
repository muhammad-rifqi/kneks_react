import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import axios from 'axios';
import { useTranslation } from "react-i18next";


const GaleriFotoDetail = () => {
    const { t } = useTranslation()

    dayjs.locale('id');

    const { id, slug } = useParams();
    const [rows, setItem] = useState(null);

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
            const fetchPostsPoto = async () => {
                try {
                    const url = process.env.REACT_APP_API_URL;
                    const endpoint = process.env.REACT_APP_API_PHOTO;
                    const responsei = await axios.get(`${url}${endpoint}`);
                    const foundItem = responsei.data.find(
                        (post) =>
                            post.id === Number(id) &&
                            convertToSlug(post.title) === slug
                    );

                    if (responsei) {
                        // setItemx(responsei.data);
                        setItem(foundItem);
                    }
                    // console.log(responsei.data)
                    console.log(foundItem)
                } catch (err) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: err.message || "An error occurred while fetching data.",
                    });
                }
            };

            fetchPostsPoto();
            const fetchPosts = async () => {
                try {
                    const url = process.env.REACT_APP_API_URL;
                    const endpoint = process.env.REACT_APP_API_POST;
                    const responsei = await axios.get(`${url}${endpoint}`);
                    // const foundItem = responsei.data.find(kneks => convertToSlug(kneks.title) === slug);

                    // throw new Error("Error!");

                    if (responsei) {
                        setItemx(responsei.data);
                    }
                    console.log(responsei.data)
                    // console.log(foundItem)
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


    const formattedDate = rows?.photos_datetime ? dayjs(rows.photos_datetime).format("DD MMMM YYYY") : "Tanggal tidak tersedia";

    return (
        <>
            <div className="page-wrapper">
                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>{t('menu.galeriFoto')}</h3>
                        </div>
                    </div>
                </section>
                <section className="event-details-section-ber">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="event-details-content-box">
                                    <h4>{rows?.title}</h4>
                                    <p>{formattedDate}</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="event-details-inner-box">
                                    {/* <img src={rows?.photo ? `${process.env.REACT_APP_API_IMAGE}${rows?.photo}` : "/assets/image/logoKneksFooter.png"} width={'100%'} className="img-fluid" alt={rows?.title} /> */}
                                    <img
                                        src={rows?.photo === "" ? '/assets/image/foto-beritas.png' : rows?.photo}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = `/assets/image/foto-beritas.png`;
                                        }}
                                        width={'100%'} className="img-fluid" alt={rows?.title} />
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
                                                    alt={rows.title}
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
                                    <div tyle={{ textAlign: `justify` }} dangerouslySetInnerHTML={{ __html: rows?.content }} />
                                </div>
                            </div>
                            <hr />
                            <div className="news-details-list-title pb-3">
                                <h4>Tags :</h4>
                            </div>
                            {/* .split(",") */}
                            {/* {tag.trim()} */}
                            {(rows?.tag || "").trim().length > 0 && (
                                <div className="news-details-list-button">
                                    {(JSON.parse(rows?.tag) || "")
                                        .map((tags, index) => (
                                            <a href="#t" key={index} className="btn btn-primary">{tags?.value}</a>
                                        ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="berita-section-det ">
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
                                                <a href={`/liputan-media/${convertToSlug(item.title)}`}>
                                                    <img
                                                        src={item?.image === "" ? '/assets/image/foto-beritas.png' : item?.image}
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = `/assets/image/foto-beritas.png`;
                                                        }}
                                                        className="img-fluid" alt={item.title} /></a>
                                            </div>
                                            <div className="berita-content ">
                                                <div className="event-card-info-x " style={{ color: `#F2994A` }}>
                                                    <span>#BERITABARU</span>
                                                </div>
                                                <div className="event-card-title pb-4">
                                                    <h4>
                                                        <a href={`/liputan-media/${convertToSlug(item.title)}`}>{item.title}</a>
                                                    </h4>
                                                </div>
                                                <div className="event-card-info">
                                                    <span>{dayjs(item.news_datetime).format('DD MMMM YYYY')}</span>
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

export default GaleriFotoDetail