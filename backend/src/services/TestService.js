const BaseService = require('./BaseService')

class TestService extends BaseService {
  getTest (email) {
    const testsModal = this.getModel('Test')
    return testsModal.findOne({
      where: {
        email
      }
    })
  }
  listTests () {
    const testsModel = this.getModel('Test')
    return testsModel.findAll({
      attributes: { exclude: ['password'] }
    })
  }
  createTest (test) {
    const testsModel = this.getModel('Test')
    return testsModel.create(test)
  }
  updateTest (testId, details) {
    const testsModel = this.getModel('Test')
    return testsModel.update(details, { where: { id: testId }})
  }
  destroyTest (testId) {
    const testsModel = this.getModel('Test')
    return testsModel.destroy({ where: { id: testId }})
  }
}
module.exports = TestService