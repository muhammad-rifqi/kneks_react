import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
const TeamMembers = () => {}
    const members = [
      { name: "John Doe", position: "CEO", image: "/assets/image/contoh-profile.png" },
      { name: "Jane Smith", position: "CTO", image: "/assets/image/contoh-profile.png" },
      { name: "Mike Johnson", position: "CFO", image: "/assets/image/contoh-profile.png" },
      { name: "Sarah Williams", position: "COO", image: "/assets/image/contoh-profile.png" },
      { name: "Alex Brown", position: "Marketing Director", image: "/assets/image/contoh-profile.png" },
      { name: "Emily Davis", position: "HR Manager", image: "/assets/image/contoh-profile.png" },
      { name: "Chris Wilson", position: "Sales Manager", image: "/assets/image/contoh-profile.png" },
      { name: "Lisa Taylor", position: "Product Manager", image: "/assets/image/contoh-profile.png" }
    ];

const StrukturOrganisasi = () => {
    return (
        <>
           <div class="page-wrapper">
            
            <section className="page-banner">
                <div className="container">
                    <div className="page-banner-title">
                        <h3>Struktur Organisasi</h3>
                    </div>
                </div>
            </section>
            <section className="about-one-section">
                <div className="container">
                    <div className="row row-gutter-y-40">
                    <img src="/assets/image/contoh-chart.png" alt="Deskripsi gambar" />
                        <div className="col-lg-12 col-xl-12">
                            <div className="about-one-inner">
                                <h2 className="section-title">Manajemen Eksekutif</h2>
                                <Row>
                                {members.map((member, index) => (
                                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 text-center">
                                    <Image src={member.image} roundedCircle fluid className="mb-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                    <h1 className="h4">{member.name}</h1>
                                    <p className="text-muted">{member.position}</p>
                                </Col>
                                ))}
                            </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

export default StrukturOrganisasi