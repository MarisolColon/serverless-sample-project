import Requests from "../utils/requests"
const axios = Requests.getAxios()

export default class TestsService {
  static getTests () {
    return axios.get('/api/tests')
  }
  static updateTest (testId, test) {
    return axios.put(`/api/tests/${testId}`, test)
  }
  static createTest (test) {
    return axios.post('/api/tests', { ...test })
  }
  static deleteTest (testId) {
    return axios.delete(`/api/tests/${testId}`)
  }
}