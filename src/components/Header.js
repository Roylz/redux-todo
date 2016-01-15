import React, { Component } from 'react';

export default class Header extends Component {
	render(){
		return (
			<div>
				<h1>Redux Todo App</h1>
				<input type="text" ref="todoInput" />
				<button onClick={this.addTodo.bind(this)}>Add Todo</button>
			</div>
			)
	}

	addTodo() {
		let val = this.refs.todoInput.value;
		this.props.actions.addTodo(val);
	}
}