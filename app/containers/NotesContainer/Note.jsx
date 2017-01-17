import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };

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
            ? <button onClick={onDelete} className="delete-note">&times;</button>
            : null
        }
      </div>
    );
  }

  edit = () => {
    this.setState({
      isEditing: true
    });
  };

  deleteNote = (e) => {
    e.stopPropagation();

    this.props.onDelete(this.props.note);
  };

  finishEdit = (e) => {
    const value = e.target.value;

    if (this.props.onUpdate) {
      let note = Object.assign({}, this.props.note, {task: value});
      this.props.onUpdate(note);
    }

    this.setState({
      isEditing: false
    });
  };

  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  };
}
