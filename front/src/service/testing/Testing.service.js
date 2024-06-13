import { ref } from 'vue'
import TestingApi from 'src/service/testing/Testing.api'

export default function TestingService (props) {
  const testingTemplateAll = ref([])

  const loadTestingTemplateAll = () => {
    TestingApi.all()
      .then(response => {
        testingTemplateAll.value = response.data
      })
  }

  const testingTemplateDetail = ref({})

  const loadTestingTemplateDetail = (id) => {
    TestingApi.detail(id)
      .then(response => {
        testingTemplateDetail.value = response.data
      })
  }
  return {
    testingTemplateAll,
    loadTestingTemplateAll,
    testingTemplateDetail,
    loadTestingTemplateDetail
  }
}
