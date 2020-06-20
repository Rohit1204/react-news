  
import React, { Component } from 'react';
import SourceSelection from './components/SourceSelection';
import NewsList from './components/NewsList';

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
        <SourceSelection onSourceChange={this.handleSourceChange} />
        <NewsList source={this.state.source} />
      </div>
    );
  }
}

export default App;