
const todoReducer = function (state = [], action ){
    let index = findElementIndex(state, action);
    switch (action.type) {
        case 'ADD_TODO':
            let newTodo = {
                label:action.label,
                time:action.time,
                goal:action.goal,
                done:false
            };
            state.push(newTodo);
            return state;
        case 'REMOVE_TODO':
            state.splice(index, 1 );  
            return state;
        case 'TODO_DONE':
            state[index].done = true;
        default:
            return state;
    }
} 
function findElementIndex(state, action){
    let element = state.filter(todo=> todo.label  === action.label)[0];
    return state.indexOf(element);
}
export default todoReducer;
