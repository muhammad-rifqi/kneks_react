import React from "react";
// import { useParams } from "react-router-dom";
// import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
// import axios from 'axios';
import VenoBox from 'venobox';


const InfoTerkiniDumiDetail = () => {
    dayjs.locale('id');

    // const { slug } = useParams();
    // const [rows, setItem] = useState(null);

    // const [itemx, setItemx] = useState([]);

    // const convertToSlug = (title) => {
    //     return title
    //         .toLowerCase()
    //         .trim()
    //         .replace(/[^\w\s-]/g, '')
    //         .replace(/\s+/g, '-')
    //         .replace(/-+/g, '-');
    // };

    new VenoBox({
        selector: '.beritaDetail',
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


    // const effectrun = useRef(false);
    // useEffect(() => {
    //     if (effectrun.current === false) {
    //         const fetchPosts = async () => {
    //             try {
    //                 const url = process.env.REACT_APP_API_URL;
    //                 const endpoint = process.env.REACT_APP_API_INFO_TERKINI;
    //                 const responsei = await axios.get(`${url}${endpoint}`);
    //                 const foundItem = responsei.data.find(kneks => convertToSlug(kneks.title) === slug);

    //                 // throw new Error("Error!");
    //                 console.log(responsei)
    //                 if (responsei) {
    //                     setItemx(responsei.data);
    //                     setItem(foundItem);
    //                 }
    //                 console.log(responsei.data)
    //                 console.log(foundItem)
    //             } catch (err) {
    //                 Swal.fire({
    //                     icon: "error",
    //                     title: "Oops...",
    //                     text: err.message || "An error occurred while fetching data.",
    //                 });
    //             }
    //         };

    //         fetchPosts();

    //         return () => {
    //             effectrun.current = true
    //         }
    //     }
    // }, [slug]);


    // const formattedDate = rows?.news_datetime ? dayjs(rows.news_datetime).format("DD MMMM YYYY") : "Tanggal tidak tersedia";
    return (
        <>
            <div className="page-wrapper">
                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Info Terkini</h3>
                        </div>
                    </div>
                </section>
                <section className="event-details-section-ber">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="event-details-content-box">
                                    <h4>Menyatukan langkah, Memajukan Negeri</h4>
                                    <p>21 Mei 2024</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="event-details-inner-box">
                                    <img src="/assets/image/berita.jpg" width={`100%`} className="img-fluid" alt="Menyatukan langkah, Memajukan Negeri" />
                                </div>
                            </div>
                            <div className="row">
                                {/* {rows?.foto_gallery && rows?.foto_gallery.length > 0 ? (
                                    rows?.foto_gallery.map((result, index) => ( */}
                                <div className="col-lg-3 pb-3" >
                                    <a href="/assets/image/berita.jpg" className="beritaDetail" data-gall="gallery01">
                                        <img
                                            src="/assets/image/berita.jpg"
                                            width="100%"
                                            style={{ height: "195px" }}
                                            className="img-fluid"
                                            alt="Menyatukan langkah, Memajukan Negeri"
                                        />
                                    </a>
                                </div>
                                <div className="col-lg-3 pb-3" >
                                    <a href="/assets/image/berita.jpg" className="beritaDetail" data-gall="gallery01">
                                        <img
                                            src="/assets/image/berita.jpg"
                                            width="100%"
                                            style={{ height: "195px" }}
                                            className="img-fluid"
                                            alt="Menyatukan langkah, Memajukan Negeri"
                                        />
                                    </a>
                                </div>
                                <div className="col-lg-3 pb-3" >
                                    <a href="/assets/image/berita.jpg" className="beritaDetail" data-gall="gallery01">
                                        <img
                                            src="/assets/image/berita.jpg"
                                            width="100%"
                                            style={{ height: "195px" }}
                                            className="img-fluid"
                                            alt="Menyatukan langkah, Memajukan Negeri"
                                        />
                                    </a>
                                </div>
                                <div className="col-lg-3 pb-3" >
                                    <a href="/assets/image/berita.jpg" className="beritaDetail" data-gall="gallery01">
                                        <img
                                            src="/assets/image/berita.jpg"
                                            width="100%"
                                            style={{ height: "195px" }}
                                            className="img-fluid"
                                            alt="Menyatukan langkah, Memajukan Negeri"
                                        />
                                    </a>
                                </div>
                                {/* ))
                                ) : ( */}
                                {/* <div className="col-lg-12 text-center ">
                                    <p className="text-white bg-danger p-2">Tidak ada foto</p>
                                </div> */}
                                {/* )} */}
                            </div>
                            <div className="col-lg-12">
                                <div className="event-details-content-box">
                                    <p style={{ textAlign: `justify` }}>Jakarta, 21 Mei 2024 - Ekonomi dan keuangan syariah (eksyar) Indonesia pada tahun 2023 melanjutkan pertumbuhan positif didorong oleh kinerja sektor unggulan Halal Value Chain (HVC) yang tumbuh sebesar 3,93% (yoy). Secara keseluruhan, sektor unggulan HVC menopang hampir 23% dari ekonomi nasional, secara berurut dikontribusikan oleh sektor Pertanian dan Makanan Minuman Halal, Pariwisata Ramah Muslim (PRM) serta Fesyen Muslim.

                                        Pada tataran global, kinerja eksyar Indonesia juga mencatatkan kenaikan peringkat State of The Global of Islamic Economic (SGIE) menjadi peringkat ketiga pada tahun ini. Demikian intisari Buku Kajian Ekonomi dan Keuangan Syariah Indonesia (KEKSI) 2023 yang mengangkat tema ”Sinergi Ekonomi dan Keuangan Syariah Memperkuat Ketahanan dan Kebangkitan Ekonomi Nasional” yang diluncurkan pada hari ini (26/2), di Jakarta. KEKSI 2023 mengulas capaian dan strategi pengembangan eksyar sepanjang tahun 2023, serta prospek dan arah kebijakan Bank Indonesia dalam mengembangkan eksyar di tahun 2024.

                                        Deputi Gubernur BI, Juda Agung, dalam peluncuran KEKSI 2023 menyampaikan bahwa Bank Indonesia memproyeksikan pada 2024 eksyar akan tumbuh sebesar 4,7%-5,5% (yoy) dengan didukung pertumbuhan pembiayaan perbankan syariah yang diprakirakan akan tumbuh pada kisaran 10%-12% (yoy). Hal ini sejalan dengan implementasi berbagai inisiatif strategis nasional seperti kewajiban sertifikasi halal sesuai mandat Undang-Undang Jaminan Produk Halal, inovasi pada sektor keuangan sosial syariah, program kolaborasi antar Kementerian dan Lembaga, serta digitalisasi eksyar yang semakin masif.

                                        Lebih lanjut, Deputi Gubernur Juda Agung menyampaikan bahwa Bank Indonesia berkomitmen melanjutkan kebijakan pengembangan eksyar untuk mendukung pertumbuhan ekonomi melalui 3 (tiga) program utama. Pertama, pengembangan sektor unggulan, khususnya sektor Makanan-Minuman Halal dan Fesyen muslim. Kedua, penguatan keuangan komersial dan sosial syariah, serta pengembangan pasar uang syariah, melalui instrumen Sukuk Bank Indonesia (SukBI) dan Sukuk Valas Bank Indonesia (SuVBI). Ketiga, peningkatan literasi melalui penyelenggaraan Festival Ekonomi Syariah (Fesyar) di tiga wilayah Indonesia mencakup Regional Sumatera, Kawasan Timur Indonesia dan Jawa dan Indonesia Sharia Economic Festival (ISEF) yang berskala internasional serta penguatan kepemimpinan di fora internasional.</p>
                                    {/* <div dangerouslySetInnerHTML={{ __html: rows?.content }} /> */}
                                </div>
                            </div>
                            <hr />
                            <div className="news-details-list-title pb-3">
                                <h4>Tags :</h4>
                            </div>
                            <div className="news-details-list-button">
                                <a href="#t" className="btn btn-primary">#Culturse</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                                <a href="#t" className="btn btn-primary">Government</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="berita-section-det">
                    <div className="container">
                        {/* <div className="row row-gutter-y-40 mb-5">
                            <div className="col-lg-12 col-xl-12">
                                <div className="about-one-inner">
                                    <div className="section-tagline">
                                        Berita Lainnya
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="row row-gutter-30">
                            {itemx.slice(0, 3).map((item) => {
                                return (
                                    <div className="col-lg-4 col-xl-4" key={item.id}>
                                        <div className="berita-card">
                                            <div className="berita-card-imgbox ">
                                                <a href={`/liputan-media/${convertToSlug(item.title)}`}> <img src={`${process.env.REACT_APP_API_NEWS}` + item.image} className="img-fluid" alt={item.title} /></a>
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
                                                    <span>{dayjs(rows.news_datetime).format("DD MMMM YYYY")}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div> */}
                    </div>
                </section>

            </div>
        </>
    )
}

export default InfoTerkiniDumiDetail