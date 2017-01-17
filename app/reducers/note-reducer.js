import * as types from '../actions/action-types';
import * as _ from 'lodash';

export default (state = [], action) => {
  let noteId;

  if (action.note) {
    noteId = action.note.id;
  }

  switch (action.type) {
    case types.ADD_NOTE:
      return [...state, Object.assign({}, action.note)];
    case types.REMOVE_NOTE:
      return state.filter(item => item.id !== noteId);
    case types.UPDATE_NOTE:
      let noteListCopy = state.slice();
      let noteIndex = _.findIndex(noteListCopy, (note)=>note.id === noteId);

      if (noteIndex > -1) {
        noteListCopy[noteIndex] = action.note;
        return noteListCopy;
      }

      return state;
    default:
      return state;
  }
};
