import React, { Component, useState } from "react";
import Form from './Form'
import Error from './Error'
import TimeLine from "react-gantt-timeline";
import "../App.css";

const Gant = () => {
    let d1 = new Date();
    d1.setDate(d1.getDate());
    let d2 = new Date();
    d2.setDate(d2.getDate() + 5);
    let d3 = new Date();
    d3.setDate(d3.getDate() + 8);
    let d4 = new Date();
    d4.setDate(d4.getDate() + 20);
    let data = [
        {
            id: 1,
            start: d1,
            end: d2,
            name: "Demo Task 1",
            color: "brown"
        },
        {
            id: 2,
            start: d3,
            end: d4,
            name: "Demo Task 2",
            color: "orange"
        }
    ];

    const [open, setOpen] = React.useState(false);
    const [err, setErr] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState('');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const onSelectItem = item => {

        setSelectedItem(item);
    };

    const handleClose = () => {
        setOpen(false);
        setErr(false);
    };

    const [dates, setDates] = useState(data)
    const [newTask, setNewTask] = React.useState({
        id: dates.length + 1,
        start: '2021-08-12',
        end: '2021-08-14',
        name: "New Task",
        color: 'red'
    });
    const addTask = () => {
        setDates([newTask, ...dates]);
        setOpen(false);
    };

    const handleChange = (event) => {
        console.log(event.target.value)
        setNewTask({ ...newTask, [event.target.name]: event.target.value })
    }

    const onUpdateTask = (item, props) => {
        item.start = props.start ? props.start : item.start;
        item.end = props.end ? props.end : item.end;
        item.name = props.name ? props.name : item.name;
        setDates([...dates]);
    };

    const deleteTask = () => {
        console.log(selectedItem)
        if(selectedItem){
        const newData = dates.filter((item) => item.id !== selectedItem.id)
        setDates([...newData]);
        } else {
            setErr(true)
        }
      };

    return (
        <div className="app-container">
            {/* <h1>My testing project </h1> */}
            <div className="time-line-container">
                
                <Form handleClickOpen={handleClickOpen} newTask={newTask} handleChange={handleChange} handleClose={handleClose} open={open} addTask={addTask} />
                <Error handleClose={handleClose} open={err} deleteTask={deleteTask} />
                <TimeLine onUpdateTask={onUpdateTask} onSelectItem={onSelectItem} selectedItem={selectedItem} data={dates} />
            </div>
        </div>
    );

}
export default Gant
