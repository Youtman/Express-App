const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// file system library
const fs = require('fs');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const routes = require('./routes/routes')(app, fs);

// Server

app.listen(5000, () => {
	console.log('Server up and running');
});
