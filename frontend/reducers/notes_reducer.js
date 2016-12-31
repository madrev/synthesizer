import { KEY_PRESSED } from '../actions/notes_actions.js';
import { KEY_RELEASED } from '../actions/notes_actions.js';
import { NOTE_NAMES } from '../util/tones.js';


const _validNote = key => (
  NOTE_NAMES.indexOf(key) !== -1
);


const notesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case KEY_PRESSED:
      if(_validNote(action.key) && state.indexOf(action.key) === -1) return [...state, action.key];
      else return state;
    case KEY_RELEASED:
      let keyIndex = state.indexOf(action.key);
      if (_validNote(action.key) && keyIndex !== -1 ) return state.slice(0, keyIndex).concat(state.slice(keyIndex+1))
      ;
      else return state;
    default:
      return state;
  }
};

export default notesReducer;
