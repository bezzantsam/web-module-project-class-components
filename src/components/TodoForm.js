import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd("pet cat");
  };
  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };
  render() {
    return (
      <form>
        <input onChange={handleChange} />
        <button onClick={this.handleSubmit}> ADD TODO</button>
      </form>
    );
  }
}
export default TodoForm;
