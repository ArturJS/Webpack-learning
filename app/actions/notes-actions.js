import * as types from './action-types';
import uuid from 'node-uuid';

export const addNote = (note) => {
  return {
    type: types.ADD_NOTE,
    note: Object.assign({}, note, {id: uuid.v4()})
  };
};

export const removeNote = (note) => {
  return {
    type: types.REMOVE_NOTE,
    note: note
  };
};

export const updateNote = (note) => {
  return {
    type: types.UPDATE_NOTE,
    note: note
  };
};
