import AuthService from '../../service/user/auth.service'
import UserService from '../../service/user/user.service'

export function login ({ commit }, user) {
  return AuthService.login(user).then(
    user => {
      commit('loginSuccess', user)
      return Promise.resolve(user)
    },
    error => {
      commit('loginFailure')
      return Promise.reject(error)
    }
  )
}

export function logout ({ commit }) {
  AuthService.logout()
  commit('logout')
}

export function register ({ commit }, user) {
  return AuthService.register(user).then(
    response => {
      commit('registerSuccess')
      return Promise.resolve(response.data)
    },
    error => {
      commit('registerFailure')
      return Promise.reject(error)
    }
  )
}

export function refreshToken ({ commit }, accessToken) {
  commit('refreshToken', accessToken)
}

export function loadUserInfo ({ commit }) {
  UserService.getUserInfo().then(
    response => {
      commit('setUserInfo', response.data)
      return Promise.resolve(response.data)
    },
    error => {
      return Promise.reject(error)
    }
  )
}
