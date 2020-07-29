require('dotenv').config();

const config = {
  PORT: process.env.PORT || 9000,
  JWT_SECRET: process.env.AUTH_JWT_SECRET,
  MONGO_USER: process.env.MONGODB_USER,
  MONGO_PASS: process.env.MONGODB_PASS,
  MONGO_HOST: process.env.MONGODB_HOST,
  MONGO_PORT: process.env.MONGODB_PORT || 27017,
  MONGO_NAME: process.env.MONGODB_NAME
};

module.exports = config;
