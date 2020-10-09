// Get dependencies
const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
    res.send('Server ha inviato questo');
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => { console.log('Example app listening on port 3000!'); })