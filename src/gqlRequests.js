import { GraphQLClient, gql } from "graphql-request";
const config = require("./config.json");

const graphQLClient = new GraphQLClient(process.env.REACT_APP_API_ENDPOINT, {
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

const queryPrevious = gql`
  query searchUsers($query: String!, $startCursor: String) {
    search(query: $query, type: USER, last: 10, before: $startCursor) {
      userCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ... on User {
            id
            login
            avatarUrl
            name
            bio
            url
          }
        }
      }
    }
  }
`;

const queryNext = gql`
  query searchUsers($query: String!, $endCursor: String, $startCursor: String) {
    search(
      query: $query
      type: USER
      first: 10
      after: $endCursor
      before: $startCursor
    ) {
      userCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ... on User {
            id
            login
            avatarUrl
            name
            bio
            url
          }
        }
      }
    }
  }
`;

export async function searchQueryRequest(search, pageChange) {
  if (!search) return;

  let gqlQuery = queryNext;

  let variables = {
    query: search,
  };

  if (pageChange[1] === "NEXT") {
    variables = {
      query: search,
      endCursor: pageChange[0],
    };
  }

  if (pageChange[1] === "PREV") {
    variables = {
      query: search,
      startCursor: pageChange[0],
    };
    gqlQuery = queryPrevious;
  }
  console.log(variables, pageChange);
  return await graphQLClient.request(gqlQuery, variables);
}
