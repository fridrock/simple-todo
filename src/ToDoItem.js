import React from 'react';
import './ToDoItem.css'
const ToDoItem = function(props){
     return (
       <div className={`${props.done?'item_container done':'item_container'}`}>
           <div className="label">{props.label}</div>
           <div className="goal">{props.goal}</div>
           <div className='button_container'>
           <div className="time">{props.time}</div>
           <div className='is_done' onClick={()=>{
             props.todoIsDone(props.label);
           }}>done</div>
           </div>
           <p className='delete_todo' onClick = {()=>{
             props.deleteTodo(props.label);
           }}>X</p>
          
       </div>  
     );
}

export default ToDoItem;