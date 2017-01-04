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

  addTodo(newTodo) {
    this.setState({
      todoItems: this.state.todoItems.push(newTodo)
    })
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
