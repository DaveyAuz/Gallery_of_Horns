import React from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import data from './data.json';

// New class to render and give options to filter horns

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleChange = (event) => {
        const selectedValue = parseInt(event.target.value);
        // console.log(selectedValue);
        const filteredData = data.filter((beast) => {
            // console.log(beast.horns);
            if (this.props.filterByHorns === 0) {
                return true;
            } else {
                return beast.horns === selectedValue;
            }
        });
        // console.log(filteredData)
        this.props.onFilterChange(filteredData);
    };
    

    submitHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        
    }

    render() {
        const { data } = this.props;
        


        return (
            <>
                <ListGroup>
                </ListGroup>
                <Form>
                    <Form.Group controlId="filterByHorns">
                        <Form.Label>Filter by number of horns</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </>
        );
    }
}

export default FilterForm;