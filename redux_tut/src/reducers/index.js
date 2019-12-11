import { combineReducers } from 'redux';


import counterReducer from './counter';
import loggedReducer from './loggedReducer';

const routeReducer = combineReducers({
    counterReducer: counterReducer,
    loggedReducer: loggedReducer
})

export default routeReducer;
