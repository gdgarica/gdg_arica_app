'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const _routes = require('./app/routes/v1');
const _mongoSrv = require('./app/lib/mongodb');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/v1', _routes);

app.listen(9000, async () => {
  console.log('Server corriendo xD');
  await _mongoSrv.init();
});
