import React, {PropTypes, Component} from 'react';
import Lane from '../Lane/Lane';
import './Lanes.scss';


export default class Lanes extends Component {
  static propTypes = {
    lanesList: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onMoveLane: PropTypes.func.isRequired,
    onEndMoveLane: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {
      lanesList,
      onUpdate,
      onDelete,
      onAddTask,
      onMoveLane,
      onEndMoveLane
    } = this.props;

    return (
      <div className="lanes-list">
        {
          lanesList.map((lane, i) =>
            <Lane key={lane.id}
                  id={lane.id}
                  index={i}
                  lane={lane}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                  onAddTask={onAddTask}
                  onMoveLane={onMoveLane}
                  onEndMoveLane={onEndMoveLane}/>
          )
        }
      </div>
    );
  }
}
