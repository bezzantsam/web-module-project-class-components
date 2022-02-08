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

  handleAdd = () => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    });
  };

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };
  handleToggle = () => {
    this.setState({
      ...this.state,
      todos: todos.map((todo) => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>TODO</h1>

        <TodoList todos={todos} />
        <TodoForm handleAdd={this.handleAdd} />

        <button onClick={this.handleClear}> CLEAR</button>
      </div>
    );
  }
}

export default App;
