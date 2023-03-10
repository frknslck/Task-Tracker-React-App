import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function AddTask({handleTasks}) {
    const [taskName, setTaskName] = useState("");
    const [taskDate, setTaskDate] = useState("");

    const handleNewTask = (e) => {
        e.preventDefault();
        const task = {taskName, taskDate, id: new Date().valueOf()};
        handleTasks(task);
        setTaskName("");
        setTaskDate("");
    };
  return (
        <Form onSubmit={handleNewTask} className="border p-3">
            <Form.Group className="mb-3" controlId="name">
                <Form.Label className='fs-1 text-light'>Task</Form.Label>
                <Form.Control type="text" placeholder="Don't forget to get some rest..." onChange={(e) => setTaskName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="datetime">
                <Form.Label className='fs-1 text-light'>Day&Time</Form.Label>
                <Form.Control type="datetime-local" onChange={(e) => setTaskDate(e.target.value)}/>
            </Form.Group>

            <Button className="btn btn-submit " variant="primary" type="submit">
                Add New Task
            </Button>
        </Form>
  );
}

export default AddTask;