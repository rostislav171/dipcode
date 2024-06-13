import { api } from 'boot/axios'

const InidcatorsService = {
  all () {
    return api.get('api/v1/examination-templates/indicator/all/')
  },
  create (params) {
    return api.post('api/v1/examination-templates/indicator/create/', params)
  },
  destroy (params) {
    return api.delete('api/v1/examination-templates/indicator/destroy/', params)
  },
  update (params) {
    return api.put('api/v1/examination-templates/indicator/create/', params)
  },
  partialUpdate (params) {
    return api.patch('api/v1/examination-templates/indicator/create/', params)
  }
}

export default InidcatorsService
