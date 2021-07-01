import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import GoogleBtn from './GoogleBtn';
import GoogleButton from 'react-google-button'

class Header extends Component{

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src="/assets/images/JLR_Horz.png" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        {/* Keeping below line in case I want to add smaller JLR logo. */}
                        {/* <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="30" width="30" alt="NuCamp Logo" /></NavbarBrand> */}
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
            </React.Fragment>
        );
    }
}

export default Header;