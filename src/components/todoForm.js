import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {

  const [value ,setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='Todo-input' value = {value} placeholder="What is today's Task?" onChange={(e) =>
          setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
