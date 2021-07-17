import { GraphQLClient, gql } from "graphql-request";
const config = require("./config.json");

const graphQLClient = new GraphQLClient(config.API_ENDPOINT, {
  headers: {
    authorization: `Bearer ${config.GITHUB_TOKEN}`,
  },
});

export async function searchQueryRequest(search) {
  const gqlQuery = gql`
    query searchUsers($query: String!) {
      search(query: $query, type: USER, first: 10) {
        userCount
        pageInfo {
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

  let variables = {
    query: search,
  };

  return await graphQLClient.request(gqlQuery, variables);
}
