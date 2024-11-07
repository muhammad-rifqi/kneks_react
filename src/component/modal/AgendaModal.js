import React from "react";
import { Modal, Button } from "react-bootstrap";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
const AgendaModal = ({ show, handleClose, event }) => {

    if (!event) return null;
    dayjs.locale('id');
    const convertToSlug = (title) => {
        if (!title) return "";
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agenda Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>{event.title}</h5>
                <p><strong>Tanggal:</strong> {dayjs(event.agenda_datetime).format('DD MMMM YYYY') || "N/A"}</p>
                <p><strong>Jam:</strong> {dayjs(event.agenda_datetime).format('hh:mm') || "N/A"}</p>
                <a className="btn btn-primary" href={`/agenda/${convertToSlug(event.title)}`}>
                    Detail
                </a>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AgendaModal;
