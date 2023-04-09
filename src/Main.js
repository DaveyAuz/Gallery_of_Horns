import React from 'react';
import Person from './Person';

class Main extends React.Component {
    render() {
        return (
            <>
               
                <div class="HornedBeast">
                    <h2>HORNED BEAST</h2>
                <Person name="Horned Beast" />
                    <img src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" alt="" title="GALLERY OF HORNS"/>
                        <p>Someone wearing a very silly unicorn head mask</p>
                </div>
                <div class="HornedBeast">
                    <h2>HORNED BEAST #2: Rhino Family</h2>
                <Person name="Horned Beast" />
                    <img src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" alt="" title="GALLERY OF HORNS"/>
                        <p>Parent rhino with two babies</p>
                </div>
            </>
        )
    }
}
export default Main; 