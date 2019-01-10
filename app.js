const express = require('express');
const bodyParser = require('body-parser');
const users = require('./api/users');

const app = express();

app.use(bodyParser.json());

app.use('/api/users', users);

module.exports = app;
