import './App.css';
import { useState } from "react"
import { RiDeleteBin6Fill } from "react-icons/ri";



function App() {
  const [TodoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange=(event)=>{
    setNewTask(event.target.value)
  }
  const addTask =()=>{
    // const newTodoList = [...TodoList, newTask];
    setTodoList([...TodoList, newTask]);
  }
  const deleteTask =(taskName)=>{
    setTodoList(TodoList.filter((task) => task !== taskName));
  }
 return(
  <div className='full-bod'>
  <div className='addtask'>
    <input placeholder='Input your task' onChange={handleChange}/>
    <button onClick={addTask}>Add Task</button>
  </div>
  <div className='list'>{TodoList.map((task)=>{
    return<h1 key={task.id}>{task} <RiDeleteBin6Fill id='icon' onClick={() =>deleteTask(task)}/></h1>})}
  </div>
</div> 
 ) 
 
}

export default App;