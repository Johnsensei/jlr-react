import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

class RegistrationModal extends Component {
    constructor(props) {
        super(props);

    }

    handleSubmit(event){
        alert("Registered for class.");
        this.props.toggleModal();
        event.preventDefault();
    }

    render(){
    return(
        <Modal >
                    <ModalHeader >Register for a Class</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="availableClasses">Available Classes</Label>
                                {/* <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} /> */}
                                    <select id="availableClasses" name="availableClasses">
                                            <option>Select...</option>
                                            <option>Japanese 1.0</option>
                                            <option>Japanese 1.1</option>
                                            <option>Japanese 1.2</option>
                                            <option>Japanese 1.3</option>
                                        </select>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="studentName">Student Name</Label>
                                <Input type="text" id="studentName" name="studentName" placeholder="First Last" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="studentAge">Student Age</Label>
                                <Input type="text" id="studentAge" name="studentAge" placeholder="Must be 18 or older." />
                            </FormGroup>
                            
                            <Button type="submit" value="submit" color="primary">Register</Button>
                        </Form>
                    </ModalBody>
                </Modal>
    );
    }
}

export default RegistrationModal;