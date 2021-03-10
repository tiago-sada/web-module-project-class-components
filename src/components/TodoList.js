// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ReactDOM from "react-dom";
import Todo from "./Todo"

function todoElements (todos, toggle) {

    if (!todos) {return "Empty"}

    return (todos.map(todo => (<Todo todo={todo} toggleTodo={toggle}/>)))
}

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {todoElements(this.props.todos, this.props.toggleTodo)}
            </div>
        )
    }

}

export default TodoList



