import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_MESSAGE = gql`
  {
    message
  }
`;

const Profile = () => (
  <Query query={GET_MESSAGE}>
    {({ data, loading }) => {
      const { message } = data;
      console.log(':: >>message ', message);
      if (loading || !message) {
        console.log('---');
        return (<div>Loading ...</div>);
      }
      return (
        <div>
          {message}
        </div>
      );
    }}
  </Query>
);
export default Profile;