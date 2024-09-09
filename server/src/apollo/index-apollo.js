const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const express = require('express');
require('dotenv').config(); 
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
}))

app.listen(port, console.log(` 🚀  Server is running on port ${port}`));



async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
}

// startApolloServer();