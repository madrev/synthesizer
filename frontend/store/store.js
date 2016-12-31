import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';

const preloadedState = {
  notes: []
};

// const configureStore = (state = preloadedState) => ({
//   state: preloadedState,
//   reducer: rootReducer
// });

const configureStore = (state = preloadedState) => ( createStore(rootReducer));

export default configureStore;
