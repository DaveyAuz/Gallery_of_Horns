
import React, {Component} from "react";


export default class Hornedbeast extends Component {

    render() {
        return(
            <section>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt={this.props.description} 
                title={this.props.title}/>
                <p>{this.props.description}</p>
            </section>
        )
    }
}
