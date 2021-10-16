import ApiRequestService from './ApiRequestService'
import StorageService from './StorageService'
import HistoryService from './HistoryService'
import { toast } from 'react-toastify';

export const register = (configuration) => {
  return ApiRequestService.post('login/create')
    .body(configuration)
    .exec()
    .then(function (data) {
      HistoryService.push('/signIn')
    })
    .catch(function (error) {
      toast.error(error.data.message)
      })
}

export function signIn (configuration) {

  return ApiRequestService.post('login/in')
    .body(configuration)
    .exec()
    .then(function (result) {
      console.log(result)
      const {userId, token} = result.data
      const {email} = configuration
      StorageService.set('userId', userId)
      StorageService.set('email', email)
      StorageService.set('token', token)

      HistoryService.push('/movies')
    })
    .catch(function (error) {
      toast.error(error.data.message)
      })
}

export const signOut = (configuration) => {
  return ApiRequestService.post('login/out')
    .body(configuration)
    .exec()
    .then(function (result) {
      StorageService.clear()

      HistoryService.push('/signin')
    })
    .catch(function (error) {
      console.info(JSON.stringify(error))
      // toast.error(error.data.message)
      })
}

