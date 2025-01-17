import React, { useState } from 'react';
import TodoForm from './todoForm';
import {v4 as uuidv4} from 'uuid';
import Todo from './todo';

uuidv4();

const TodoWrapper = () => {
  const [todos,setTodos] = useState([])

  const addTodo = todo =>{
       setTodos([...todos, {id : uuidv4(),task : todo ,completed : false ,isEditing : false},]);
  };  

  const toggleComplete = id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo ,completed : !todo.completed} : todo))
  }
  return (
    <div className='TodoWrapper'>
      <h1>GET THINGS DONE</h1>
      <TodoForm addTodo ={addTodo}/>
      {todos.map((todo , index) => (
           <Todo task = {todo.task} key ={index} toggleComplete ={toggleComplete}/>
      ))}
    </div>
  )
}

export default TodoWrapper
