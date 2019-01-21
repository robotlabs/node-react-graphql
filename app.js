const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');

var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
var root = {
    message: () => 'GQL: Hello World!'
};

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hi, Ciao bella: ' + Math.floor(Math.random() * 100) });
});
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

var port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));