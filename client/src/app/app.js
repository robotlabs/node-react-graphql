import React, { Component } from 'react';
import './app.css';

import gql from 'graphql-tag';
import { ApolloConsumer } from "react-apollo";
//** components */
import Profile from './profile';
import Repolist from './repolist';

class App extends Component {
  state = {
    playMessage: 'loading'
  };

  async componentDidMount() {
    this.test();

    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }
  async test(client) {
    const GET_MESSAGE = gql`
      {
        message
      }
    `;
    const { data } = await this.client.query({
      query: GET_MESSAGE,
      variables: { breed: "bulldog" }
    });
    console.log('*****data ', data.message);
    // console.log('client query ', client.query(GET_MESSAGE));
    this.setState({playMessage: data.message});
  }
  render() {
    const GET_MESSAGE = gql`
      {
        message
      }
    `;
    return (
      <div className="App">
        <Profile></Profile>
        <ApolloConsumer>
          {client => {
            this.client = client;
            // console.log('client query ', client.query(GET_MESSAGE));
            return(<div>{this.state.playMessage}</div>)
          }}
        </ApolloConsumer>
        {
          /*
          <Repolist></Repolist>
          */
        }
        
      </div>
    );
  }
}
export default App;