import { reactive } from 'vue'
import SportsmansService from 'src/service/sportsmans/Sportsmans.api'

export default function useSportsmansTable (props) {
  const state = reactive({
    data: null,
    loading: true,
    errored: false
  })

  SportsmansService.page()
    .then(response => {
      tableState.data = response.data
    })
    .catch(error => {
      tableState.errored = true
    })
    .finally(() => (tableState.loading = false))

  const loadData = () => {
    return SportsmansService.page()
  }
  console.log(tableState)
  return {
    state,
    loadData
  }
}
