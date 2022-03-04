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
  listTestsSteps (testId) {
    const testsStepsModel = this.getModel('TestSteps')
    return testsStepsModel.findAll({
      where: {
        testId
      }
    })
  }
  createTestsSteps (testStep) {
    const testsStepsModel = this.getModel('TestSteps')
    return testsStepsModel.create(testStep)
  }
  updateTestsSteps (testId, testStepId, details) {
    const testsStepsModel = this.getModel('TestSteps')
    return testsStepsModel.update(details, { where: { id: testStepId, testId }})
  }
  destroyTestsSteps (testId, testStepId) {
    const testsStepsModel = this.getModel('TestSteps')
    return testsStepsModel.destroy({ where: { id: testStepId, testId }})
  }
}
module.exports = TestsStepsService