import React from "react";
import html2canvas from 'html2canvas';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Biwis = () => {



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

    return (
        <>
            <div id="dwnjpg">
                <Card className="mb-3">
                    <Card.Body>
                        <Row >
                            <Breadcrumb as={Col} className="">
                                <Breadcrumb.Item active>Biwis</Breadcrumb.Item>
                                {/* <Breadcrumb.Item active>Sertifikasi Halal UMK</Breadcrumb.Item> */}
                            </Breadcrumb>

                            {/* <Form.Group as={Col} className="align-self-center">
                                <Form.Select defaultValue="Choose...">
                                    <option>- Pilih -</option>
                                    <option>Sertifikat Halal Umk</option>
                                </Form.Select>
                            </Form.Group> */}
                        </Row>
                    </Card.Body>
                </Card>
                <div className="card stretch stretch-full">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="card-title">Biwis</h5>
                        <button onClick={downloadJPG} className="card-header-action" data-bs-toggle="tooltip" title="download"><i className="fa-solid fa-download" aria-hidden="true"></i></button>

                    </div>
                    <div className="card-body custom-card-action p-0" id="dwnjpg">
                        <iframe src="https://metabase.kneks.go.id/public/dashboard/a57b45a0-5b17-4a45-917d-e590e67d3d99" title="iframe1" width={`100%`} height="1000"
                            allowFullScreen></iframe>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Biwis