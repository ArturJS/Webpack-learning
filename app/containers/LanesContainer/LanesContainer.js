import React, {PropTypes, Component} from 'react';
import './LanesContainer.scss';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as laneActions from '../../actions/lane-antions';
import * as taskActions from '../../actions/tasks-actions';
import Lanes from './Lanes/Lanes';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


import update from 'react/lib/update';

function mapStateToProps(state, props) {
  return {
    lanesList: state.lanesList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...laneActions, ...taskActions}, dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)
@DragDropContext(HTML5Backend)
export default class LanesContainer extends Component {
  static propTypes = {
    lanesList: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      lanesList: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      lanesList: nextProps.lanesList
    });
  }

  render() {
    const {lanesList} = this.state;

    return (
      <div className="lanes-container">
        <button onClick={this.onAdd}
                className="add-lane">+
        </button>
        <Lanes lanesList={lanesList}
               onUpdate={this.onUpdate}
               onDelete={this.onDelete}
               onAddTask={this.onAddTask}
               onMoveLane={this.onMoveLane}
               onEndMoveLane={this.onEndMoveLane}
        />
      </div>
    );
  }

  onMoveLane = (dragIndex, hoverIndex) => {
    const { lanesList } = this.state;
    const dragLane = lanesList[dragIndex];

    this.setState(update(this.state, {
      lanesList: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragLane]
        ]
      }
    }));
  };

  onEndMoveLane = (dragIndex, hoverIndex) => {
    const { lanesList } = this.state;
    this.props.actions.updateLanesList(lanesList);
  };

  onAdd = () => {
    this.props.actions.addLane();
  };

  onDelete = (lane) => {
    this.props.actions.removeLane(lane);
  };

  onUpdate = (lane) => {
    if (!lane.title.trim()) return;

    this.props.actions.updateLane(lane);
  };

  onAddTask = (lane) => {
    this.props.actions.addTask({task: 'New task'}, lane.id);
  };

}
