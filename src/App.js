import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
 const  [state, setState] = useState({//How is it better? This way or separate in two hooks, one for the array of todos and another for the todo
   items: [],
   //id:0,
   item:'',
   editItem: false
});
const handleChange = (e)=> {
  
  setState({...state,  item: e.target.value}) //the item is equal to the input content
  
}

const handleSubmit = (e) => {
  e.preventDefault();

  // const newItem = {
  //   id: state.id ,
  //   item: state.item
  // };
const newItem = {...state, title:state.item, editItem: false ,id: new Date().getTime().toString()}//Here i define how an item will be 
  
const updatedItems = [...state.items, newItem];

  setState({
    items: updatedItems,
    item: '',
    
  });
}

const clearList = () => {
    setState({items:[]});
}

const deleteTodo = (id) => {
  let filteredItems = state.items.filter(item => item.id !== id);
  setState({items: filteredItems})
}

const editTodo = (id) => {
  let filteredItems = state.items.filter(item => item.id !== id); //first clean the item from the list

  const selectedItem = state.items.find(item => item.id === id); //if the id mathces, put that item inside the input again
  
  setState({
    items: filteredItems, 
    item: selectedItem.title,
    editItem: true, //whe need to pass this as a prop to be able to use it in the input and the conditional rendering
    id:id});//this id its the same that is given when the todo is added NOT a new one, and as is received as parameter whe can use it like this id:id
}
console.log(state);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput 
              item={state.item} 
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              editItem={state.editItem}/>
            <TodoList 
              items={state.items} 
              clearList={clearList}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              />
        </div>
      </div>
    </div>
  
  );
}

export default App;
