import React from "react";
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndustriProdukHalal = () => {
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
                            <h3>Industri Produk Halal</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section">
                    <div className="container">
                        <Row className="justify-content-center my-5">
                            <Col md={8}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/image/main.jpg`}
                                    alt="Main"
                                    style={{ width: '100%', height: 'auto', maxHeight: '50vh', objectFit: 'cover' }}
                                />
                            </Col>
                        </Row>

                        <Row className="text-center my-4">
                            <Col>
                                <h1>Direktorat Industri Produk Halal</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Col>
                        </Row>

                        <Row className="text-center my-4">
                            <Col>
                                <h2>Divisi</h2>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            {photos.map((photo, index) => (
                                <Col key={index} xs={12} sm={6} md={2} className="mb-3">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/image/${photo}`}
                                        alt={`Photo ${index + 1}`}
                                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                    />
                                </Col>
                            ))}
                        </Row>

                        <Row className="mb-4">
                            {videos.map((video, index) => (
                                <Col key={index} xs={12} sm={6} md={2} className="mb-3">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.split('/').pop()}/0.jpg`}
                                        alt={`Video ${index + 1}`}
                                        style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                                        onClick={() => handleShowModal(video)}
                                    />
                                </Col>
                            ))}
                        </Row>

                        <Row className="text-center my-4">
                            <Col>
                                <h2>Berita Terkait</h2>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            {news.map((item, index) => (
                                <Col key={index} xs={12} sm={6} md={3} className="mb-3">
                                    <Card>
                                        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/image/${item.img}`} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.date}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <Row className="text-center my-4">
                            <Col>
                                <h2>Opini Ekonomi Syariah</h2>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            {opinions.map((item, index) => (
                                <Col key={index} xs={12} sm={6} md={3} className="mb-3">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <Row className="text-center my-4">
                            <Col>
                                <h2>e-Pustaka</h2>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            {epustaka.map((item, index) => (
                                <Col key={index} xs={12} sm={6} md={3} className="mb-3">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <Row className="text-center my-4">
                            <Col>
                                <h2>Data</h2>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            {data.map((item, index) => (
                                <Col key={index} xs={12} sm={6} md={3} className="mb-3">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Video</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={modalContent} allowFullScreen title="Video"></iframe>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </section>
            </div>
        </>
    )
}

export default IndustriProdukHalal