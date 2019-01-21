const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hi, Ciao bella: ' + Math.floor(Math.random() * 100) });
});
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));