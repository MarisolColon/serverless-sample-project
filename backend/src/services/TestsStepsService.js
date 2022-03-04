const BaseService = require('./BaseService')

class TestsStepsService extends BaseService {
  getTestsSteps (email) {
    const testsStepsModal = this.getModel('TestSteps')
    return testsStepsModal.findOne({
      where: {
        email
      }
    })
  }
  listTestsSteps () {
    const testsStepsModel = this.getModel('TestSteps')
    return testsStepsModel.findAll({
      attributes: { exclude: ['password'] }
    })
  }
  createTestsSteps (testStep) {
    const testsStepsModel = this.getModel('TestSteps')
    return testsStepsModel.create(testStep)
  }
  updateTestsSteps (testStepId, details) {
    const testsStepsModel = this.getModel('TestSteps')
    return testsStepsModel.update(details, { where: { id: testStepId }})
  }
  destroyTestsSteps (testStepId) {
    const testsStepsModel = this.getModel('TestSteps')
    return testsStepsModel.destroy({ where: { id: testStepId }})
  }
}
module.exports = TestsStepsService