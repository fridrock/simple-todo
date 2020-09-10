import React, {useState} from 'react'
import ToDoItem from './ToDoItem'
import ModalWindow from './ModalWindow'
import './ToDoList.css'

const ToDoList = function(props){
    //adding ToDoItems from props
    const [isOpened, setOpened] = useState(false);
    let modalWindow = <ModalWindow isOpened = {isOpened} changeOpened = {changeOpened} submitTodo={props.submitTodo}></ModalWindow>;
    
    let todoitems = props.items.map((todo) => {
        return <ToDoItem 
        todoIsDone = {props.todoIsDone}
        deleteTodo = {props.deleteTodo}
        label = {todo.label} 
        goal = {todo.goal} 
        time = {todo.time} 
        done={todo.done}></ToDoItem>
    });
    function changeOpened(){
        setOpened(!isOpened);
        // /console.log(isOpened);
    }
    return (
        <div className="container">
            <div className="itemList">
                {todoitems} 
                {modalWindow}
            </div>
          <div className="add_button" onClick={changeOpened}>Add todo</div>
           
        </div>
        
    );
}

export default ToDoList;