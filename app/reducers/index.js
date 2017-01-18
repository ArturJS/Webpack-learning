import {combineReducers} from 'redux';
import noteReducer from './note-reducer';
import laneReducer from './lane-reducer';
import undoable from 'redux-undo';

const rootReducer = combineReducers({
  notesList: noteReducer,
  lanesList: laneReducer,
});

export default rootReducer;
