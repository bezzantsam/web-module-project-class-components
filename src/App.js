import React from "react";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>TODO</h1>
        <ul>
          <li>Water Bonsai</li>
          <li>Spend time with girlfriend</li>
          <li> Code</li>
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
