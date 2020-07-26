'use strict';

const _jwtSrv = require('../services/jwt.service');

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);

  res.json({ access_token: token });
};

const registerUser = async () => {
  const { email, username, name } = req.body;
  const token = await _jwtSrv.signToken(username, email, name);
};

module.exports = {
  loginUser,
  registerUser
};
