import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "water bonsai",
          id: 12543547,
          completed: false,
        },
        {
          task: " time with Amber",
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
    const { todos } = this.state;
    console.log(todos);
    return (
      <div>
        <h1>TODO</h1>
        <ul>
          {todos.map((todo) => {
            return (
              <li>
                {todo.task}
                {todo.completed ? <span> completed</span> : <span></span>}
              </li>
            );
          })}
        </ul>
        <form>
          <input />
          <button> ADD TODO</button>
        </form>
        <button> CLEAR</button>
      </div>
    );
  }
}

export default App;
