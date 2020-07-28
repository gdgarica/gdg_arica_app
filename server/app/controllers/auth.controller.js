'use strict';

const bcrypt = require('bcrypt');
// Services
const _jwtSrv = require('../services/jwt.service');
// Models
const User = require('../models/user.model');

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);

  const token = await _jwtSrv.signToken(username, email, name);
  res.json({ access_token: token });
};

const registerUser = async (req, res, next) => {
  const { email, name, username, password } = req.body;
  if ((email, name, username, password)) {
    const userData = {
      email,
      name,
      username,
      password
    };

    User.create(userData)
      .then((_) => {
        res.status(200).json({
          success: 'New user has been created'
        });
      })
      .catch((err) => {
        console.log('error: ', err);
        res.status(500).json({
          error: err
        });
      });
  }
};

module.exports = {
  loginUser,
  registerUser
};
