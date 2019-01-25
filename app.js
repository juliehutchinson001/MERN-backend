const express = require('express');
const bodyParser = require('body-parser');
const setupEnvironmentVars = require('./config/config');
const users = require('./controllers/users');

setupEnvironmentVars();
const app = express();

// Setup middleware
app.use(bodyParser.json());
app.use('/api/users', users);

module.exports = app;
