import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import { CLASSES } from './components/shared/classes';
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
              <Navbar dark className="navbar">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <img src="/assets/images/JLR_Horz.png" className="img-fluid my-2"/>
                  </div>
                </div>
              </div>
              </Navbar>
              <Directory classes={this.state.classes} />
          </div>
      );
  }
}

export default App;
