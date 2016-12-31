import React from 'react';
import Note from './Note';

export default ({notes, onEdit, onDelete}) => {
  return (
    <ul>
      {
        notes.map(note =>
          <li key={note.id}>
            <Note note={note} onEdit={onEdit} onDelete={onDelete}/>
          </li>
        )
      }
    </ul>
  );
}
