import React, { Component } from "react";
import ProptTypes from "prop-types";

class TodoListItem extends Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

TodoListItem.proptTypes = {
  name: ProptTypes.string.isRequired,
};

export default TodoListItem;
