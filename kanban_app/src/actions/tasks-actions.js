import * as types from './action-types';
import uuid from 'node-uuid';

export const addTask = (task, laneId, orderNumber) => {
  return {
    type: types.ADD_TASK,
    task: Object.assign({}, task, {id: uuid.v4(), laneId, orderNumber})
  };
};

export const removeTask = (task) => {
  return {
    type: types.REMOVE_TASK,
    task
  };
};

export const updateTask = (task) => {
  return {
    type: types.UPDATE_TASK,
    task
  };
};
