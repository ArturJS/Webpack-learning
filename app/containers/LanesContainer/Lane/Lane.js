import React, {Component, PropTypes} from 'react';
import EditableText from '../../../components/EditableText/EditableText';
import './Lane.scss';

import ItemTypes from './ItemTypes';
import {DragSource, DropTarget} from 'react-dnd';

import NotesContainer from '../../NotesContainer/NotesContainer';

import {findDOMNode} from 'react-dom';

let dragStartIndex;

const laneSource = {
  beginDrag(props) {
    dragStartIndex = props.index;

    return {
      id: props.id,
      index: props.index
    };
  },
  endDrag(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    if (dragIndex === dragStartIndex) return;

    props.onEndMoveLane(dragIndex, hoverIndex);
  }
};

const laneTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.onMoveLane(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};


@DropTarget(ItemTypes.LANE, laneTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource(ItemTypes.LANE, laneSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Lane extends Component {
  static propTypes = {
    lane: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onAddTask: PropTypes.func.isRequired,
    onMoveLane: PropTypes.func.isRequired,
    onEndMoveLane: PropTypes.func.isRequired,

    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {lane, onAddTask, connectDragSource, connectDropTarget} = this.props;

    return connectDragSource(connectDropTarget(
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
          <NotesContainer laneId={lane.id}/>
        </div>
      </div>
    ));
  }

  onUpdate = (title) => {
    const {lane, onUpdate} = this.props;
    onUpdate(
      Object.assign({}, lane, {title: title})
    );
  };
}


