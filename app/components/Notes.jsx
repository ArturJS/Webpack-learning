import React from 'react';
import Note from './Note';

export default ({notes, onEdit, onDelete}) => {
  return (
    <ul className="notes">
      {
        notes.map(note =>
          <li key={note.id}
              className="note">
            <Note note={note} onEdit={onEdit} onDelete={onDelete}/>
          </li>
        )
      }
    </ul>
  );
}
