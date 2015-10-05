/**
 * Created by eak on 10/5/15.
 */
var express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html'))
});

app.listen(8080);
console.log('Magic happen on port 8080');