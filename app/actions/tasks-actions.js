import * as types from './action-types';
import uuid from 'node-uuid';

export const addTask = (task, laneId) => {
  return {
    type: types.ADD_TASK,
    task: Object.assign({}, task, {id: uuid.v4(), laneId: laneId})
  };
};

export const removeTask = (task) => {
  return {
    type: types.REMOVE_TASK,
    task: task
  };
};

export const updateTask = (task) => {
  return {
    type: types.UPDATE_TASK,
    task: task
  };
};
