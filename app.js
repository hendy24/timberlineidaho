var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var api = require('./controllers/index');

var app = express();

// Connect to DB
// mongoose.connect('mongodb://localhost/gpsidaho');

// Parsers for POST data
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set routes
app.use('/api', api);

// Catch all other routes and send to the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Get port from environment and store in express
var port = process.env.PORT || 3000;
app.set('port', port);

// Create HTTP Server
var server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port, () => console.log('API running on http://localhost:' + port));

module.exports = app;
