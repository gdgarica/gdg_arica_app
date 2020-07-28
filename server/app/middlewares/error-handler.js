const { config } = require('../config');

const withErrorStack = (err, stack) => {
  if (config.dev) return { err, stack };
  return err;
};

const logErrors = (err, req, res, next) => {
  console.log(err);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500);
  res.json(withErrorStack(err.message, err.stack));
};

module.exports = {
  logErrors,
  errorHandler,
  withErrorStack
};
