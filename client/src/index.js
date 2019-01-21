import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import * as serviceWorker from './services/serviceWorker';

//** graphQL stuff */
import { ApolloProvider } from 'react-apollo';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';

const GITHUB_BASE_URL = 'graphql/';


const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    // authorization: `Bearer ${
    //   process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    // }`,
  },
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link: httpLink,
  cache,
});

ReactDOM.render(
  <ApolloProvider 
    client={client}>
    <App />
  </ApolloProvider>
  , 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
