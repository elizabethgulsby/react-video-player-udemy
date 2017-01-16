import React, { Component } from 'react';

class SearchBar extends Component {
	/*initializing state - plain JS object that exists on any component that is a class-based component - each instance of a class-based component has it's own copy of state - initialized by defining by constuctor method and set as this.state*/
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
		<div>
			<input 
			value={this.state.term}
			onChange={event => this.setState({ term: event.target.value })} />
		</div>
		);
	}
}

export default SearchBar;