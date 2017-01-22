import React, {PropTypes, Component} from 'react';
import './EditableText.scss';

export default class EditableText extends Component {
  _editInput;

  static propTypes = {
    text: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };

  }

  componentDidUpdate() {
    if (this.state.isEditing) {
      this._editInput.focus();
    }
  }

  render() {
    return (
      <div className="editable-text-cnt">
        {
          this.state.isEditing ? this.renderEditMode() : this.renderViewMode()
        }
      </div>
    );
  }

  renderViewMode() {

    return (
      <div className="editable-text" onClick={this.edit}>
        {
          this.props.text
        }
      </div>
    );
  }

  renderEditMode() {
    return (
      <div className={`editable-input-cnt ${this.state.isError ? 'has-error' : ''}`}>
        <input type="text"
               className="editable-input"
               ref={(node) => this._editInput = node}
               onClick={this.stopPropagation}
               onBlur={this.finishEdit}
               onInput={this.checkValidity}
               onKeyPress={this.checkEnter}
               defaultValue={this.props.text}/>
      </div>
    );
  }

  finishEdit = () => {
    if (this.state.isError) return;

    let text = this._editInput.value.trim();

    this.props.onUpdate(text);

    this.setState({
      isEditing: false
    });
  };

  edit = (e) => {
    this.stopPropagation(e);

    this.setState({
      isEditing: true
    });
  };

  stopPropagation = (e) => {
    e.stopPropagation();
  };

  checkValidity = (e) => {
    let text = this._editInput.value.trim();

    if (!text && this.props.isRequired) {
      this.setState({
        isError: true
      });
    }
    else if (this.state.isError) {
      this.setState({
        isError: false
      });
    }
  };

  checkEnter = (e) => {
    if (this.state.isError) return;

    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  };
}
