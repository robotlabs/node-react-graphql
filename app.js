const express = require('express');
const path = require('path');
const app = express();

var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type dataNestedObject {
        name: String
        nestedList: [nestedFinal]
    }
    type nestedFinal {
        name: String
    }
    type Query {
        a1: String,
        a2: String,
        message: String
        dataNested: [dataNestedObject]
    }
    
`);
// Root resolver
var root = {
    message: () => 'GQL: Hello World!',
    passera: () => 'HI I AM PASSERA',
    channels: () => [
        {
            id: 32,
            name: 'Paolo'
        },{
            id: 43,
            name: 'xx'
        }],
    a1: () => 'yeppa. i am from graphQL',
    a2: () => {
        if (Math.random() < 0.5) return '<'
        return '>'
    },
    dataNested: () => [
        {
            name: 'AA1',
            nestedList: [
                {
                    name: 'cc1'
                },
                {
                    name: 'cc2'
                }
            ]
        },
        {
            name: 'AA2',
            nestedList: [
                {
                    name: 'dd1'
                },
                {
                    name: 'dd2'
                },
                {
                    name: 'dd3'
                }
            ]
        }
    ]
};

//** standard REST api */
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hi, Ciao bella: ' + Math.floor(Math.random() * 100) });
});

//** graphQL api */
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