import React from "react";
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const JasakeuanganSyariah = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [modalContent, setModalContent] = React.useState('');

    const handleShowModal = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    const photos = [
        'berita.jpg', 'berita.jpg', 'berita.jpg', 'berita.jpg', 'berita.jpg'
    ];

    const videos = [
        'https://www.youtube.com/embed/4k6Xgjqkad4?si=q_VtC-e0sxFB4Ute',
        'https://www.youtube.com/embed/4k6Xgjqkad4?si=q_VtC-e0sxFB4Ute',
        'https://www.youtube.com/embed/4k6Xgjqkad4?si=q_VtC-e0sxFB4Ute',
        'https://www.youtube.com/embed/4k6Xgjqkad4?si=q_VtC-e0sxFB4Ute',
        'https://www.youtube.com/embed/4k6Xgjqkad4?si=q_VtC-e0sxFB4Ute'
    ];

    const news = [
        { img: 'berita.jpg', title: 'Berita 1', date: '2023-01-01' },
        { img: 'berita.jpg', title: 'Berita 2', date: '2023-02-15' },
        { img: 'berita.jpg', title: 'Berita 3', date: '2023-03-20' },
        { img: 'berita.jpg', title: 'Berita 4', date: '2023-04-10' }
    ];

    const opinions = [
        { title: 'Opini 1', url: 'https://example.com/opini1' },
        { title: 'Opini 2', url: 'https://example.com/opini2' },
        { title: 'Opini 3', url: 'https://example.com/opini3' },
        { title: 'Opini 4', url: 'https://example.com/opini4' }
    ];

    const epustaka = [
        { title: 'e-Pustaka 1', url: 'https://example.com/epustaka1' },
        { title: 'e-Pustaka 2', url: 'https://example.com/epustaka2' },
        { title: 'e-Pustaka 3', url: 'https://example.com/epustaka3' },
        { title: 'e-Pustaka 4', url: 'https://example.com/epustaka4' }
    ];

    const data = [
        { title: 'Data 1', url: 'https://example.com/data1' },
        { title: 'Data 2', url: 'https://example.com/data2' },
        { title: 'Data 3', url: 'https://example.com/data3' },
        { title: 'Data 4', url: 'https://example.com/data4' }
    ];
    
    return (
        <>
        <div class="page-wrapper">
            
            <section className="page-banner">
                <div className="container">
                    <div className="page-banner-title">
                        <h3>Jasa keuangan Syariah</h3>
                    </div>
                </div>
            </section>
            <section className="about-one-section">
                <div className="container">
                    <div className="row row-gutter-y-40">
                        <div className="col-lg-12 col-xl-6">
                            <div className="about-one-inner">
                                <div className="section-tagline">
                                    Our introductions
                                </div>
                                <h2 className="section-title">Welcome to Mexican City Municipal Council</h2>
                                <p>Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.</p>
                                <h5 className="about-one-inner-text">Denounce with righteous indignation and dislike men who are so beguiled & demoralized our power.</h5>
                                <div className="row row-gutter-y-30">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-one-card">
                                            <div className="about-one-card-number">01</div>
                                            <div className="about-one-card-content"><h5>Going Above and Beyond</h5></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-one-card">
                                            <div className="about-one-card-number">02</div>
                                            <div className="about-one-card-content"><h5>Committed to People First</h5></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                            <div className="about-one-image">
                                <img src="assets/image/shapes/shape-1.png" className="floated-image-one" alt="img-58" />
                                <img src="assets/image/gallery/about-7.jpg" alt="img-59" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

export default JasakeuanganSyariah