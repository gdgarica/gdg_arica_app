const validate = () => {
  return false;
};

const validationHandler = (schema, check = 'body') => {
  return (req, res, next) => {
    const error = validate(req[check], schema);
    error ? next(new Error(error)) : next();
  };
};

module.exports = validationHandler;
