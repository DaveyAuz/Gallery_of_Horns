import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalShowing: false,

        }
    }
    showModal = () => {
        this.setState({ isModalShowing: true })
    };

    render() {
        const { beast, onHide } = this.props;
        if (!beast) return null
        return (
            <>
                <Modal show={this.state.isModalShowing} onHide={onHide}{...() => this.setState({ isModalShowing: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>{beast.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img src={beast.image_url} alt={beast.keyword} className="img-fluid" />
                        <p>{beast.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ isModalShowing: false })}>Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default SelectedBeast;