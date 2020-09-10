import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store, doneItemCreator, addItemCreator, removeItemCreator} from './redux/store';

let rerenderTree = function(){
ReactDOM.render(
  <React.StrictMode>
    <App state = {store.getState()} 
      doneItemCreator={doneItemCreator} 
      addItemCreator={addItemCreator} 
      removeItemCreator={removeItemCreator}
      dispatch={store.dispatch}/>
  </React.StrictMode>,
  document.getElementById('root')
);
console.log(store.getState());
}
rerenderTree();

store.subscribe(rerenderTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
