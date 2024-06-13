import { api } from 'boot/axios'

class UserService {
  async getUserInfo () {
    return await api.get('auth/users/me/')
  }
}

export default new UserService()
