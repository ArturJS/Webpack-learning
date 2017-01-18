import React from 'react';
import EditableText from '../../components/EditableText/EditableText';

export default class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {note, onDelete} = this.props;

    return (
      <div>
        <EditableText isRequired={true} text={note.task} onUpdate={this.onUpdate} />
        {
          onDelete
            ? <button onClick={this.deleteNote} className="delete-note">&times;</button>
            : null
        }
      </div>
    );
  }

  deleteNote = (e) => {
    e.stopPropagation();

    this.props.onDelete(this.props.note);
  };

  onUpdate = (newTask) => {
    if (this.props.onUpdate) {
      let note = Object.assign({}, this.props.note, {task: newTask});
      this.props.onUpdate(note);
    }
  };
}
