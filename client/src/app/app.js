import React, { Component } from 'react';
import './app.css';

//** components */
import Profile from './profile';
import Repolist from './repolist';

class App extends Component {
  state = {};

  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Profile></Profile>
        <Repolist></Repolist>
      </div>
    );
  }
}
export default App;