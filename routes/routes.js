const express = require('express');

// Routes
const userRoutes = require('./users');
const getIdRoutes = require('./getId');

const appRouter = (app, fs) => {
	app.get('/', (req, res) => {
		res.send('Express App');
	});

	userRoutes(app, fs);
	getIdRoutes(app, fs);
};

module.exports = appRouter;
