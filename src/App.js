import React, { Component } from 'react';
import TodoInput from "./TodoInput"
import Todolist from "./Todolist"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todoItems: []
    }
  }

  render() {
    let { todoItems } = this.state
    return (
      <div>
        <TodoInput />
        <Todolist items={todoItems} />
      </div>
    )
  }
}

export default App;
