import React, { Component }  from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, FormFeedback, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//May still use this GoogleBtn logic.
// import GoogleBtn from './GoogleBtn';
import GoogleButton from 'react-google-button'
// This import is because I want the RegistrationModal as a separate component.
// import RegistrationModal from './RegistrationModal';

class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
          isNavOpen: false,
          isModalOpen: false,
          studentName: "",
          studentAge: "",
          studentEmail: "",
          touched: {
            studentName: false,
            studentAge: false,
            studentEmail: false
        }
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.validate = this.validate.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

    validate(studentName, studentAge, studentEmail){
        const errors = {
            studentName: '',
            studentAge: '',
            studentEmail: ''
        };

        if (this.state.touched.studentName) {
            if (studentName.length < 2) {
                errors.studentName = 'Please enter the student\'s name.';
            }
        }

        if (this.state.touched.studentAge) {
            if (+studentAge < 18) {
                errors.studentAge = 'Student must be at least 18 years old to register.';
            }
        }
        
        if (this.state.touched.studentEmail && !studentEmail.includes('@')) {
            errors.studentEmail = 'Email should contain a @';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        alert("Registered for class: " + JSON.stringify(this.state));
        this.toggleModal();
        event.preventDefault();
    }

    
    render(){

        const errors = this.validate(
            this.state.studentName,
            this.state.studentAge,
            this.state.studentEmail
        );


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

                {/* Code for rendering the RegistrationModal after moving to own component: */}
                {/* <RegistrationModal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal} toggleModal={this.state.toggleModal}/> */}
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
                                <Input type="text" id="studentName" name="studentName" placeholder="First Last" 
                                    value={this.state.studentName}
                                    invalid={errors.studentNameName}
                                    onBlur={this.handleBlur("studentName")}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.studentName}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                {/* TODO: Add validation to student age. */}
                                <Label htmlFor="studentAge">Student Age</Label>
                                <Input type="text" id="studentAge" name="studentAge" placeholder="Must be 18 or older." />
                            </FormGroup>
                            <FormGroup>
                                {/* TODO: Add validation to email. */}
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