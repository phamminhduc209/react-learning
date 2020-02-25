import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {

  constructor() {
    super();
    this.todoItems = [
      { title: 'Mua BimBim', isComplete: true },
      { title: 'Đi đá bóng', isComplete: true },
      { title: 'Đi đổ xăng' }
    ];
  }

  render() {
    return (
      <div className="App">
        <div className="TodoList">
          {
            this.todoItems.length > 0 && this.todoItems.map((item, index) => <TodoItem key={index} item={item} />)
          }
          {
            this.todoItems.length === 0 && 'Nothing here.'
          }
        </div>
      </div>
    );
  }
}

export default App;

