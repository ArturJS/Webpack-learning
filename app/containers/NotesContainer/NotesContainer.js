import React from 'react';
import Notes from './Notes';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as noteActions from '../../actions/notes-actions';

function mapStateToProps(state, props) {
  return {
    notesList: state.notesList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(noteActions, dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  onNoteDelete = (note) => {
    this.props.actions.removeNote(note);
  };

  onNoteUpdate = (note) => {
    if (!note.task.trim()) return;

    this.props.actions.updateNote(note);
  };

  render() {
    let {notesList, laneId} = this.props;

    notesList = notesList.filter(note => note.laneId === laneId);

    return (
      <Notes notes={notesList}
             onUpdate={this.onNoteUpdate}
             onDelete={this.onNoteDelete}
      />
    );
  }
}
