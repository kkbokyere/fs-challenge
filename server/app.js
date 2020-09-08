const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

// enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *
app.use(cors());
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(PORT, () => {
    console.log(`now listening on port ${PORT}`)
});
