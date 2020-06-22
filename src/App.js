import React, { Component } from "react";
import "./styles/App.css";

import TodoBox from "./components/TodoBox";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
    };
    this.onPressed = this.onPressed.bind(this);
  }

  onPressed(e) {
    let todoListValue = this.refs.todobox.getInputValue();
    let todoListNewValue = this.state.todoItems.concat(todoListValue);

    this.setState({ todoItems: todoListNewValue });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-Tittle ">Mi primer TODO List</h1>
        <TodoBox ref="todobox" onPressed={this.onPressed}></TodoBox>
        <TodoList ref="todolist" items={this.state.todoItems}></TodoList>
      </div>
    );
  }
}

export default App;
