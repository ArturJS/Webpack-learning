import React, {PropTypes, Component} from 'react';
import Lane from '../Lane/Lane';
import './Lanes.scss';

export default class Lanes extends Component {
  static propTypes = {
    lanesList: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {lanesList, onUpdate, onDelete} = this.props;

    return (
      <div className="lanes-list">
        {
          lanesList.map(lane =>
            <Lane key={lane.id} lane={lane} onDelete={onDelete} onUpdate={onUpdate} />
          )
        }
      </div>
    );
  }
}
