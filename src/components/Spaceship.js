// Code The Spaceship Component Here

import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
	render() {
		return (
			<div className="spaceship">
			<h1>Name: {this.props.name}</h1>
			<p>Speed: {this.props.speed}</p>
			<p>{this.props.hasRockets}</p>
			<p>{this.props.colors}</p>
			</div>
		)
	}
}

Spaceship.defaultProps =  {
	speed: "slow",
	hasRockets: false,
	colors: ["black", "red"]
}