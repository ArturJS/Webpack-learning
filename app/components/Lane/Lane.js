import React from 'react';
import EditableText from '../EditableText/EditableText';
import './Lane.scss';

export default class Lane extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      title: 'Lane'
    };

  }

  render() {
    let {title} = this.state;

    return (
      <div className="lane">
        <div className="lane-header">
          <button type="button" className="add-task">+</button>
          <div className="lane-title">
            <EditableText isRequired={true} text={title} onUpdate={this.onUpdate} />
          </div>
        </div>
        <div className="lane-body">

        </div>
      </div>
    );
  }

  onUpdate = (title) => {
    this.setState({
      title: title
    });
  };
}
