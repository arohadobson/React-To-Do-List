import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Wash the Dog",
        completed: false
      },
      {
        id: 3,
        title: "Clean out the car",
        completed: false
      }
    ]
  };

  //rendering the compnents to the DOM
  render() {
    return (
      //components to run
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
