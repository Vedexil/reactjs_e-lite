import React, {useState} from 'react';
import './ListStyle.css'

function ToDoList() {
    const[tasks, setTasks] = useState(["Go to school", "Take out laundry", "Clean room"])
    const[newTask, setNewTask] = useState("")
    
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() == "") {
            alert("Please enter a task first!")
        }
        else {
            setTasks(t => [...t, newTask])
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, newIndex) => newIndex !== index)
        setTasks(updatedTasks);
    }

    return(
        <div className='To-Do-List'>
            <h1>To-Do List</h1>
            <div>
                <input type='text' placeholder='Write your tasks for today.' value={newTask} onChange={handleInputChange}/>
                <button className='add-button' onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='remove-button' onClick={() => deleteTask(index)}>Remove</button>
                    </li>
                )}
            </ol>

        </div>
    )
   
}

export default ToDoList