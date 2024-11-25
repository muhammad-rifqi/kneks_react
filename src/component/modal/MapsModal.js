import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const MapsModal = ({ show, handleClose, item, name }) => {
    const { t } = useTranslation();
    const headerColor = "#469536";

    return (
        <Modal show={show} onHide={handleClose} size='xl'>
            <Modal.Header closeButton>
                <Modal.Title style={{ textTransform: "capitalize" }}>
                    Zona Khas {name}
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
                                    <th>Nama Zona khas</th>
                                    <th className='text-center'>Kota/Kab</th>
                                    <th className='text-center'>Provinsi</th>
                                    <th className='text-center'>Peresmian</th>
                                    <th className='text-center'>
                                        Jumlah Tenant
                                    </th>
                                    <th className='text-end'>Diresmikan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item && item?.zonakhas.length > 0 ? (
                                    item.zonakhas.map((el, index) => (
                                        <tr
                                            key={index}
                                            style={{
                                                backgroundColor:
                                                    index % 2 === 0
                                                        ? "#dbead5"
                                                        : "#FFFFFF",
                                                color: "#000000",
                                                borderColor: headerColor,
                                            }}>
                                            <td>{el.khas_zone}</td>
                                            <td className='text-center'>
                                                {el.city}
                                            </td>
                                            <td className='text-center'>
                                                {el.province_names}
                                            </td>
                                            <td className='text-center'>
                                                {el.inauguration}
                                            </td>
                                            <td className='text-center'>
                                                {el.tenant}
                                            </td>
                                            <td>{el.inaugurated}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan='6'
                                            style={{
                                                textAlign: "center",
                                                padding: "20px",
                                                borderColor: headerColor,
                                                fontStyle: "italic",
                                            }}>
                                            {t("tidakAdaData")}
                                        </td>
                                    </tr>
                                )}
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
