require('dotenv').config();

const config = {
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  mongoDbUser: process.env.MONGODB_USER
};

module.exports = { config };
