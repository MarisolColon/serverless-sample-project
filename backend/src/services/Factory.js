
const DatabaseService = require('./DatabaseService')
const AuthService = require('./AuthService')
const UsersService = require('./UsersService')
const TestService = require('./TestService')

class ServiceFactory {
  static getServices () {
    return {
      users: {
        serviceClass: UsersService,
        models: ['User']
      },
      auth: {
        serviceClass: AuthService
      },
      tests: {
        serviceClass: TestService,
        models:['Test']
      }
    }
  }
  static async getService (serviceName) {
    const serviceConfig = this.getServices()[serviceName]
    if (!serviceConfig) throw new Error(`Unable to resolve configuration for service ${serviceName}`)

    const service = new serviceConfig.serviceClass(ServiceFactory)

    if (Array.isArray(serviceConfig.models)) {
      for (const modelName of serviceConfig.models) {
        const model = await DatabaseService.getModel(modelName)
        service.setModel(model)
      }
    }

    return service
  }

}

module.exports = ServiceFactory
