import React from 'react';
import ReactDOM from "react-dom";

// document.querySelector('#field').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       console.log("enter pressed")
//     }
// });

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <input type="text" id="field" placeholder="New todo" onChange={this.props.updateValue} value={this.props.value}></input>
                <button onClick={this.props.addTodo}>Add Todo</button>
                <button onClick={this.props.clearTodos}>Clear Todos</button>
            </div>
            
        )
    }

}


export default TodoForm