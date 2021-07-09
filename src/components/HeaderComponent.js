import React, { Component }  from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import GoogleButton from 'react-google-button'

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(event){
        alert("Registered for class.");
        this.toggleModal();
        event.preventDefault();
    }

    
    render(){

        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 text-center text-sm-left">
                                <img src="/assets/images/JLR_Horz.png" className="img-fluid" alt="logo"/>
                            </div>
                            <span className="col-sm-6 navbar-text ">
                                <Button onClick={this.toggleModal} className="btn btn-lg btn-block reg-button">
                                    <i className="fa fa-sign-in fa-lg" /> Register for a Class!
                                </Button>
                            </span>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar className="navbar-nav container-lg">
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <i className="fa fa-home fa-lg" /> Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/languageclasses">
                                            <i className="fa fa-list fa-lg" /> Classes
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/apps">
                                            <i className="fa fa-mobile fa-lg" /> Apps
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/videos">
                                            <i className="fa fa-film fa-lg" /> Videos
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <i className="fa fa-address-card fa-lg" /> Contact Us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="ms-auto">
                                        <GoogleButton  onClick={() => { alert('Google button clicked') }}/>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Register for a Class</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="availableClasses">Available Classes</Label><br/>
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
                            <FormGroup>
                                <Label htmlFor="studentEmail">Student Email</Label>
                                <Input type="text" id="studentEmail" name="studentEmail" placeholder="email@example.com" />
                            </FormGroup>
                            
                            <Button type="submit" value="submit" color="primary">Register</Button>
                        </Form>
                    </ModalBody>
                </Modal>


            </React.Fragment>
        );
    }
}

export default Header;