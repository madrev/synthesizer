import { combineReducers } from 'redux';
import noteReducer from './notes_reducer.js';


const rootReducer = combineReducers({
  notes: noteReducer
});

export default rootReducer;
