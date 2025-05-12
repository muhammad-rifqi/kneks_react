import React from "react";
import html2canvas from 'html2canvas';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Beranda = () => {



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
                {/* <Card className="mb-3 hidden">
                    <Card.Body>
                        <Row >
                            <Breadcrumb as={Col} className="">
                                <Breadcrumb.Item active>Aktivitas Usaha Syariah</Breadcrumb.Item>
                               
                            </Breadcrumb>

                        
                        </Row>
                    </Card.Body>
                </Card> */}
                <div className="card stretch stretch-full">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="card-title">Beranda</h5>
                        {/* <button onClick={downloadJPG} className="card-header-action" data-bs-toggle="tooltip" title="download"><i className="fa-solid fa-download" aria-hidden="true"></i></button> */}

                    </div>
                    <div className="card-body custom-card-action p-0" id="dwnjpg">
                        <iframe src="https://metabase.kneks.go.id/public/dashboard/f85c27c5-89f1-42b8-bace-543b335ae4e2" title="iframe1" width={`100%`} height="1000"
                            allowFullScreen></iframe>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Beranda;