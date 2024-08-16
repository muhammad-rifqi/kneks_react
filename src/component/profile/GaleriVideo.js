import React,{useEffect} from "react";
import VenoBox from 'venobox';
const GaleriVideo = () => {
    useEffect(() => {
        new VenoBox({
            selector: '.my-image-links',
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
    }, []);
    return (
        <>
            <div className="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Galeri Video</h3>
                        </div>
                    </div>
                </section>
                <section className="video-section">
                    <div className="container">
                        <div className="row row-gutter-y-40">
                            <div className="col-md-4 col-lg-4">
                                <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links" data-autoplay="true" data-vbtype="video">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-bc">
                                            <img src="/assets/image/berita2.jpeg" alt="imgNews" className="img-b img-fluid" />
                                            <div className="video-btn">
                                                <div className="play-icon" >
                                                    <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b">

                                                <div className="card-title-b">
                                                    <h2 className="title-2 text-white">
                                                        Travel is comming
                                                        new
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links" data-autoplay="true" data-vbtype="video">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-bc">
                                            <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                            <div className="video-btn">
                                                <div className="play-icon" >
                                                    <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b">

                                                <div className="card-title-b">
                                                    <h2 className="title-2 text-white">
                                                        Travel is comming
                                                        new
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links" data-autoplay="true" data-vbtype="video">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-bc">
                                            <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                            <div className="video-btn">
                                                <div className="play-icon" >
                                                    <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b">

                                                <div className="card-title-b">
                                                    <h2 className="title-2 text-white">
                                                        Travel is comming
                                                        new
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="my-image-links" data-autoplay="true" data-vbtype="video">
                                    <div className="card-box-b card-shadow news-box">
                                        <div className="img-box-bc">
                                            <img src="/assets/image/berita.jpg" alt="imgNews" className="img-b img-fluid" />
                                            <div className="video-btn">
                                                <div className="play-icon" >
                                                    <img src="/assets/image/play-circle.svg" alt="imgplay" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-overlay">
                                            <div className="card-header-b">

                                                <div className="card-title-b">
                                                    <h2 className="title-2 text-white">
                                                        Travel is comming
                                                        new
                                                    </h2>
                                                </div>
                                                <div className="card-date">
                                                    <span className="date-b">18 Sep. 2017</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default GaleriVideo