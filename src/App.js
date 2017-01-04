import React, { Component } from 'react';
import TodoInput from "./TodoInput"
import Todolist from "./Todolist"

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <TodoInput />
        <Todolist />
      </div>
    )
  }
}

export default App;
