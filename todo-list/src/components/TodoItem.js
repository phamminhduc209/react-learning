import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from '../imgs/check.svg';
import checkCompleteImg from '../imgs/check-complete.svg';

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = checkImg;
    if (item.isComplete) {
      url = checkCompleteImg;
    }

    return (
      <li className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        <img onClick={onClick} src={url} />
        <p>{this.props.item.title}</p>
      </li>
    )
  }
}

export default TodoItem;
