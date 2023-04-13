import React from 'react';
import Form from 'react-bootstrap/Form';

// New class to render and give options to filter horns
class FilterForm extends React.Component {
    handleChange = (event) => {
        const selectedValue = parseInt(event.target.value);
        this.props.onFilterChange(selectedValue);
    };

    render() {
        return (
            <Form>
                <Form.Group controlId="filterByHorns">
                    <Form.Label>Filter by number of horns</Form.Label>
                    <Form.Control as="select" onChange={this.handleChange}>
                        <option value="0">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        );
    }
}

export default FilterForm;