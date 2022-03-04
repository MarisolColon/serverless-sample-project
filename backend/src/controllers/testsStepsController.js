const ServiceFactory = require('../services/Factory')

async function getTestsSteps (req, res) {
  try {
    const testsStepsService = await ServiceFactory.getService('tests_steps')
    const testsSteps = await testsStepsService.listTestsSteps()
    res.json(testsSteps)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function createTestsSteps (req, res) {
  try {
    const testsStepsService = await ServiceFactory.getService('tests_steps')
    const transaction = await testsStepsService.createTestsSteps(req.body)
    res.json(transaction)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function getTestsSteps (req, res) {

}

async function updateTestsSteps (req, res) {
  try {
    const { id } = req.params
    const testsStepsService = await ServiceFactory.getService('tests_steps')
    console.log(req.body)
    const transaction = await testsStepsService.updateTestsSteps(id, req.body)
    res.json(transaction)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function deleteTestsSteps (req, res) {
  try {
    const { id } = req.params
    const testsStepsService = await ServiceFactory.getService('tests_steps')
    const transaction = await testsStepsService.destroyTestsSteps(id)
    res.json(transaction)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

module.exports = {
  getTestsSteps,
  createTestsSteps,
  getTestsSteps,
  updateTestsSteps,
  deleteTestsSteps,
}