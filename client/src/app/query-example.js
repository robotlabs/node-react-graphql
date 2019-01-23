import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_MESSAGE = gql`
  {
    message
  }
`;
const GET_DATA = gql`
  {
    a1
    a2
    dataNested {
      name
      nestedList {
        name
      }
    }
  }
`;

const Profile = () => (
  <Query query={GET_DATA}>
    {({ data, loading }) => {
      const { a1, dataNested } = data;
      if (loading || !a1) {
        return (<div>Loading ...</div>);
      }
      return (
        <div>
          N-{a1}
          {dataNested.map((d) => {
            return d.nestedList.map((m, i) => {
              return (
                <div
                  key={i}>
                {m.id} : {m.name} : {d.name}
                </div>
              )
            })
            
          })}
        </div>
      );
    }}
  </Query>
);
export default Profile;