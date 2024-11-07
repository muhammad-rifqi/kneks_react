import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import axios from 'axios';
const Elibrabry = () => {

    dayjs.locale('id');

    const { slug } = useParams();
    const [rows, setItem] = useState(null);


    const effectrun = useRef(false);
    useEffect(() => {
        if (effectrun.current === false) {
            const fetchPosts = async () => {
                try {
                    const url = process.env.REACT_APP_API_URL;
                    const endpoint = process.env.REACT_APP_API_PUSTAKA;
                    const responsei = await axios.get(`${url}${endpoint}`);
                    const foundItem = responsei.data.find(pustaka => convertToSlug(pustaka.title) === slug);

                    // throw new Error("Error!");

                    if (responsei) {
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
    }, [slug]);
    const convertToSlug = (title) => {
        if (!title) return "";
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    };
    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner-perpus">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>E-Pustaka</h3>
                        </div>
                    </div>
                </section>
                <section className="department-details-section">
                    <div className="container-sm">
                        <div className="row row-gutter-y-40">
                            <div className="col-lg-12 col-xl-6">
                                <div className="about-one-image">
                                    <img src={`${process.env.PUBLIC_URL}/assets/image/epustaka.svg`} alt="img-59" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6 d-flex align-items-center">
                                <div className="about-one-inner">

                                    <h2 className="section-title">{rows?.title}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: rows?.content }} />

                                </div>
                            </div>
                            <div className="row row-gutter-y-40">
                                <div className="col-lg-12">
                                    <button className="btn btn-primary ">Unduh <i className="fa-solid fa-download" aria-hidden="true"></i></button>
                                </div>
                            </div>
                            <div className="row row-gutter-y-40">
                                <div className="col-lg-12">
                                    <div className="card ">
                                        <div className="card-header p-3">
                                            <h3 className="fw-bold mb-0 text-primary" >List Pustaka</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Judul:</div>
                                                <div className="col-sm-6 text-primary">{rows?.title || '-'}</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Kategori:</div>
                                                <div className="col-sm-6 text-primary">
                                                    {(() => {
                                                        switch (rows?.report_category_id) {
                                                            case 1:
                                                                return "Roadmap/Masterplan";  // Or return <Roadmap /> if you want to render a component
                                                            case 2:
                                                                return "Pidato/Paparan";
                                                            case 3:
                                                                return "Kajian/Penelitian";
                                                            case 7:
                                                                return "Publikasi";
                                                            case 5:
                                                                return "Regulasi";
                                                            case 6:
                                                                return "Siaran Pers";
                                                            default:
                                                                return "";  // Return nothing if no case matches
                                                        }
                                                    })()}
                                                </div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Tanggal:</div>
                                                <div className="col-sm-6 text-primary">{dayjs(rows?.date).format("DD MMMM YYYY")} </div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Penulis:</div>
                                                <div className="col-sm-6 text-primary">{rows?.penulis || '-'}</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Penerbit:</div>
                                                <div className="col-sm-6 text-primary">{rows?.penerbit || '-'}</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Sinopsis:</div>
                                                <div className="col-sm-6 text-primary">{rows?.sinopsis || '-'}</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">ISBN:</div>
                                                <div className="col-sm-6 text-primary">{rows?.isbn || '-'}</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Jumlah Halaman:</div>
                                                <div className="col-sm-6 text-primary">{rows?.jumlah_hal || '-'}</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Lebar:</div>
                                                <div className="col-sm-6 text-primary">{rows?.lebar || '-'}</div>
                                            </div>
                                            <div className="row g-0 mb-4">
                                                <div className="col-sm-6 fw-semibold">Panjang:</div>
                                                <div className="col-sm-6 text-primary">{rows?.panjang || '-'}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Elibrabry