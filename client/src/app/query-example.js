import React from 'react';
import { Query } from 'react-apollo';

import {GET_DATA} from './queries';

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