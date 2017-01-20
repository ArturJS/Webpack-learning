import React from 'react';
import Tasks from './Tasks';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as taskActions from '../../actions/tasks-actions';

function mapStateToProps(state, props) {
  return {
    tasksList: state.tasksList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(taskActions, dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class TasksContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  onTaskDelete = (task) => {
    this.props.actions.removeTask(task);
  };

  onTaskUpdate = (task) => {
    if (!task.task.trim()) return;

    this.props.actions.updateTask(task);
  };

  render() {
    let {tasksList, laneId} = this.props;

    tasksList = tasksList.filter(task => task.laneId === laneId);

    return (
      <Tasks tasks={tasksList}
             onUpdate={this.onTaskUpdate}
             onDelete={this.onTaskDelete}
      />
    );
  }
}
