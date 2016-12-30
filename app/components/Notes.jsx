import React from 'react';
import Note from './Note';

export default ({notes, onEdit}) => {
  return (
    <ul>
      {
        notes.map(note =>
          <li key={note.id}>
            <Note note={note} onEdit={onEdit}/>
          </li>
        )
      }
    </ul>
  );
}
