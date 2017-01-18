import * as types from '../actions/action-types';
import * as _ from 'lodash';

export default (state = [], action) => {
  let laneId;

  if (action.lane) {
    laneId = action.lane.id;
  }

  switch (action.type) {
    case types.ADD_LANE:
      return [...state, Object.assign({}, action.lane)];
    case types.REMOVE_LANE:
      return state.filter(item => item.id !== laneId);
    case types.UPDATE_LANE:
      let laneListCopy = state.slice();
      let laneIndex = _.findIndex(laneListCopy, (lane)=>lane.id === laneId);

      if (laneIndex > -1) {
        laneListCopy[laneIndex] = action.lane;
        return laneListCopy;
      }

      return state;
    default:
      return state;
  }
};
