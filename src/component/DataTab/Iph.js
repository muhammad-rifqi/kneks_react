import React from "react";
import html2canvas from 'html2canvas';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Iph = () => {



    const downloadJPG = () => {
        html2canvas(document.querySelector("#dwnjpg")).then(canvas => {
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            const link = document.createElement('a');
            link.href = imgData;
            link.download = 'payment-records-chart.jpg';

            // Trigger the download
            link.click();
        });
    };

    const handleChange = (e) => {
        document.getElementById("mtbs").setAttribute("src", e.target.value);
    }
    return (
        <>
            <div id="dwnjpg">
                <Card className="mb-3">
                    <Card.Body>
                        <Row >
                            <Breadcrumb as={Col} className="">
                                <Breadcrumb.Item href="#">IPH</Breadcrumb.Item>
                                <Breadcrumb.Item active>Sertifikasi Halal UMK</Breadcrumb.Item>
                            </Breadcrumb>

                            <Form.Group as={Col} className="align-self-center">
                                <Form.Select defaultValue="Choose..." onChange={ e => handleChange(e) }>
                                    <option value="00">- Pilih -</option>
                                    <option value="https://metabase.kneks.go.id/public/dashboard/7caec5a5-4e6f-45c2-8d38-00286d5dc3ed">Sertifikat Halal Umk</option>
                                    <option value="https://metabase.kneks.go.id/public/dashboard/246d5269-bb1d-4444-ad43-798777951414">Sertifikat Halal Umk 2022</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Card.Body>
                </Card>
                <div className="card stretch stretch-full">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="card-title">Sertifikat Halal UMK</h5>
                        <button onClick={downloadJPG} className="card-header-action" data-bs-toggle="tooltip" title="download"><i className="fa-solid fa-download" aria-hidden="true"></i></button>

                    </div>
                    <div className="card-body custom-card-action p-0" id="dwnjpg">
                        <iframe id="mtbs" src="https://metabase.kneks.go.id/public/dashboard/7caec5a5-4e6f-45c2-8d38-00286d5dc3ed" title="iframe1" width={`100%`} height="1000"
                            allowFullScreen></iframe>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Iph