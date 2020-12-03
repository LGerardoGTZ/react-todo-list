import React from 'react'
import PostAddIcon from '@material-ui/icons/PostAdd';

function TodoInput({item, handleChange, handleSubmit, editItem}) {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i><PostAddIcon/></i>
            </div>
          </div>
          <input 
            type="text" 
            className="form-control text-capitalize" 
            placeholder="add a todo item"
            value={item}
            onChange={handleChange}/>
        </div>
        <button 
          type="submit" 
          className={editItem ? 'btn btn-block btn-success text-capitalize mt-3': 'btn btn-block btn-primary text-capitalize mt-3'}>
            {editItem ? 'edit item' : 'add item'}</button>
      </form>
      
    </div>
  )
}

export default TodoInput
