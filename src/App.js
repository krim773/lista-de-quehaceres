import "./App.css";
import { useState, useEffect } from "react";
import { TaskCreator } from "./componentes/TaskCreator";
import { TaskTable } from "./componentes/TaskTable"

const App = () => {

  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
      if (!tasksItems.find(task => task.name === taskName)) {
      //mantiene la copia de taskItems y agrega otro objeto con las mismas propiedades
        setTasksItems([...tasksItems, { name: taskName, done: false }])
      }    
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name == task.name ? {...t, done: !t.done} : t))
    );
  };


  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [ ])


  useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasksItems))    
  }, [ tasksItems])

return (
  <div className="App">
    <TaskCreator createNewTask={createNewTask} />
    <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>

    <div>
      <input type="checkbox" onChange={e => setShowCompleted(!showCompleted)} /> <label > show task done </label>
    </div>

    {
      showCompleted === true && (
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
      )

    }


  </div>
);
};

export default App;
