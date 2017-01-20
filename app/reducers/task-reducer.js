import * as types from '../actions/action-types';
import * as _ from 'lodash';

export default (state = [], action) => {
  let taskId;

  if (action.task) {
    taskId = action.task.id;
  }

  switch (action.type) {
    case types.ADD_TASK:
      return [...state, Object.assign({}, action.task)];
    case types.REMOVE_TASK:
      return state.filter(item => item.id !== taskId);
    case types.UPDATE_TASK:
      let taskListCopy = state.slice();
      let taskIndex = _.findIndex(taskListCopy, (task)=>task.id === taskId);

      if (taskIndex > -1) {
        taskListCopy[taskIndex] = action.task;
        return taskListCopy;
      }

      return state;
    default:
      return state;
  }
};
