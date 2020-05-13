import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
	state = {
		counters: [
			{id: 1, value: 4},
			{id: 2, value: 2},
			{id: 3, value: 99},
			{id: 4, value: 0},
		]
	}

	handleDelete = counterId => {
		const counters = this.state.counters.filter(_ => _.id != counterId);
		this.setState({counters})
	};

	render() {
		return (
			<div>
				{this.state.counters.map(
					counter => {
						return <Counter key={counter.id}
							id={counter.id}
							value={counter.value}
							onDelete={this.handleDelete}>
							<h4>Counter #{counter.id}</h4>
						</Counter>
					})}
			</div>
		)
	}
}

export default Counters;