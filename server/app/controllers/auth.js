'use strict';

const JwtService = require('../services/jwt');
const _jwtSrv = new JwtService();

const signToken = async (req, res, next) => {
  const { email, username, name } = req.body;
  console.log(email, username, name);

  const token = await _jwtSrv.signToken(username, email, name);
  res.json({ access_token: token });
};

module.exports = {
  signToken
};
