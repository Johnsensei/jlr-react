import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import Directory from './components/DirectoryComponent';
// import { LANGUAGECLASSES } from './components/shared/classes';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     languageClasses: LANGUAGECLASSES
  //   };
  // }
  
  render() {
      return (
        <BrowserRouter>
            <div className="App">
                <Main />
            </div>
          </BrowserRouter>


          // <div className="App">
          //     <Navbar dark className="navbar">
          //     <div className="container">
          //       <div className="row">
          //         <div className="col">
          //           <img src="/assets/images/JLR_Horz.png" className="img-fluid my-2"/>
          //         </div>
          //       </div>
          //     </div>
          //     </Navbar>
          //     <Directory classes={this.state.classes} />
          // </div>
      );

  }


}

export default App;
