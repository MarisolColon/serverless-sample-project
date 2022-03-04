const express = require('express')
const { validation } = require('../utils/validation')
const controllerValidations = require('../validations/testsSteps')
const router = express.Router()
const testsStepsController = require('../controllers/testsStepsController')

router.get(
  '/',
  testsStepsController.getTestsSteps
)

router.post(
  '/',
  validation(controllerValidations.createValidations),
  testsStepsController.createTestsSteps
)

router.get(
  '/:id',
  testsStepsController.getTestsSteps
)

router.put(
  '/:id',
  validation(controllerValidations.updateValidations),
  testsStepsController.updateTestsSteps
)

router.delete(
  '/:id',
  testsStepsController.deleteTestsSteps
)

module.exports = router
