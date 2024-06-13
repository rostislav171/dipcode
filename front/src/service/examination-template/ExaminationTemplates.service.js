import { api } from 'boot/axios'

const ExaminationTemplatesService = {
  all () {
    return api.get('api/v1/examination-templates/all/')
  },
  create (params) {
    return api.post('api/v1/examination-templates/create/', params)
  },
  createGroup (id, params) {
    return api.post(`api/v1/examination-templates/create-group/${id}/`, params)
  },
  retrive (id) {
    return api.get(`api/v1/examination-templates/retrive/${id}/`)
  }
}

export default ExaminationTemplatesService
