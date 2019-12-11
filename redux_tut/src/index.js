import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

//STORE : GLOBALIZED STATE


//ACTION : Describes what you intend to do : a simple function that returns an object 

const increment = () => {
    return {
        type: 'INCREMENT'
    }
}


const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

//REDUCER : Describes how you action transform the state into the next state 

const counter = (state = 0, action) => {

    switch (action.type) {
        case "DECREMENT":
            return state - 1;
            break;

        case "INCREMENT":
            return state + 1;
            break;


        default:
            return state;
            break;
    }
}
//DISPATCHER : 



ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
