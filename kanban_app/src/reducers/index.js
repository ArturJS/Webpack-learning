import {combineReducers} from 'redux';
import taskReducer from './task-reducer';
import laneReducer from './lane-reducer';
import undoable from 'redux-undo';

const rootReducer = combineReducers({
  tasksList: taskReducer,
  lanesList: laneReducer,
});

export default rootReducer;
