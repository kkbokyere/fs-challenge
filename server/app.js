const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

// enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`now listening on port ${PORT}`)
});
