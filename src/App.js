import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "water bonsai",
          id: 12543547,
          completed: true,
        },
        {
          task: "spend time with Amber",
          id: 98765489,
          completed: false,
        },
        {
          task: "feed Jimbo",
          id: 58794387,
          completed: true,
        },
      ],
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state);
    const { todos } = this.state;

    return (
      <div>
        <h1>TODO</h1>

        <TodoList todos={todos} />
        <TodoForm />

        <button> CLEAR</button>
      </div>
    );
  }
}

export default App;
