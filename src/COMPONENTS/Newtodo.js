import React,{useState} from 'react'
import style from './newtodo.module.css'

const Newtodo = (props) => {
  const[todo,setTodo]=useState({title:" ",desc:" "})
  const{title,desc}=todo;

  const handleChange=(event)=>{
    const name=event.target.name;
    setTodo((oldTodo)=>{
        return{...oldTodo,[name]: event.target.value}
        
      
    })

  }

const handleSubmit=(event)=>{
  event.preventDefault()
  props.onAddTodo(todo)
  setTodo({title:"",desc:""})
 

}

  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label> Title:</label>
            <input type="text"
             name="title"
             id="title"
             value={title}
             onChange={handleChange}
            >

            </input>
        </div>
        <div  className={style["form-field"]}>
            <label> Description:</label>
            <textarea type="text" 
            name="desc" 
            id="desc"  
            value={desc}
            onChange={handleChange}
            >

            </textarea>
        </div>
        <button type="submit">Add todo</button>
    </form>
  )
}

export default Newtodo;
