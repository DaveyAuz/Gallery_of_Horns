import React from 'react';
import Person from './Person';
import Hornedbeast from './Hornedbeast';

class Main extends React.Component {
    render() {
        return (
            <>
                <Hornedbeast title={'Unicorn'} imgUrl={'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'} description={'Someone wearing a very silly unicorn head mask'} />
                <Hornedbeast title={'Family Of Rhinos'} imgUrl={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'} description={'Parent rhino with two babies'} />
                <Person name="Lemmywinks" />
            
            </>
        )
    }
}
export default Main; 