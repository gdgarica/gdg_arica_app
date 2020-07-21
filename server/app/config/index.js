require('dotenv').config();

const config = {
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  mongoDbUser: process.env.MONGODB_USER,
  mongoDbPass: process.env.MONGODB_PASS,
  mongoDbHost: process.env.MONGODB_HOST,
  mongoDbPort: process.env.MONGODB_PORT || 27017,
  mongoDbName: process.env.MONGODB_NAME
};

module.exports = { config };
