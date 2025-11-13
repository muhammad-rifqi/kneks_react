import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import 'dayjs/locale/en';
import axios from 'axios';
import VenoBox from 'venobox';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
import './home/s8.css';

const AgendaDetailsFix = () => {
    new VenoBox({
        selector: '.my-image-links-foto',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'swing',
        spinColor: '#5A8DEE',
        titlePosition: 'bottom',
        toolsColor: '#ffffff',
        titleattr: 'data-title',
        titleStyle: 'block'
    });
    new VenoBox({
        selector: '.my-image-links-video',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'swing',
        spinColor: '#5A8DEE',
        titlePosition: 'bottom',
        toolsColor: '#ffffff',
        titleattr: 'data-title',
        titleStyle: 'block'
    });

    const { t } = useTranslation();
    const [cookies] = useCookies(['i18next']);
    const formatDate = (date, locale = 'en') => {
        dayjs.locale(locale); // Set the locale dynamically
        return dayjs(date).format('DD MMMM YYYY'); // Format the date
    };

    dayjs.locale('id');

    const { slug } = useParams();
    const [rows, setItem] = useState(null);
    const [posts, setPosts] = useState([]);

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
                    const endpoint = process.env.REACT_APP_API_AGENDA;
                    const responsei = await axios.get(`${url}${endpoint}`);
                    const foundItem = responsei.data.find(agenda => convertToSlug(agenda.title) === slug);
                    // throw new Error("Error!");

                    if (responsei) {
                        setItem(foundItem);
                        setPosts(responsei.data)

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
    }, [slug]);
    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Agenda</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section">
                    <div className="container-md">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="event-details-content-box">
                                    <h4>{rows?.title}</h4>
                                    <div dangerouslySetInnerHTML={{ __html: rows?.description }} />
                                </div>
                                <br />
                                <p>
                                    {/* {
                                        rows?.area == null ? (
                                            <iframe src={rows?.area} title={rows?.area} width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        ) : (
                                            <div></div>
                                        )
                                    } */}
                                    {rows?.area || '-'}
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar">
                                    <div className="sidebar-widget-event-meta-box">
                                        <div className="sidebar-widget-event-meta-details">
                                            <div className="sidebar-widget-event-box">
                                                <h6>Waktu:</h6>
                                                <p className="m-0">{dayjs(rows?.agenda_datetime).locale('id').format('h:mm')}  WIB</p>
                                                <p className="m-0">{dayjs(rows?.agenda_datetime).locale('id').format('DD MMMM YYYY')} - {dayjs(rows?.agenda_endtime).locale('id').format('DD MMMM YYYY')}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Penyelenggara:</h6>
                                                <p>{rows?.organizer || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Nama Proyek</h6>
                                                <p>{rows?.project || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Pengelola</h6>
                                                <p>{rows?.manager || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Kontributor</h6>
                                                <p>  {rows?.contributor || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Indikator</h6>
                                                <p>{rows?.indicator || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Dampak</h6>
                                                <p> {rows?.impact || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Pembuka Acara</h6>
                                                <p>{rows?.opening || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Jumlah Peserta</h6>
                                                <p>{rows?.participants || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Level Of Content</h6>
                                                <p>{rows?.loc || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Peserta Prioritas</h6>
                                                <p>{rows?.priority_participants || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>KBLI</h6>
                                                <p>{rows?.kbli || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Skala Usia</h6>
                                                <p> {rows?.age || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Gender Audience</h6>
                                                <p>{rows?.gender || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Lokasi (Provinsi)</h6>
                                                <p>{rows?.province || '-'}</p>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Link:</h6>
                                                <a href={rows?.link} className="text-primary" target="_blank" rel="noreferrer">{rows?.link || '-'}</a>
                                            </div>
                                            <div className="sidebar-widget-event-box">
                                                <h6>Ketegori:</h6>
                                                <span>{rows?.kategori || '-'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                <section className="department-all">
                    <div className="container">
                        <div className="row row-gutter-y-30 d-flex justify-content-center">
                            <div className="col-lg-12">
                                {/* <div className="row ">
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="team-card-x">
                                            <div className="team-card-img-x">
                                                <img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" />
                                                
                                                </div>
                                            <div className="team-card-content-x">
                                                <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <p>21 Mei 2024</p>
                                                    <a href="#t" data-bs-toggle="tooltip" title="download">
                                                        <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="team-card-x">
                                            <div className="team-card-img-x">
                                                <img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" />
                                                
                                                </div>
                                            <div className="team-card-content-x">
                                                <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <p>21 Mei 2024</p>
                                                    <a href="#t" data-bs-toggle="tooltip" title="download">
                                                        <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="team-card-x">
                                            <div className="team-card-img-x">
                                                <img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" />
                                                
                                                </div>
                                            <div className="team-card-content-x">
                                                <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <p>21 Mei 2024</p>
                                                    <a href="#t" data-bs-toggle="tooltip" title="download">
                                                        <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="team-card-x">
                                            <div className="team-card-img-x">
                                                <img src="/assets/image/epustaka.svg" className="img-fluid" alt="img-40" />
                                                
                                                </div>
                                            <div className="team-card-content-x">
                                                <h4><a href="/e-pustaka/detail">Ekonomi Syariah Indonesia 2014 - 2019</a></h4>
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <p>21 Mei 2024</p>
                                                    <a href="#t" data-bs-toggle="tooltip" title="download">
                                                        <i className="fa-solid fa-download" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div> */}
                                {/* <div className="row row-gutter-y-30 d-flex justify-content-center pt-5">
                                    <div className="col-md-3 col-lg-3">
                                        <a href={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} className="my-image-links-foto" data-gall="gallery01">
                                            <div className="card-box-b card-shadow news-box">
                                                <div className="img-box-b " data-gall="gallery01">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} alt="imgNews" className="img-b img-fluid" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-lg-3">
                                        <a href={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} className="my-image-links-foto" data-gall="gallery01">
                                            <div className="card-box-b card-shadow news-box">
                                                <div className="img-box-b " data-gall="gallery01">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} alt="imgNews" className="img-b img-fluid" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-lg-3">
                                        <a href={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} className="my-image-links-foto" data-gall="gallery01">
                                            <div className="card-box-b card-shadow news-box">
                                                <div className="img-box-b " data-gall="gallery01">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} alt="imgNews" className="img-b img-fluid" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-lg-3">
                                        <a href={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} className="my-image-links-foto" data-gall="gallery01">
                                            <div className="card-box-b card-shadow news-box">
                                                <div className="img-box-b " data-gall="gallery01">
                                                    <img src={`${process.env.PUBLIC_URL}/assets/image/berita2.jpeg`} alt="imgNews" className="img-b img-fluid" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div> */}
                                {/* <section className="video-section-x">
                                    <div className="row row-gutter-y-40">
                                        <div className="col-md-3 col-lg-3">
                                            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links-video" data-autoplay="true" data-vbtype="video">
                                                <div className="card-box-b card-shadow news-box">
                                                    <div className="img-box-bc">
                                                        <img src="/assets/image/berita2.jpeg" alt="imgNews" className="img-b img-fluid" />
                                                        <div className="video-btn">
                                                            <div className="play-icon" >
                                                                <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3 col-lg-3">
                                            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links-video" data-autoplay="true" data-vbtype="video">
                                                <div className="card-box-b card-shadow news-box">
                                                    <div className="img-box-bc">
                                                        <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                                        <div className="video-btn">
                                                            <div className="play-icon" >
                                                                <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3 col-lg-3">
                                            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links-video" data-autoplay="true" data-vbtype="video">
                                                <div className="card-box-b card-shadow news-box">
                                                    <div className="img-box-bc">
                                                        <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                                        <div className="video-btn">
                                                            <div className="play-icon" >
                                                                <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3 col-lg-3">
                                            <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links-video" data-autoplay="true" data-vbtype="video">
                                                <div className="card-box-b card-shadow news-box">
                                                    <div className="img-box-bc">
                                                        <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                                        <div className="video-btn">
                                                            <div className="play-icon" >
                                                                <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </section> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="funfact-section">
                    <div className='container-fluid'>
                        <div className="blog-box-x" style={{ marginTop: '-10px' }}>
                            <div className="section-title-box text-center">
                                <h2 className="section-title text-white">{t('rekomendasi')}</h2>
                            </div>
                        </div>
                        <div className="row">
                            {posts?.length > 0 ? (
                                posts?.slice(0, 4).map((item) => (
                                    <div style={{ marginTop: '-40px', padding: '30px' }} className="col-lg-3 col-md-4 pb-2" key={item?.id}>
                                        <a href={`/agenda/${convertToSlug(item?.title)}`}>
                                            <div className="card shadow p-3 rounded card-agendas h-100" style={{ background: `#146AA4`, color: `#ffffff` }}>
                                                <div className="card-header" style={{ borderBottom: `1px solid #ffffff`, paddingBottom: `10px`, background: `#146AA4` }}><h4>{cookies.i18next === 'id' ? item.title : item.title_en}</h4></div>
                                                <div className="card-body">
                                                    <div className="card-text">{cookies.i18next === 'id' ? formatDate(item.agenda_datetime, 'id') : formatDate(item.agenda_datetime, 'en')}</div>
                                                    <div className="card-text">{dayjs(item.agenda_datetime).locale('id').format('h:mm')} WIB</div>

                                                </div>
                                                <div className="card-footer text-end" style={{ borderTop: `none`, background: `#146AA4`, color: `#ffffff` }}>
                                                    <i className="fa-solid fa-calendar "></i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))

                            ) : (
                                <p className="text-center">No posts available.</p>
                            )}
                        </div>
                        <div className="selengkapnya" data-aos="fade-down-left" style={{ textAlign: 'center', marginTop: '20px' }}>
                            <a href={`/agenda`} className="btn btn-primary btn-sm" style={{ backgroundColor: "#006699" }}>
                                Lihat Selengkapnya
                            </a>
                        </div>

                    </div>
                </section >
            </div >
        </>
    )
}

export default AgendaDetailsFix