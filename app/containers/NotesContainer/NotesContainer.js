import React from 'react';
import Notes from './Notes';
import uuid from 'node-uuid';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as noteActions from '../../actions/notes-actions';

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do something'
        }
      ]
    };

    this.addNote = this.addNote.bind(this);
    this.onNoteDelete = this.onNoteDelete.bind(this);
    this.onNoteUpdate = this.onNoteUpdate.bind(this);
  }

  addNote() {
    this.props.actions.addNote({task: 'New task'});
  };

  onNoteDelete(note) {
    this.props.actions.removeNote(note);
  }

  onNoteUpdate(note) {
    if (!note.task.trim()) return;

    this.props.actions.updateNote(note);
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);