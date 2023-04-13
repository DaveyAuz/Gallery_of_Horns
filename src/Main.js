import React from 'react';
import Person from './Person';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <main>
                {data.map(beast => (
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







