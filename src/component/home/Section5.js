import React, { useState } from "react"
import Card from 'react-bootstrap/Card';
import Bi from './dashboard/Bi'
import Bpjph from './dashboard/Bpjph'
import KemenkoPmk from './dashboard/KemenkoPmk'
import Kneks from './dashboard/Kneks'
import Ojk from './dashboard/Ojk'
import Blank from './dashboard/Blank'

const Section5 = () => {


    const [isActive, setIsActive] = useState("BI");

    // Step 2: Fungsi untuk menangani klik dan mengubah status aktif
    const handleClick = (index) => {
        setIsActive(index);
    };

    return (
        <section className="funfact-section" >
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-3">
                        <Card className="bg-dark text-white mb-2 text-center">
                            <Card.Body>
                                <h3 className="text-white">DASHBOARD</h3>
                                <Card.Text style={{ fontSize: `14px` }}>
                                    Event Ekonomi dan Keuangan Syariah 2024
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card >
                            <Card.Header className="p-3">
                                Pengelola
                            </Card.Header>
                            <Card.Body>
                                <div className="sidebar">
                                    <div className="sidebar-widget-list-inner">
                                        <ul>
                                            {['BI', 'BPJPH', 'KemenkoPMK', 'KNEKS', 'OJK', '(blank)'].map((item, index) => (
                                                <li key={index} onClick={() => handleClick(item)} className={isActive === item ? 'active' : ''}>
                                                    <a href="#t">{item}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {isActive === "BI" && <Bi />}
                    {isActive === "BPJPH" && <Bpjph />}
                    {isActive === "KemenkoPMK" && <KemenkoPmk />}
                    {isActive === "KNEKS" && <Kneks />}
                    {isActive === "OJK" && <Ojk />}
                    {isActive === "(blank)" && <Blank />}
                </div>
            </div>
        </section >
    )
}

export default Section5