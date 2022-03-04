const ServiceFactory = require('../services/Factory')

async function getTestsSteps (req, res) {
  try {
    const { testId } = req.params
    const testsStepsService = await ServiceFactory.getService('testsSteps')
    console.trace(req.params)
    const testsSteps = await testsStepsService.listTestsSteps(testId)
    res.json(testsSteps)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function createTestsSteps (req, res) {
  try {
    const { testId } = req.params
    const testsStepsService = await ServiceFactory.getService('testsSteps')
    const testStep = await testsStepsService.createTestsSteps({ ...req.body, testId })
    res.json(testStep)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function updateTestsSteps (req, res) {
  try {
    const { testId, id } = req.params
    const testsStepsService = await ServiceFactory.getService('testsSteps')
    console.log(req.body)
    const testStep = await testsStepsService.updateTestsSteps(testId, id, req.body)
    res.json(testStep)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function deleteTestsSteps (req, res) {
  try {
    const { testId, id } = req.params
    const testsStepsService = await ServiceFactory.getService('testsSteps')
    const testStep = await testsStepsService.destroyTestsSteps(testId, id)
    res.json(testStep)
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