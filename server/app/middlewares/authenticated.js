'use strict';

const JwtService = require('../services/jwt');
const { JWT_SECRET } = require('../config');

const _jwtSrv = new JwtService();

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['authorization'];
    if (!token)
      return res.status(403).json({
        message: `The request doesn't have the authorization header.`
      });
    await _jwtSrv.verifyToken(token, JWT_SECRET);
    req.token = token;
    req.user_payload = decoded.user;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).send({ message: `The access token is invalid.` });
    }
  }
};

module.exports = {
  verifyToken
};
