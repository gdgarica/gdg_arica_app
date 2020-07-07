'use strict';

const jwt = require('jsonwebtoken');
const { config } = require('../../app/config');

const signToken = async (req, res, next) => {
  const { email, username, name } = req.body;
  console.log(email, username, name);
  /*const SIGN_OPTIONS = {
              algorithm: 'RS256', // algoritmo asimétrico. Token se crea y firma con una clave privada, pero se verifican con la clave pública.
              expiresIn: '15m'
            };*/
  const token = jwt.sign({ sub: username, email, name }, config.authJwtSecret);
  res.json({ access_token: token });
};

module.exports = {
  signToken
};
