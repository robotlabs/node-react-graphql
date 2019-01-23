import gql from 'graphql-tag';
export const GET_MESSAGE = gql`
  {
    message
  }
`;
export const GET_DATA = gql`
  {
    a1
    dataNested {
      name
      nestedList {
        name
      }
    }
  }
`;

export const GET_ALL = gql`
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