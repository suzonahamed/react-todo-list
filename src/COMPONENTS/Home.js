import React,{useState} from 'react'
import Todos from './Todos'
import style from './home.module.css'
import Newtodo from './Newtodo'
import {v4 as uuidv4} from "uuid";

const Home = () => {
  const[todos,setTodos]=useState([])

const handleAddTodo=(todo)=>{
     setTodos((prevTodo)=>{
      return[...prevTodo,{id:uuidv4(),todo}]
     })
    

}
   const handleRemoveId=(id)=>{
    
     setTodos((prevTodo)=>{
      const filterTodo=todos.filter((todo)=> todo.id !==id);
      return filterTodo;
     });
   }

  return (
    <div className={style.container}>
      <h1 style={{color:"white"}}>Todo App</h1>
      <Newtodo onAddTodo={handleAddTodo}/>
   <Todos todos={todos} onRemoveId={handleRemoveId}/>
    </div>
  )
}

export default Home;
