import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const { item } = this.props;
    let className = 'Todoitem';
    if(item.isComplete) {
      className += ' Todoitem-complete';
    }
    return (
      <p className={className}>{this.props.item.title}</p>
    )
  }
}

export default TodoItem;