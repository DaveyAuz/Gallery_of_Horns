import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <main>
                {this.props.beasts.map(beast => (
                    <HornedBeast
                        key={beast._id}
                        title={beast.title}
                        imageSrc={beast.image_url}
                        imageAlt={beast.keyword}
                        imageTitle={beast.title}
                        description={beast.description}
                        onSelectBeast={this.props.onSelectBeast}
                
                    />
                    
                ))}
            </main>
        );
    }
}

export default Main;







