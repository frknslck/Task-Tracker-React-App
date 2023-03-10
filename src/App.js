import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { taskData } from "./helpers/data";
import "./App.css"

function App() {
  const [visibility, setVisibility] = useState(true)
  const [tasks, setTasks] = useState(taskData)
  const handleVisibility = () => {
    setVisibility(!visibility)
  }

  const handleTasks = (task) => {
    setTasks([task, ...tasks])
  }

  const handleRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container className="w-25 border rounded">
      <Header visibility={visibility} handleVisibility={handleVisibility}/>
      {visibility && <AddTask handleTasks={handleTasks}/>}
      <Tasks tasks={tasks} setTasks={setTasks} handleRemove={handleRemove}/>
    </Container>
    ) 
}

export default App;
