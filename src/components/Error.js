import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Error = ({ open, deleteTask, handleClose }) => {
    return (
        <div className="container">
            <Button variant="outlined" color="primary" onClick={deleteTask}>
                Delete
            </Button>
            <Modal size="sm" show={open} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Something went wrong...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                Please choose a Task!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}
export default Error