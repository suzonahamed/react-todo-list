import React from 'react'
import Todo from './Todo'
import style from './todos.module.css'
const Todos = (props) => {
   
  return (
      <section className={style.todos}>

         {props.todos.map((todo,index)=> <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveId={props.onRemoveId}/> )}

      </section>


  )
}

export default Todos;
