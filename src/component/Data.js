import React, { useEffect, useState } from "react";
// import Iph from '../component/DataTab/Iph'
// import Jks from '../component/DataTab/Jks'
// import Kss from '../component/DataTab/Kss'
// import Biwis from '../component/DataTab/Biwis'
// import Insis from '../component/DataTab/Insis'
// import AktivitasUsahaSyariah from '../component/DataTab/aktivitasUsahaSyariah'
// import Beranda from '../component/DataTab/Beranda'
// import PercepatanExport from "./DataTab/PercepatanExport";
// import Rph from '../component/DataTab/Rph'
import Swal from "sweetalert2";
import dayjs from "dayjs";
import "dayjs/locale/id";
import axios from "axios";
import { useCookies } from 'react-cookie';
import './cssCustom.css'; // Import file CSS kustom
import { Accordion, Card, ListGroup } from 'react-bootstrap';
// import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const Data = () => {
    const [cookies] = useCookies(['i18next']);
    dayjs.locale('id');
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const nilai_awal_selected = "https://metabase.kneks.go.id/public/dashboard/f85c27c5-89f1-42b8-bace-543b335ae4e2";
    const title_awal_selected = cookies.i18next === 'en' ? 'Executive Dashboard' : 'Dashboard Eksekutif';
    const [selectedSection, setSelectedSection] = useState(nilai_awal_selected);
    const [selectedTitle, setTitleSection] = useState(title_awal_selected);
    const [narasi, setSubNarations] = useState("");
    const fetchCategories = async () => {
        const url = process.env.REACT_APP_API_URL;
        const response = await axios.get(`${url}/data_menu_fe`);
        return response.data
    };
    console.log(`sc`, narasi)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchCategories();
                setCategories(data);
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
        fetchData();
    }, []);

    // 1: Rph,
    // const componentMap = {
    //     1: Iph,
    //     2: Jks,
    //     3: Kss,
    //     4: Biwis,
    //     5: Insis,
    //     6: AktivitasUsahaSyariah,
    //     7: Beranda,
    //     8: PercepatanExport
    // };

    // const renderContent = () => {
    //     if (loading) {
    //         return (
    //             <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    //                 <div className="spinner-border text-primary" role="status">
    //                     <span className="visually-hidden">Loading...</span>
    //                 </div>
    //             </div>
    //         );
    //     }
    // const Component = componentMap[selectedSection];
    // return Component ? <Component /> : <p>Pilih kategori untuk melihat konten.</p>;
    // };

    const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch(process.env.REACT_APP_API_URL + '/sourcesdata')
    //         .then(resp => resp.json())
    //         .then((rows) => {
    //             setData(rows)
    //         })
    // })

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/sourcesdata')
            .then(resp => {
                if (!resp.ok) {
                    throw new Error(`HTTP error! status: ${resp.status}`);
                }
                return resp.json();
            })
            .then((rows) => {
                setData(rows);
            })
            .catch((error) => {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,

                });
            });
    }, []);

    const showPanel = () => {
        document.getElementById("sidepanels").style.display = 'block';
        document.getElementById("dwnjpg").className = 'col-lg-9';
    }

    const hidePanel = () => {
        document.getElementById("sidepanels").style.display = 'none';
        document.getElementById("dwnjpg").className = 'col-lg-12';
    }

    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadType, setDownloadType] = useState('pdf'); // 'png' or 'pdf'

    const downloadJPG = async (events) => {
        try {
            setIsDownloading(true);
            const response = await fetch(process.env.REACT_APP_API_URL + '/post_puppeteer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "domain": events,
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const output = await response.json();
            const link = document.createElement('a');
            link.href = output?.ss;
            link.download = `screenshot_${Date.now()}.${downloadType}`;

            if (downloadType === 'pdf') {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.src = output?.ss;
                img.onload = () => {
                    const pdf = new jsPDF({
                        orientation: img.width > img.height ? 'landscape' : 'portrait',
                        unit: 'px',
                        format: [img.width, img.height]
                    });
                    pdf.addImage(img, 'PNG', 0, 0, img.width, img.height);
                    if (narasi === "" || narasi === "null" || narasi === "-") {
                        pdf.save(`screenshot_${Date.now()}.pdf`);
                        Swal.fire({
                            icon: "success",
                            title: cookies.i18next === 'en' ? "Success!" : "Berhasil!",
                            text: cookies.i18next === 'en' ? "PDF has been downloaded successfully." : "PDF telah berhasil diunduh.",
                            timer: 2000,
                            showConfirmButton: false
                        });
                        setIsDownloading(false);
                    } else {
                        pdf.addPage();
                        const margin = 40;
                        const pageWidth = pdf.internal.pageSize.getWidth();
                        const pageHeight = pdf.internal.pageSize.getHeight();
                        const maxWidth = pageWidth - 2 * margin;
                        let cursorY = margin;
                        const lineHeight = 20;
                        const textLines = pdf.splitTextToSize(narasi, maxWidth);
                        textLines.forEach(line => {
                            if (cursorY + lineHeight > pageHeight - margin) {
                                pdf.addPage();
                                cursorY = margin;
                            }
                            pdf.text(line, margin, cursorY);
                            cursorY += lineHeight;
                        });
                        pdf.save(`screenshot_${Date.now()}.pdf`);
                        Swal.fire({
                            icon: "success",
                            title: cookies.i18next === 'en' ? "Success!" : "Berhasil!",
                            text: cookies.i18next === 'en' ? "PDF has been downloaded successfully." : "PDF telah berhasil diunduh.",
                            timer: 2000,
                            showConfirmButton: false
                        });
                        setIsDownloading(false);
                    }
                };
            } else {
                link.click();
                Swal.fire({
                    icon: "success",
                    title: cookies.i18next === 'en' ? "Success!" : "Berhasil!",
                    text: cookies.i18next === 'en' ? "Image has been downloaded successfully." : "Gambar telah berhasil diunduh.",
                    timer: 2000,
                    showConfirmButton: false
                });
                setIsDownloading(false);
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
            });
            setIsDownloading(false);
        }
    };

    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container-fluid">
                        <div className="page-banner-title">
                            <h3>Data</h3>
                        </div>
                    </div>
                </section>
                <section className="department-details-section" >
                    <div className="container-lg">
                        <p> <button className="btn btn-success" onClick={showPanel}> {cookies.i18next === 'en' ? 'open menu' : 'buka menu'} </button> &nbsp; &nbsp; <button className="btn btn-success" onClick={hidePanel}> {cookies.i18next === 'en' ? 'close menu' : 'tutup menu'} </button> </p>
                        <div className="row">
                            <div className="col-12 col-lg-3 col-xl-3" id="sidepanels">
                                {loading ? (
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <div key={index} className="skeletonxx"></div>
                                    ))
                                ) : (

                                    <Accordion defaultActiveKey={0} >
                                        {categories.map(category => (
                                            category.data_submenu && category.data_submenu.length > 0 ? (
                                                <Card bg="white" text="dark" className="mb-3 border-2" key={category.id} >
                                                    <Accordion.Item as={Card.Header} eventKey={category?.id} >
                                                        <Accordion.Header >{cookies.i18next === 'en' ? category?.title_en : category?.title}</Accordion.Header>
                                                    </Accordion.Item>
                                                    <Accordion.Collapse eventKey={category?.id}>
                                                        <Card.Body>
                                                            <ListGroup variant="flush">
                                                                {category.data_submenu.map((submenu) => (
                                                                    <ListGroup.Item action variant="white" className="pb-3 pt-3" key={submenu.id}
                                                                        onClick={() => {
                                                                            const child_text = cookies.i18next === 'en' ? submenu.long_name_en : submenu.long_name;
                                                                            const naration_subtext = cookies.i18next === 'en' ? submenu.sub_narations_en : submenu.sub_narations;
                                                                            // if (submenu.id_statistic === 2) {
                                                                            //     setSelectedSection(1);
                                                                            // } else if (submenu.id_statistic === 3) {
                                                                            //     setSelectedSection(2);
                                                                            // } else if (submenu.id_statistic === 4) {
                                                                            //     setSelectedSection(3);
                                                                            // } else if (submenu.id_statistic === 5 && submenu.id === 7) {
                                                                            //     setSelectedSection(4);
                                                                            // } else if (submenu.id_statistic === 5 && submenu.id === 9) {
                                                                            //     setSelectedSection(8);
                                                                            // } else if (submenu.id_statistic === 8) {
                                                                            //     setSelectedSection(5);
                                                                            // }
                                                                            setSelectedSection(submenu.link_data)
                                                                            setTitleSection(child_text);
                                                                            setSubNarations(naration_subtext)
                                                                        }}
                                                                    >

                                                                        <div>
                                                                            <label htmlFor="cv-mentor" style={{ cursor: 'pointer' }} >
                                                                                {cookies.i18next === 'en' ? submenu.short_name_en : submenu.short_name}
                                                                            </label>
                                                                        </div>


                                                                    </ListGroup.Item>
                                                                ))}
                                                            </ListGroup>
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            ) : (
                                                <ListGroup.Item action variant="white" className="mb-3 border-2"
                                                    onClick={() => {
                                                        const parent_text = cookies.i18next === 'en' ? category.long_title_en : category.long_title;
                                                        const naration_text = cookies.i18next === 'en' ? category.narations_menu_en : category.narations_menu;

                                                        // if (category.id === 10) {
                                                        //     setSelectedSection("https://metabase.kneks.go.id/public/dashboard/f85c27c5-89f1-42b8-bace-543b335ae4e2")
                                                        //     setTitleSection("Beranda")
                                                        // } else if (category.id === 9) {
                                                        //     setSelectedSection("https://metabase.kneks.go.id/public/dashboard/b0bedf29-1481-40db-938b-e2ce37ee6da9");
                                                        //     setTitleSection("Aktivitas Usaha Syariah")
                                                        // }
                                                        // } if (category.id === 3) {
                                                        //     setSelectedSection(3);
                                                        // } if (category.id === 4) {
                                                        //     setSelectedSection(4);
                                                        // } if (category.id === 5) {
                                                        //     setSelectedSection(5);
                                                        // } if (category.id === 9) {
                                                        //     setSelectedSection(6);
                                                        // } if (category.id === 10) {
                                                        //     setSelectedSection(7);
                                                        // }
                                                        // console.log(selectedSection)
                                                        if (category.link_menu_data === null || category.link_menu_data === undefined) {
                                                            setSelectedSection("")
                                                            setTitleSection(parent_text)
                                                            setSubNarations(naration_text)
                                                        } else {
                                                            setSelectedSection(category.link_menu_data)
                                                            setTitleSection(parent_text)
                                                            setSubNarations(naration_text)
                                                        }
                                                    }}
                                                    style={{
                                                        padding: `1.3rem 1.8rem`,
                                                    }}
                                                >
                                                    {cookies.i18next === 'en' ? category?.title_en : category?.title}
                                                </ListGroup.Item>
                                            )))}
                                    </Accordion>

                                )}
                            </div>


                            <div className="col-lg-9" id="dwnjpg">
                                {/* {renderContent()} */}
                                {/* {console.log(selectedSection)} */}
                                <div id="dwnjpg">

                                    <div className="card stretch stretch-full">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <h5 className="card-title">{selectedTitle}</h5>
                                            <button
                                                onClick={() => downloadJPG(selectedSection)}
                                                className="card-header-action"
                                                data-bs-toggle="tooltip"
                                                title="download"
                                                disabled={isDownloading}
                                                style={{
                                                    transition: 'all 0.3s ease-in-out',
                                                    opacity: isDownloading ? 0.7 : 1
                                                }}
                                            >
                                                <i
                                                    className={`fa-solid ${isDownloading ? 'fa-spinner fa-spin' : 'fa-download'}`}
                                                    aria-hidden="true"
                                                    style={{
                                                        transition: 'transform 0.3s ease-in-out',
                                                        transform: isDownloading ? 'scale(1.1)' : 'scale(1)'
                                                    }}
                                                />
                                            </button>
                                        </div>
                                        <div className="card-body custom-card-action p-0" id="dwnjpg">
                                            {/* <iframe id="download_frame" src={selectedSection} title="iframe1" width={`100%`} height="1000"
                                                allowFullScreen></iframe> */}
                                            <iframe id="download_frame" src="assets/image/frame.png" title="iframe1" width={`100%`} height="1000"
                                                allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-12 pt-5">
                                    <style jsx>{`
                                        .narasi-content {
                                            white-space: pre-wrap;
                                            word-wrap: break-word;
                                            line-height: 1.6;
                                            font-size: 1rem;
                                        }
                                        .narasi-content p {
                                            margin-bottom: 1rem;
                                        }
                                        .skeleton-loading {
                                            width: 100%;
                                        }
                                        .skeleton-line {
                                            height: 15px;
                                            margin: 10px 0;
                                            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                                            background-size: 200% 100%;
                                            animation: loading 1.5s infinite;
                                            border-radius: 4px;
                                        }
                                        @keyframes loading {
                                            0% {
                                                background-position: 200% 0;
                                            }
                                            100% {
                                                background-position: -200% 0;
                                            }
                                        }
                                    `}</style>
                                    <div className="about-one-inner-x border p-3 rounded mb-4">
                                        {loading ? (
                                            <div className="skeleton-loading">
                                                <div className="skeleton-line"></div>
                                                <div className="skeleton-line"></div>
                                                <div className="skeleton-line"></div>
                                            </div>
                                        ) : (
                                            <div
                                                className="mt-3 text-start narasi-content"
                                                dangerouslySetInnerHTML={{
                                                    __html: narasi ? narasi : '-'
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="col-lg-12 pt-5">
                                    <div className="about-one-inner-x">
                                        <div className="text-start">
                                            <h5 >Sumber Data</h5>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-hover mb-0" style={{ fontSize: `14px` }}>
                                                <thead>
                                                    <tr>
                                                        <th>Dataset</th>
                                                        <th className="text-center">Produsen Data</th>
                                                        <th className="text-center">Tanggal Pembaharuan Data</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data?.map((items, index) => {
                                                            return (
                                                                <tr key={items?.id}>
                                                                    <td><a href={`/data/${items?.id}`}>{items?.dataset}</a></td>
                                                                    <td className="text-center">{items?.source}</td>
                                                                    <td className="text-center">

                                                                        {dayjs(
                                                                            items?.date_created
                                                                        ).format(
                                                                            "DD MMMM YYYY"
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
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

export default Data