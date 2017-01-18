import React from 'react';
import Notes from './Notes';
import uuid from 'node-uuid';

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

  addNote = () => {
    this.props.actions.addNote({task: 'New task'});
  };

  onNoteDelete = (note) => {
    this.props.actions.removeNote(note);
  };

  onNoteUpdate = (note) => {
    if (!note.task.trim()) return;

    this.props.actions.updateNote(note);
  };

  render() {
    const {notesList} = this.props;

    return (
      <div>
        <button onClick={this.addNote}
                className="add-note">+
        </button>
        <Notes notes={notesList}
               onUpdate={this.onNoteUpdate}
               onDelete={this.onNoteDelete}
        />
      </div>
    );
  }
}
