import React from "react";
class Todo extends React.Component {
  render() {
    return (
      <li>
        {this.props.todo.task}
        {this.props.todo.completed ? <span>--Completed</span> : <span></span>}
      </li>
    );
  }
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
        {
          task: "code Js",
          id: 1237676323,
          completed: false,
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
        <h1> Todos </h1>
        <ul>
          {todos.map((todo) => {
            return <Todo todo={todo} />;
          })}
        </ul>
        <form>
          <input />
          <button>Add</button>
        </form>
        <button> Clear</button>
      </div>
    );
  }
}

export default App;
