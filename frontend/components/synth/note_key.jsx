import React from 'react';

const NoteKey = ({note, pressed}) => (
  <li className={pressed ? 'note-key pressed' : 'note-key'} >
    <span>{note}</span>
  </li>
);

export default NoteKey;
