import React from "react";
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Component } from "react";


export default class Hornedbeast extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0,
			showInfo: false
		}
	}
	//TODO: METHOD TO INCREMENT NUMBER OF FAVORITE CLICK FUNCTIONS

	handleClicks = () => {
		this.setState({
			clicks: this.state.clicks + 1
		})
	}

	// INFORMATION METHODS
	needsInfo = () => {
		this.setState({
			showInfo: true
		});
		this.props.onSelectBeast({
			title: this.props.title,
			image_url: this.props.imageSrc,
			keyword: this.props.imageAlt,
			description: this.props.description,
		});
	}

	// HIDE INFO 
	gotInfo = () => {
		this.setState({
			showInfo: false
		});
	}


	render() {
		return (
			<Card style={{ width: '20rem'}}>
				<Card.Img variant="top" src={this.props.imageSrc} />
				<Card.Body>
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Text>
						<article>
							<p>LIKES {this.state.clicks} 👍</p>
							<Button onClick={this.handleClicks} variant="link">Like</Button>
							<p>{this.props.description}</p>
						</article>
					</Card.Text>
					<Button onClick={this.needsInfo} variant="info">Get Info</Button>
					<Button onClick={this.gotInfo} variant="secondary">Remove Info</Button>

					<div className={this.state.showInfo ? 'Show-Info' : ''}>
						{this.state.showInfo ? 'Could I get Some More Information?' : ''}
					</div>
				</Card.Body>
			</Card>
		);
	}
}



