import React from 'react'
import TodoItem from './TodoItem'

function TodoList({items, clearList, deleteTodo, editTodo}) {
  return (
  <ul className="list-group my-5">
    <h3 className="text-capitalize text-center">todo list</h3>
    {items.map((item)=> {
      console.log('<<ITEM>>>',item);
      return(
        <TodoItem 
          key={item.id} 
          title={item.title} 
          deleteTodo={()=>deleteTodo(item.id)}
          editTodo={()=>editTodo(item.id)}
        />
      )
    })}
    <button 
      type="button" 
      className="btn btn-danger btn-block text-capitalize mt-5"
      onClick={clearList}
    >
        clear list
    </button>
  </ul>
  )
}

export default TodoList
