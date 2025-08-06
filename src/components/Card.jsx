import React, { useState } from 'react'
import "./Style.css"

const Card = () => {

    const [inputVal, setinputVal] = useState('');
    const [todos, settodos] = useState([]);

    const submitHandler =  (e) => { 
        e.preventDefault()

        if(inputVal == ''){
            alert("Add at least one task")
            
        }
        else{

            settodos([...todos,inputVal])  
            setinputVal('')
        }
 
     }

     const deleteBtn = () => {

     }


  return (
    <>
    <h1>ToDo App React JS</h1>
    <form onSubmit={submitHandler}>
        <h2>Todo List</h2>
        <input value={inputVal}
        onChange={(e) => { 
            setinputVal(e.target.value)
         }}
         type="text" placeholder='Write Your Task here...' />
        <button type='submit'>Add Task</button>
        <div className="flex">
            <h3>My ToDo's :</h3>
            <i id='edit' className="fa-solid fa-pen-to-square"></i>
        </div>
        
        <ul>
        {todos.map((todo)=>{
        return  <li>{todo}  <i onClick={deleteBtn} id='del' className="fa-solid fa-trash"></i>  </li>
        })
            
        }
        </ul>
    </form>
    </>
  )
}

export default Card