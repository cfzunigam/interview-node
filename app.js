const express = require('express');
const routes = require('./src/routes/routes');

const app = express();

app.use('/api', routes);

module.exports = app;