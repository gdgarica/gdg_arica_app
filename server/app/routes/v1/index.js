const express = require('express');
const auth = require('./auth');

const app = express();

app.use('/auth', auth);

app.get('/', async (req, res) => {
  res.send('asdsad');
});

module.exports = app;
