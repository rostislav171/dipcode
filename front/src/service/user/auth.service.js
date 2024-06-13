import { api } from 'boot/axios'
// import { LocalStorage } from 'quasar'
import TokenService from './token.service'

class AuthService {
  login (user) {
    return api
      .post('auth/jwt/create/', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.access) {
          TokenService.setUser(response.data)
        }
        return response.data
      })
  }

  logout () {
    TokenService.removeUser()
  }
}

export default new AuthService()
