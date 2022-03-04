const ServiceFactory = require('../services/Factory')

async function getTests (req, res) {
  try {
    const testService = await ServiceFactory.getService('tests')
    const tests = await testService.listTests()
    res.json(tests)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function createTest (req, res) {
  try {
    const testService = await ServiceFactory.getService('tests')
    const transaction = await testService.createTest(req.body)
    res.json(transaction)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function getTest (req, res) {

}

async function updateTest (req, res) {
  try {
    const { id } = req.params
    const testService = await ServiceFactory.getService('tests')
    console.log(req.body)
    const transaction = await testService.updateTest(id, req.body)
    res.json(transaction)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

async function deleteTest (req, res) {
  try {
    const { id } = req.params
    const testService = await ServiceFactory.getService('tests')
    const transaction = await testService.destroyTest(id)
    res.json(transaction)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.toString())
  }
}

module.exports = {
  getTests,
  createTest,
  getTest,
  updateTest,
  deleteTest,
}