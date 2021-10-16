import axios from 'axios'
import axiosRetry from 'axios-retry'
import AuthenticationService from './AuthenticationService'

export default class ApiRequestService {
  constructor () {
    this.headers = { ...AuthenticationService.apiAuthenticatedHeaders }
    this.url = ''
    this.method = 'get'
    this.data = null
    this.params = {}
  }

  static get endpoint () {
    return process.env.REACT_APP_API_ENDPOINT
  }

  get () {
    this.method = 'get'
    return this
  }

  post () {
    this.method = 'post'
    return this
  }

  put () {
    this.method = 'put'
    return this
  }

  delete () {
    this.method = 'delete'
    return this
  }

  path (path) {
    this.url = `${ApiRequestService.endpoint}${path}`
    return this
  }

  body (data) {
    this.data = data
    return this
  }

  header (key, value) {
    this.headers[key] = value
    return this
  }

  param (keyOrObject, value) {
    if (typeof keyOrObject === 'object') {
      this.params = { ...this.params, ...keyOrObject }
      return this
    }

    this.params[keyOrObject] = value
    return this
  }

  static get (path) {
    return new ApiRequestService().get().path(path)
  }

  static put (path) {
    return new ApiRequestService().put().path(path)
  }

  static post (path) {
    return new ApiRequestService().post().path(path)
  }

  static delete (path) {
    return new ApiRequestService().delete().path(path)
  }
  exec () {
    axiosRetry(axios, {
      retries: 3
    })

    return axios({
      method: this.method,
      url: this.url,
      data: this.data,
      headers: this.headers,
      params: this.params
    })
  }

  then (handler) {
    return this.exec().then(handler)
  }

  catch (handler) {
    return this.exec().catch(handler)
  }
}
