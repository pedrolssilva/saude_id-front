import StorageService from './StorageService'
import HistoryService from './HistoryService'

export default class AuthenticationService {

  static get token () {
    return StorageService.get('session_token')
  }

  static get apiAuthenticatedHeaders () {
    return {
      'x-access-token': AuthenticationService.accessToken
    }
  }

  static get userId () {
    return StorageService.get('userId')
  }

  static set userId (data) {
    return StorageService.set('userId', data)
  }

  static async login (signinData) {
    const signInData = null// create request to login e auth
    StorageService.set('session_token', signInData.data ? signInData.token : null)
    StorageService.set('userId', signinData.userId)
    if (!signInData) {
      HistoryService.push('/signin')
      return
    }
  }

  static async logout () {
    await // Create create request to logout => signOut(StorageService.get('access_token'))
    AuthenticationService.clear()
  }

  static clear () {
    StorageService.clear()
  }
}
