export default class StorageService {
  static set (name, value) {
    window.localStorage.setItem(name, JSON.stringify(value))
  }

  static get (name) {
    const value = window.localStorage.getItem(name)
    try {
      return JSON.parse(value)
    } catch (error) {
      return value
    }
  }

  static remove (name) {
    window.localStorage.removeItem(name)
  }

  static clear () {
    window.localStorage.clear()
  }
}
