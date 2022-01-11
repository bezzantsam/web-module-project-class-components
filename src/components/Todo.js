import React from "react";

class Todo extends React.Component {
  handleClick = () => {
    this.props.handletoggle(this.props.todo.id);
  };
  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.todo.task}
        {this.props.todo.completed ? <span>--Completed</span> : <span></span>}
      </li>
    );
  }
}

export default Todo;
