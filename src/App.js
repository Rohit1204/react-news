  
import React, { Component } from 'react';
import axios from 'axios';

import Footer from "./components/Footer";
import Navbar from "./components/AppBar";

class App extends Component {

    
  
  render() {
    return (
      <div className="container">
        <Navbar/>
        <div className="footer">
        </div>
      </div>
    );
  }
}

export default App;