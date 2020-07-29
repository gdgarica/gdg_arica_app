'use strict';

const express = require('express');
const cors = require('cors');
const _routes = require('./app/routes/v1');
// Services
const _mongoSrv = require('./app/lib/mongodb');
// Constants
const { PORT } = require('./app/config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/v1', _routes);

app.listen(PORT, async () => {
  console.log(` [+] Server is running on ${PORT}.`);
  await _mongoSrv.init();
});
