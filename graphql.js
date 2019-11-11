// graphql.js

const { ApolloServer, gql } = require('apollo-server-lambda');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello(who: String!): String!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (_, args) => {return `Lambda GraphQL args: ${JSON.stringify(args)}`},
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler({
    cors: {
      origin: '*',
      credentials: true,
    },
  });