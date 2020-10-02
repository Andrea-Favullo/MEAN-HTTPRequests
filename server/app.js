// Get dependencies
const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'about.html'));
});
app.get('/sitemap', function (req, res) {
    res.sendFile(path.join(__dirname, 'sitemap.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => { console.log('Example app listening on port 3000!'); })