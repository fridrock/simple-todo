import React from 'react';
import './App.css';
import ToDoListContainer from './TodoListContainer'



  function App(props) {
   
  return (
   <ToDoListContainer state = {props.state}
      doneItemCreator={props.doneItemCreator}
      addItemCreator={props.addItemCreator}
      removeItemCreator={props.removeItemCreator}
      dispatch={props.dispatch}
      ></ToDoListContainer >
  );
}




export default App;
