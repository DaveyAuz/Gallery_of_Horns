import React from 'react';
import Button from 'react-bootstrap/Button';


class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waves: 0
        };
    }

    handleWave = () => {
        this.setState({
            waves:  this.state.waves + 1
        });
    };

    render(){
        return (
            <article>
                <h3>{this.props.name}</h3>
                <p>👋{this.state.waves} CLICKS!</p>
                <Button onClick={this.handleWave}>Hello, {this.props.name}</Button>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.name} />
            </article>
        );
    }
}

export default Person;
