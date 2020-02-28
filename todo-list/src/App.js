import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        { title: 'Mua BimBim' },
        { title: 'Đi đá bóng' },
        { title: 'Đi đổ xăng' }
      ]
    }

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      if(!text) {
        return;
      }

      text = text.trim();
      if (!text) { return; }

      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    const { todoItems, newItem } = this.state;
    if (todoItems.length) {
      return (
        <div className="App">
          <header className="header">
            <h1>todos</h1>
          </header>
          <section className="main">
            <input
              type="text"
              className="new-todo"
              placeholder="What needs to be done?"
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
            />
            <label></label>
            <ul className="todo-list">
              { todoItems.length && todoItems.map((item, index) =>
                <TodoItem
                  key={index}
                  item={item}
                  onClick={this.onItemClicked(item)} />
                )
              }
            </ul>
          </section>
          <footer className="footer">
            <span className="todo-count">
              <strong>0</strong>
              <span> </span>
              <span>items</span>
              <span> left</span>
            </span>
          </footer>
        </div>
      );
    }
  }
}

export default App;
