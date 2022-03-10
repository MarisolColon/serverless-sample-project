const Joi = require('joi')

const createValidations = Joi.object({
  details: Joi.string()
    .min(1)
    .max(255)
    .required(),
  expectedResult: Joi.string()
    .min(1)
    .max(255)
    .required()
})

const updateValidations = Joi.object({
  details: Joi.string()
    .min(1)
    .max(30)
    .required(),
  expectedResult: Joi.string()
    .min(1)
    .max(255)
    .required()
})

module.exports = {
  createValidations,
  updateValidations
}