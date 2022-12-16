const Joi = require('joi');

const validateAddUserMiddleware = async (req, res, next) => {
  const userInput = req.body;
  try {
    await addUserValidator.validateAsync(userInput);
    next();
  } catch (err) {
    return res.status(406).json(err.details[0].message);
  }
};

//define validation schema object
const addUserValidator = Joi.object({
  firstname: Joi.string().min(2).max(15).required(),
  lastname: Joi.string().min(2).max(15).required(),
  username: Joi.string().min(3).max(15),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'org'] },
  }),
  password: Joi.string().min(8),
  passwordConfirm: Joi.ref('password'),
});

//login user
const loginUserValidator = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'org', ] },
  }),
  password: Joi.string().min(8),
});

const validateLoginUserMiddleware = async (req, res, next) => {
  const userPayload = req.body;
  try {
    await loginUserValidator.validateAsync(userPayload)
    next()
  } catch (error) {
    next({
      status: 400,
      message: error.details[0].message,
    });
  }
};
module.exports = {
  validateAddUserMiddleware,
  validateLoginUserMiddleware
};
