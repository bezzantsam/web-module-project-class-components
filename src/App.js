import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

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
  handleClear = () => {
    //1 setState
    //2 loop through all todo
    //3 remove all todos that have
    //completed === true
    //4 save filtered todos to state
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };
  handleToggle = () => {
    //1 setState
    //2 change todos
    //3 find todo we clicked
    //4 flip value of completed
    //5 keep all other todos same
    this.setState({
      ...this.state,
      todos: todos.map(todo => {
        if (todo.id === clickedId){
         return {
           ...todo,
           completed: !todo.completed
         } 
      }
    })
  })

  handleAdd = (task) => {
    //1. setState
    //2 change todos
    //3 make copy todos
    //4 add a new todo to end
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

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1> Todos </h1>
        <TodoList todos={todos} />
        <TodoForm handleAdd={handleAdd} />
        <button onClick={this.handleClear}> Clear</button>
      </div>
    );
  }
}

export default App;
