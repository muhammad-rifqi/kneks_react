import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SiaranPers = () => {
    const [startDate, setStartDate] = useState(null);

    const photos = [
        { id: 1, src: 'https://via.placeholder.com/300x200', tags: 'nature, landscape', title: 'Beautiful Landscape', date: '2023-07-01' },
        { id: 2, src: 'https://via.placeholder.com/300x200', tags: 'nature, landscape', title: 'Beautiful Landscape', date: '2023-07-01' },
        { id: 3, src: 'https://via.placeholder.com/300x200', tags: 'nature, landscape', title: 'Beautiful Landscape', date: '2023-07-01' },
        { id: 4, src: 'https://via.placeholder.com/300x200', tags: 'nature, landscape', title: 'Beautiful Landscape', date: '2023-07-01' },
        { id: 5, src: 'https://via.placeholder.com/300x200', tags: 'nature, landscape', title: 'Beautiful Landscape', date: '2023-07-01' },
        { id: 6, src: 'https://via.placeholder.com/300x200', tags: 'nature, landscape', title: 'Beautiful Landscape', date: '2023-07-01' },
        { id: 7, src: 'https://via.placeholder.com/300x200', tags: 'nature, landscape', title: 'Beautiful Landscape', date: '2023-07-01' },
        { id: 8, src: 'https://via.placeholder.com/300x200', tags: 'nature, landscape', title: 'Beautiful Landscape', date: '2023-07-01' },
        { id: 9, src: 'https://via.placeholder.com/300x200', tags: 'nature, landscape', title: 'Beautiful Landscape', date: '2023-07-01' },
    ]

    return (
        <>
            <div class="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>Siaran Pers</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section">
                    <div className="container">
                        <Row className="mb-4">
                            <Col md={4} className="mx-auto">
                                <Form.Group>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        customInput={
                                            <Form.Control
                                                type="text"
                                                placeholder="Filter by date"
                                            />
                                        }
                                    />
                                    <FontAwesomeIcon icon={faCalendar} className="position-absolute top-50 end-0 translate-middle-y me-2" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row xs={1} sm={2} md={3} className="g-4">
                            {photos.map((photo) => (
                                <Col key={photo.id}>
                                    <Card>
                                        <Card.Img variant="top" src={photo.src} />
                                        <Card.Body>
                                            <Card.Title>{photo.title}</Card.Title>
                                            <Card.Text>
                                                <small className="text-muted">{photo.tags}</small>
                                            </Card.Text>
                                            <Card.Text>
                                                <small className="text-muted">{photo.date}</small>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SiaranPers