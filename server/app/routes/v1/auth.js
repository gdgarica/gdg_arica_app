'use strict';

const express = require('express');
const { authCtrl } = require('../../controllers');

const api = express.Router();

api.post('/token', authCtrl.signToken);

module.exports = api;
/*
app.get('/verify', (req, res) => {
  res.send({
    message: 'json dis ok'
  });
});*/
