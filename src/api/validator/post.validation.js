const Joi = require('joi');

const validateAddPostMiddleware = async (req, res, next) => {
  const postData = req.body;
  try {
    await addPostValidator.validateAsync(postData);
    next();
  } catch (err) {
    next({
      message: err.details[0].message,
      status: 400,
    });
  }
};
const addPostValidator = Joi.object({
  post: Joi.string().trim(),
  image: Joi.string().optional(),
});

const updatePostValidator = Joi.object({
  post: Joi.string().trim(),
});

const validateUpdatePostMiddleware = async (req, res, next) => {
  const postPayload = req.body;
  try {
    await updatePostValidator.validateAsync(postPayload);
    next();
  } catch (error) {
    next({
      status: 400,
      message: error.details[0].message,
    });
  }
};

module.exports = {
    validateAddPostMiddleware,
    validateUpdatePostMiddleware
};
