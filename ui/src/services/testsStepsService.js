import Requests from "../utils/requests"
const axios = Requests.getAxios()

export default class TestsStepsService {
  static getTestsSteps (testId) {
    return axios.get(`/api/tests/${testId}/steps/`)
  }
  static updateTestsSteps (testId, stepId, testStep) {
    return axios.put(`/api/tests/${testId}/steps/${stepId}`, testStep)
  }
  static createTestsSteps (testId, testStep) {
    return axios.post(`/api/tests/${testId}/steps/`, { ...testStep })
  }
  static deleteTestsSteps (testId, stepId) {
    return axios.delete(`/api/tests/${testId}/steps/${stepId}`)
  }
}