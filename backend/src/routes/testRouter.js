const express = require('express')
const { validation } = require('../utils/validation')
const controllerValidations = require('../validations/users')
const router = express.Router()
const testsController = require('../controllers/testsController')

router.get(
  '/',
  testsController.getTests
)

router.post(
  '/',
  validation(controllerValidations.createValidations),
  testsController.createTest
)

router.get(
  '/:id',
  testsController.getTest
)

router.put(
  '/:id',
  validation(controllerValidations.updateValidations),
  testsController.updateTest
)

router.delete(
  '/:id',
  testsController.deleteTest
)

module.exports = router
