import React, { Component } from "react";
import "../styles/TodoBox.css";
import PropTypes from "prop-types";

class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onPressed(e);
    this.setState({ todoText: "" });
  }

  getInputValue() {
    return this.state.todoText;
  }

  render() {
    return (
      <div className="TodoBox">
        <form onSubmit={this.onSubmit}>
          <input className="TodoBox-Input" type="text" value={this.state.todoText} onChange={(e) => this.setState({ todoText: e.target.value })}></input>
          <input className="TodoBox-Button" type="submit" value="Agregar"></input>
        </form>
      </div>
    );
  }
}

TodoBox.propTypes = {
  onPressed: PropTypes.func.isRequired,
};

export default TodoBox;
