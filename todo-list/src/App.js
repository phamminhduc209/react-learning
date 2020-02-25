import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {

  constructor() {
    super();
    this.todoItems = [
      'Mua BimBim',
      'Đi đá bóng',
      'Đi đổ xăng'
    ];
  }

  render() {
    return (
      <div className="App">
        <div className="TodoList">
          {
            this.todoItems.map((item, index) => <TodoItem key={index} title={item} />)
          }
        </div>
      </div>
    );
  }
}

export default App;

