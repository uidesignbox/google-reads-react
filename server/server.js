const express = require('express');
const schema = require('./schema.js');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
   schema: schema,
   graphiql: true
}));

app.listen(4000);
console.log(`🚀  Server ready at localhost:4000/graphql`);
