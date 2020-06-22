import React, { Component } from "react";
import "../styles/TodoList.css";
import ProptTypes from "prop-types";

import TodoListItem from "./TodoListItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
    };
  }
  componentDidUpdate(nextProps) {
    console.log(nextProps.index)
    if (nextProps.items.length !== this.state.items.length) {
      this.setState({ items: nextProps.items });
    }
    console.log(nextProps);
  }

  render() {
    let items = this.state.items.map((currentValue, index, array) => {
      return <TodoListItem key={index} name={currentValue} />;
    });

    return (
      <div className="TodoList">
        <ul>{items}</ul>
      </div>
    );
  }
}

TodoList.proptTypes = {
  items: ProptTypes.array.isRequired,
};

export default TodoList;
