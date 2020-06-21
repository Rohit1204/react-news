  
import React, { Component } from 'react';

import Footer from "./components/Footer";
import Navbar from "./components/AppBar";

class App extends Component {
  constructor() {
    super();
    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.state = { source: '' };
  }

  handleSourceChange(value) {
    this.setState({ source: value });
  }
  
  render() {
    return (
      <div className="container">
        <Navbar/>
        <div className="footer">
        <Footer/>
        </div>
      </div>
    );
  }
}

export default App;