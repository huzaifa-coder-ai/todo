import React, { useState } from 'react'
import "./Style.css"

const Card = () => {

    const [inputVal, setinputVal] = useState('');
    const [todos, settodos] = useState([]);

    const submitHandler =  (e) => { 
        e.preventDefault()

        
     }

     const submitTodo = () => {
        if(inputVal == ''){
            alert("Add atleast One Task")
            
        }
        else{
            settodos([inputVal])
            console.log(inputVal)
            
        }
        
     }

  return (
    <>
    <h1>ToDo App React JS</h1>
    <form onSubmit={submitHandler}>
        <h2>Todo List</h2>
        <input
        onChange={(e) => { 
            setinputVal(e.target.value)
         }}
         type="text" placeholder='Write Your Task here...' />
        <button type='submit' onClick={() => { submitTodo() }}>Add Task</button>
        <h3>My ToDo's :</h3>
        <ul>
        {todos.map((todo)=>{
            <li>{todo}</li>
        })
            
        }
        </ul>
    </form>
    </>
  )
}

export default Card