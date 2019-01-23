import React, {Component} from 'react';

import { ApolloConsumer } from "react-apollo";

import {GET_ALL} from './queries';

class QueryManualExample extends Component {
  state = { messageTest: 'loading'};
  componentDidMount() {
    this.fetchGraphQlData();
  }
  async fetchGraphQlData() {
    const { data } = await this.client.query({
      query: GET_ALL
    });
    //** update your d3 or whatever */
    console.log('data ', data);
    this.setState({messageTest: data.a1})
  }
  render() {
    return(
      <div>
        <ApolloConsumer>
          {client => {
            this.client = client;
            return(<div>{this.state.messageTest}</div>)
          }}
        </ApolloConsumer>
      </div>
    )
  }
}
export default QueryManualExample;