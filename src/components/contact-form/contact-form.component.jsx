import React from 'react';

import './contact-form.style.css';
import Background from '../../images/bg_3.jpg';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

var imageStyle = {
    backgroundImage: `url(${Background})`,
};

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: 'Select service'
        };
    }

    handleChange = (event) => {
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="kontaktai kontaktaiImg" style={imageStyle}>
                <div className="kontaktaiForm">
                    <span>Booking an Ap pointment</span>
                    <h2 className="mb-4">Free Consultation</h2>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" custom value={this.state.selectValue} onChange={(e) => { this.setState({ selectValue: e.target.value }) }}>
                                <option value='Select service' disabled>Select service</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formName">
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formVehicleNo">
                                <Form.Control type="text" placeholder="Vehicle number" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formDate">
                                <Form.Control type="Date" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formTime">
                                <Form.Control type="Time" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formMessage">
                                <Form.Control as="textarea" rows="5" placeholder="Message" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Button variant="primary" size="lg" block>
                                Send message
                        </Button>
                        </Form.Row>
                    </Form>

                </div>
            </div>
        );
    }
}

export default ContactForm;