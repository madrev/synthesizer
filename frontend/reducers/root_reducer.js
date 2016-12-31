import { combineReducers } from 'redux';
import * as reducers from './notes_reducer.js';


const rootReducer = combineReducers(reducers);

export default rootReducer;
