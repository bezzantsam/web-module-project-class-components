import React from "react";

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
      ],
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1> Todos </h1>
        <ul>
          <li> Groom the dog</li>
          <li> Feed the dog</li>
          <li> Save for vet</li>
        </ul>
        <form>
          <input>
            <button>Add</button>
          </input>
          <button> Clear</button>
        </form>
      </div>
    );
  }
}

export default App;
