// import { api } from 'boot/axios'
import { LocalStorage } from 'quasar'

class TokenService {
  getLocalRefreshToken () {
    const user = JSON.parse(LocalStorage.getItem('user'))
    return user?.refresh
  }

  getLocalAccessToken () {
    const user = JSON.parse(LocalStorage.getItem('user'))
    return user?.access
  }

  updateLocalAccessToken (token) {
    const user = JSON.parse(LocalStorage.getItem('user'))
    user.access = token
    LocalStorage.set('user', JSON.stringify(user))
  }

  getUser () {
    return JSON.parse(LocalStorage.getItem('user'))
  }

  setUser (user) {
    console.log(JSON.stringify(user))
    LocalStorage.set('user', JSON.stringify(user))
  }

  removeUser () {
    LocalStorage.remove('user')
  }
}

export default new TokenService()
