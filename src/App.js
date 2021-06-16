import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import { CLASSES } from './components/shared/languageclasses';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      classes: CLASSES
    };
  }
  
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                {/* TODO: Replace with logo image. */}
                  <NavbarBrand href="/">Japanese Language Room</NavbarBrand>
              </div>
              </Navbar>
              <Directory classes={this.state.classes} />
          </div>
      );
  }
}

export default App;
