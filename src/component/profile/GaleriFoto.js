import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Pagination } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const GaleriFoto = () => {
    const [photos, setPhotos] = useState([]);
    const [filteredPhotos, setFilteredPhotos] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const photosPerPage = 12; // 3 columns * 4 rows

    useEffect(() => {
        // Simulating fetching photo data
        const fetchedPhotos = [
            { id: 1, name: 'Photo 1', filename: 'berita.jpg', date: new Date('2023-01-01') },
            { id: 2, name: 'Photo 2', filename: 'berita.jpg', date: new Date('2023-02-15') },
            { id: 3, name: 'Photo 2', filename: 'berita.jpg', date: new Date('2023-02-15') },
            { id: 4, name: 'Photo 2', filename: 'berita.jpg', date: new Date('2023-02-15') },
            { id: 5, name: 'Photo 2', filename: 'berita.jpg', date: new Date('2023-02-15') },
            { id: 6, name: 'Photo 2', filename: 'berita.jpg', date: new Date('2023-02-15') },
            { id: 7, name: 'Photo 2', filename: 'berita.jpg', date: new Date('2023-02-15') },
            { id: 8, name: 'Photo 2', filename: 'berita.jpg', date: new Date('2023-02-15') },
            { id: 9, name: 'Photo 2', filename: 'berita.jpg', date: new Date('2023-02-15') },
            { id: 10, name: 'Photo 2', filename: 'berita.jpg', date: new Date('2023-02-15') },
            { id: 11, name: 'Photo 2', filename: 'berita.jpg', date: new Date('2023-02-15') },
            { id: 12, name: 'Photo 2', filename: 'berita.jpg', date: new Date('2023-02-15') },
            // ... add more photos
        ];
        setPhotos(fetchedPhotos);
        setFilteredPhotos(fetchedPhotos);
    }, []);

    const filterPhotos = () => {
        if (startDate && endDate) {
            const filtered = photos.filter(photo =>
                photo.date >= startDate && photo.date <= endDate
            );
            setFilteredPhotos(filtered);
            setCurrentPage(1);
        }
    };

    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div class="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Galeri Foto</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section">
                    <Container>
                        <Row className="mb-3">
                            <Col md={4}>
                                <DatePicker
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    placeholderText="Start Date"
                                    className="form-control"
                                />
                            </Col>
                            <Col md={4}>
                                <DatePicker
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                    placeholderText="End Date"
                                    className="form-control"
                                />
                            </Col>
                            <Col md={4}>
                                <Button onClick={filterPhotos}>Filter</Button>
                            </Col>
                        </Row>

                        <Row>
                            {currentPhotos.map(photo => (
                                <Col key={photo.id} xs={12} sm={6} md={4} className="mb-4">
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={`${process.env.PUBLIC_URL}/assets/image/${photo.filename}`}
                                            alt={photo.name}
                                        />
                                        <Card.Body>
                                            <Card.Title>{photo.name}</Card.Title>
                                            <Card.Text>{photo.date.toDateString()}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <Row className="mt-3">
                            <Col className="d-flex justify-content-center">
                                <Pagination>
                                    {[...Array(Math.ceil(filteredPhotos.length / photosPerPage))].map((_, index) => (
                                        <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                            {index + 1}
                                        </Pagination.Item>
                                    ))}
                                </Pagination>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default GaleriFoto