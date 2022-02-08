import React from "react";

class TodoForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd();
  };
  render() {
    return (
      <form>
        <input />
        <button onClick={this.handleSubmit}> ADD TODO</button>
      </form>
    );
  }
}
export default TodoForm;
