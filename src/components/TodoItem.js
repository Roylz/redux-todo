import React, { Component } from 'react';

export default class TodoItem extends Component {
	render() {
		console.log(this.props.todo)
		return (
			<li>{this.props.todo}</li>
			)
	}
}