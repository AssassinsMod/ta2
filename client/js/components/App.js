import React, { Component, PropTypes } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };

		this.task = setInterval(() => { this.tick(); }, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.task);
	}

	tick() {
		this.setState({
			count: this.state.count + this.props.increment
		});
	}

	render() {
		return (
			<h1>
				Counter ({this.props.increment}): {this.state.count}
			</h1>
		);
	}
}

Counter.propTypes = {
	increment: PropTypes.number.isRequired
};

/*
var App = () => (
	<div>
		<Counter increment={1} />
		<Counter increment={2} />
	</div>
);
// */

/*
class App extends Component {
	render() {
		return (
			<div>
				<Counter increment={1} />
				<Counter increment={2} />
			</div>
		);
	}
}
// */

//*

const App = React.createClass({
	render() {
		return (
			<div>
				<Counter increment={3} />
				<Counter increment={2} />
			</div>
		);
	}
});
// */

export default App;
