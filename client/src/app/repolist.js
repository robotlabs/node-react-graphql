import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_REPO = gql`
{
  viewer {
    repositories(
      first: 15
      orderBy: { direction: DESC, field: STARGAZERS }
    ) {
      edges {
        node {
          id
          name
          url
          descriptionHTML
          primaryLanguage {
            name
          }
          owner {
            login
            url
          }
          stargazers {
            totalCount
          }
          viewerHasStarred
          watchers {
            totalCount
          }
          viewerSubscription
        }
      }
    }
  }
}
`
const Repolist = () => (
  <Query query={GET_REPO}>
    {({ data, loading }) => {
      const { viewer } = data;
      if (loading || !viewer) {
        return <div>Loading ...</div>;
      }

      let test = viewer.repositories.edges.map(({ node }) => {
        return (
          <div key={node.id} className="RepositoryItem">
            <div>{node.name}</div>
          </div>
        )
      });

      return (
        <div>
          xx: {test}
        </div>
      )
    }}
  </Query>
);
export default Repolist;