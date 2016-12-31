import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };

    this.edit = this.edit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  render() {
    if (this.state.isEditing) {
      return this.renderEdit();
    }

    return this.renderNote()
  }

  renderEdit() {
    return <input type="text"
                  ref={(e)=>e ? e.selectionStart = this.props.note.task.length : null}
                  autoFocus={true}
                  defaultValue={this.props.note.task}
                  onBlur={this.finishEdit}
                  onKeyPress={this.checkEnter}/>;
  }

  renderNote() {
    const onDelete = this.deleteNote;

    return (
      <div onClick={this.edit}>
        <span>{this.props.note.task}</span>
        {
          onDelete
            ? <button onClick={onDelete}>&times;</button>
            : null
        }
      </div>
    );
  }

  edit() {
    this.setState({
      isEditing: true
    });
  }

  deleteNote(e) {
    this.props.onDelete(this.props.note.id, e);
  }

  finishEdit(e) {
    const value = e.target.value;

    if (this.props.onEdit) {
      this.props.onEdit(this.props.note.id, value);
    }

    this.setState({
      isEditing: false
    });
  }

  checkEnter(e) {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }
}
