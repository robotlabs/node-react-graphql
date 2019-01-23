import React, { Component } from 'react';
import './app.css';

//** components */
import QueryExample from './query-example';
import QueryManualExample from './query-manual-example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div 
          className="query-box">
          <QueryExample></QueryExample>
        </div>
        <div 
          className="query-manual-box">
          <QueryManualExample></QueryManualExample>
        </div>
      </div>
    );
  }
}
export default App;