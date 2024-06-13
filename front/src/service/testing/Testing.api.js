import { api } from 'boot/axios'

const TestingApi = {
  all () {
    return api
      .get('api/v1/testing/test-template/')
  },

  detail (id) {
    return api
      .get(`api/v1/testing/test-template/${id}/`)
  }

}

export default TestingApi
