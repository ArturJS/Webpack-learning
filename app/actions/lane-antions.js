import * as types from './action-types';
import uuid from 'node-uuid';

export const addLane = (lane) => {
  return {
    type: types.ADD_LANE,
    lane: Object.assign({}, lane, {id: uuid.v4()})
  };
};

export const removeLane = (lane) => {
  return {
    type: types.REMOVE_LANE,
    lane: lane
  };
};

export const updateLane = (lane) => {
  return {
    type: types.UPDATE_LANE,
    lane: lane
  };
};
