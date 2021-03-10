import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: true
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      value: ""
    }
  }

  // newTodo = (task) => {
  //   return ({
  //     completed: false,
  //     id: Date.now(),
  //     task: task
  //   })
  // }

  addTodo = (event) => {
    this.setState({todos: [...this.state.todos, {completed: false, id: Date.now(), task: this.state.value} ], value: ""})
  }

  clearTodos = (event) => {
    this.setState({todos: [], value: this.state.value})
  }

  updateValue = (event) => {
    this.setState({todos: this.state.todos, value: event.target.value})
  }

  toggleTodo = (id) => {
    let newState = this.state
    newState.todos.forEach(todo => {
      if (todo.id == id) {
        todo.completed = !todo.completed
      }
    })

    this.setState(newState)
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}/>
        <TodoForm addTodo={this.addTodo} clearTodos={this.clearTodos} updateValue={this.updateValue} value={this.state.value}/>
      </div>
    );
  }
}

export default App;
