import { createStore } from 'redux'
import todoReducer from './todoReducer'


let store = createStore(todoReducer);


const addItemCreator = function(label, goal , time){
    return {
        type:'ADD_TODO',
        label:label,
        goal:goal,
        time:time
        }
};
const removeItemCreator = function(label){
    return {
            type:'REMOVE_TODO',
            label:label
        }
};
const doneItemCreator = function(label){
    return {
        type:'TODO_DONE',
        label:label
    }
};

export {store};
export {doneItemCreator};
export {addItemCreator};
export {removeItemCreator};