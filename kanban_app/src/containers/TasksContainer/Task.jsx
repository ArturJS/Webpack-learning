import React from 'react';
import EditableText from '../../components/EditableText/EditableText';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {task, onDelete} = this.props;

    return (
      <div>
        <EditableText isRequired={true} text={task.task} onUpdate={this.onUpdate} />
        {
          onDelete
            ? <button onClick={this.deleteTask} className="delete-task">&times;</button>
            : null
        }
      </div>
    );
  }

  deleteTask = (e) => {
    e.stopPropagation();

    this.props.onDelete(this.props.task);
  };

  onUpdate = (newTask) => {
    if (this.props.onUpdate) {
      let task = Object.assign({}, this.props.task, {task: newTask});
      this.props.onUpdate(task);
    }
  };
}
