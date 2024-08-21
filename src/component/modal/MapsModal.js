import React from "react";
import { Modal, Button } from "react-bootstrap";

const MapsModal = ({ show, handleClose }) => {
    // if (!event) return null;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Event Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <h5>{event.title}</h5>
                <h5>{event.id}</h5>
                <p><strong>Start:</strong> {event.startStr}</p>
                <p><strong>End:</strong> {event.endStr || "N/A"}</p>
                <p><strong>All Day:</strong> {event.allDay ? "Yes" : "No"}</p>
                <a className="btn btn-primary" href="/agenda/detail">
                    Detail
                </a> */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MapsModal;
