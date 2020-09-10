import React from 'react'
import ToDoList from './ToDoList'
const TodoListContainer = function(props){
    
    //this is container component that can use some things from BLL 
    let submitTodo = function(label, goal, time){
        let action = props.addItemCreator(label,goal,time);
        
        props.dispatch(action);
    }
    let todoIsDone = function(label){
        let action = props.doneItemCreator(label);
        props.dispatch(action);
    }
    let deleteTodo = function(label){
        let action = props.removeItemCreator(label);
        props.dispatch(action);
    }
    let todoitems = props.state;
    return (
        <ToDoList items = {todoitems} 
        submitTodo={submitTodo} 
        todoIsDone={todoIsDone}
        deleteTodo = {deleteTodo}></ToDoList>
    );
}
export default TodoListContainer;