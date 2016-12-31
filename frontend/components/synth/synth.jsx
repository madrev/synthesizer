import React from 'react';
import Note from '../../util/note.js';
import { TONES, NOTE_NAMES } from '../../util/tones.js';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map( noteName =>  new Note(TONES[noteName]));
  }

  render() {
    this.playNotes();
    let noteKeys = NOTE_NAMES.map( (noteName, idx) => {
      let isPressed = this.props.notes.indexOf(noteName) !== -1;
      return <NoteKey key={idx} pressed={isPressed} note={noteName} />;
      });
    return <ul className='piano'>
      {noteKeys}
    </ul>;
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  componentDidMount() {
    $(document).on("keydown", e => this.onKeyDown(e));
    $(document).on("keyup", e => this.onKeyUp(e));
  }

  playNotes() {
    this.notes.forEach( (note, idx) => {
      let noteName = NOTE_NAMES[idx];
      if(this.props.notes.indexOf(noteName) !== -1) note.start();
      else note.stop();

    });
  }

}

export default Synth;
