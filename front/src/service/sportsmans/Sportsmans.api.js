import { api } from 'boot/axios'

const SportsmansApi = {
  page () {
    return api
      .get('api/v1/users/sportsman/page/')
  },

  detail (id) {
    return api
      .get(`api/v1/users/sportsman/detail/${id}`)
  },

  create (data) {
    return api
      .post('api/v1/users/sportsman/create/', data)
  }
}

export default SportsmansApi
