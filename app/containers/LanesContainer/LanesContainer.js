import React, {PropTypes, Component} from 'react';
import './LanesContainer.scss';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as laneActions from '../../actions/lane-antions';
import Lanes from './Lanes/Lanes';

function mapStateToProps(state, props) {
  return {
    lanesList: state.lanesList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(laneActions, dispatch)
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LanesContainer extends Component {
  static propTypes = {
    lanesList: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {lanesList} = this.props;

    return (
      <div className="lanes-container">
        <button onClick={this.onAdd}
                className="add-lane">+
        </button>
        <Lanes lanesList={lanesList}
               onUpdate={this.onUpdate}
               onDelete={this.onDelete}
        />
      </div>
    );
  }

  onAdd = () => {
    this.props.actions.addLane({title: 'New lane'});
  };

  onDelete = (lane) => {
    this.props.actions.removeLane(lane);
  };

  onUpdate = (lane) => {
    if (!lane.title.trim()) return;

    this.props.actions.updateLane(lane);
  };

}
