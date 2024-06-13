import { api } from 'boot/axios'
import TokenService from './user/token.service'
import responseCheckError from '../service/responseCheckError'

const setup = (store) => {
  api.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken()
      if (token) {
        config.headers.Authorization = 'JWT ' + token
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (res) => {
      return res
    },
    async (err) => {
      const originalConfig = err.config

      if (originalConfig.url !== '/auth/jwt/refresh/' && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true

          try {
            const rs = await api.post('/auth/jwt/refresh/', {
              refresh: TokenService.getLocalRefreshToken()
            })

            const { access } = rs.data

            store.dispatch('user/refreshToken', access)
            TokenService.updateLocalAccessToken(access)

            return api(originalConfig)
          } catch (_error) {
            return Promise.reject(_error)
          }
        }
      }
      responseCheckError(err.response)
      return Promise.reject(err)
    }
  )
}

export default setup
