
import counterReducer from './counter';
import loggedReducer from './loggedReducer';

import { combineReducers } from 'redux';


 const allReducers = combineReducers({
    counterReducer,loggedReducer
 })

 export default allReducers

