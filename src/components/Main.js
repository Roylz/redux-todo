import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class Main extends Component {
	render(){
		return (
			<div>
				<ul>
					{this.props.todos.map((todo) =>{
						return <TodoItem todo = {todo} />
					})}
				</ul>
			</div>
		)
	}
}