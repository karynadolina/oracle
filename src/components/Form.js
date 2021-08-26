import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const FormList = ({ open, handleChange, handleClose, newTask, handleClickOpen, addTask }) => {
    return (
        <div className="container">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add new task
            </Button>
            <Modal size="sm" show={open} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addTask}>
                        <label>
                            Name:
                            <input name="name" type="text" value={newTask.name} onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            Start date:
                            <input name="start" type="date" value={newTask.start} onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            End date:
                            <input name="end" type="date" value={newTask.end} onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            Color:
                            <select name="color" value={newTask.color} onChange={handleChange}>
                                <option value="red">Red</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                                <option value="grey">Grey</option>
                            </select>
                        </label>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addTask}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}
export default FormList