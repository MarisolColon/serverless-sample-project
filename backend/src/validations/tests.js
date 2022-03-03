const Joi = require('joi')

const createValidations = Joi.object({
  description: Joi.string()
    .min(1)
    .max(30)
    .required()
})

const updateValidations = Joi.object({
  description: Joi.string()
    .min(1)
    .max(30)
    .required()
})

module.exports = {
  createValidations,
  updateValidations
}