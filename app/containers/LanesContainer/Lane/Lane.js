import React, {Component, PropTypes} from 'react';
import EditableText from '../../../components/EditableText/EditableText';
import './Lane.scss';

import NotesContainer from '../../NotesContainer/NotesContainer';

export default class Lane extends Component {
  static propTypes = {
    lane: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onAddTask: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {lane, onAddTask} = this.props;

    return (
      <div className="lane">
        <div className="lane-header">
          <button type="button"
                  className="add-task"
                  onClick={()=>onAddTask(lane)}>+
          </button>
          <div className="lane-title">
            <EditableText isRequired={true} text={lane.title} onUpdate={this.onUpdate}/>
          </div>
        </div>
        <div className="lane-body">
          <NotesContainer laneId={lane.id} />
        </div>
      </div>
    );
  }

  onUpdate = (title) => {
    const {lane, onUpdate} = this.props;
    onUpdate(
      Object.assign({}, lane, {title: title})
    );
  };
}


