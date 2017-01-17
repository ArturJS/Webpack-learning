import {combineReducers} from 'redux';
import noteReducer from './note-reducer';
import undoable from 'redux-undo';

const rootReducer = combineReducers({
  notesList: noteReducer
});

export default rootReducer;
