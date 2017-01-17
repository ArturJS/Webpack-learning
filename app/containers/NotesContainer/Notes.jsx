import React from 'react';
import Note from './Note';

export default ({notes, onUpdate, onDelete}) => {
  return (
    <ul className="notes">
      {
        notes.map(note =>
          <li key={note.id}
              className="note">
            <Note note={note} onUpdate={onUpdate} onDelete={onDelete}/>
          </li>
        )
      }
    </ul>
  );
}
