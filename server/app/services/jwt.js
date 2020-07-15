const jwt = require('jsonwebtoken');
const { config } = require('../config');

class JwtService {
  signToken(username, email, name) {
    return jwt.sign({ sub: username, email, name }, config.authJwtSecret);
  }

  verifyToken() {}
}

module.exports = JwtService;

/*const SIGN_OPTIONS = {
              algorithm: 'RS256', // algoritmo asimétrico. Token se crea y firma con una clave privada, pero se verifican con la clave pública.
              expiresIn: '15m'
            };*/
