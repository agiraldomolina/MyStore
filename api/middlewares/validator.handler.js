const boom = require("@hapi/boom");

const validatorHandler = (scheme, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = scheme.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error.details[0].message));
    }
    next();
  };
};

module.exports = validatorHandler;
