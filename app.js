const express = require('express');
const bodyParser = require('body-parser');
const users = require('./controllers/users');

const app = express();

// Setup middleware
app.use(bodyParser.json());
app.use('/api/users', users);

module.exports = app;
