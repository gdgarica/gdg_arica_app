'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const _routes = require('./app/routes/v1');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/v1', _routes);

app.listen(9000, () => {
  console.log('Server corriendo xD');
});
