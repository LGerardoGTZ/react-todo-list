import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoItem({id,title,deleteTodo, editTodo}) {
  return (
   <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
     <h6>{title}</h6>
     <div className="todo-icon">
       <span className="mx-2 text-success" onClick={editTodo}>
         <i><EditIcon/></i>
       </span>
       <span  className="mx-2 text-danger" onClick={deleteTodo}>
         <i><DeleteIcon/></i>
       </span>
     </div>
   </li>
  )
}

export default TodoItem
