import { reactive } from 'vue'
import SportsmansService from 'src/service/products/Sportsmans.api'

const columns = [
  { name: 'id', label: 'Код', field: 'id' },
  { name: 'lastName', label: 'Фамилия', field: 'lastName' },
  { name: 'firstName', label: 'Имя', field: 'firstName' },
  { name: 'secondName', label: 'Отчество', field: 'secondName' },
  { name: 'username', label: 'Логин', field: 'username' },
  { name: 'email', label: 'Электронная почта', field: 'email' }
]

export default function useSportsmansTable (props) {
  const tableState = reactive({
    data: null,
    loading: true,
    errored: false
  })

  SportsmansService.page()
    .then(response => {
      tableState.data = response.data
    })
    .catch(error => {
      console.log(error)
      tableState.errored = true
    })
    .finally(() => (tableState.loading = false))

  const loadData = (filters) => {
    return ProductService.page(filters)
  }
  console.log(tableState)
  return {
    tableState,
    columns,
    loadData
  }
}
