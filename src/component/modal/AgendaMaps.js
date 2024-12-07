import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
// import { useTranslation } from "react-i18next";

const MapsModal = ({ show, handleClose, name }) => {
    // const { t } = useTranslation();
    const headerColor = "#469536";

    return (
        <Modal show={show} onHide={handleClose} size='xl'>
            <Modal.Header closeButton>
                <Modal.Title style={{ textTransform: "capitalize" }}>
                    Agenda Masp {name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-5'>
                <div className='card-body custom-card-action p-0'>
                    <div className='table-responsive'>
                        <Table
                            striped
                            bordered
                            hover
                            className='mb-0'
                            style={{
                                fontSize: "14px",
                                borderColor: headerColor,
                            }}>
                            <thead
                                style={{
                                    backgroundColor: headerColor,
                                    borderColor: headerColor,
                                    color: "#FFFFFF",
                                }}>
                                <tr>
                                    <th>Nama Agenda</th>
                                    <th className='text-center'>Kota/Kab</th>
                                    <th className='text-center'>Provinsi</th>
                                    <th className='text-center'>Agenda</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MapsModal;
