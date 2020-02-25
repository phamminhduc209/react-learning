import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <p className="Todoitem">{this.props.title}</p>
        )
    }
}

export default TodoItem;