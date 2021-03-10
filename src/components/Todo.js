import React from 'react';
import ReactDOM from "react-dom";

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    localToggle = () => {
        this.props.toggleTodo(this.props.todo.id)
    }



    render() {
        return (<div onClick={this.localToggle} style={{textDecoration: (this.props.todo.completed ? "line-through" : "")}}> {this.props.todo.task} </div>)
    }

}


export default Todo
