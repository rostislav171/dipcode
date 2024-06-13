import { ref } from 'vue'
import SportsmansApi from 'src/service/sportsmans/Sportsmans.api'

// const sportsmansPage = ref([])

// onMounted(async () => {
//   await SportsmansService.page()
//     .then(response => {
//       sportsmansPage.value = response.data
//     })
// })
export default function SportsmansService (props) {
  // Страница
  const sportsmansPage = ref([])

  // Загрузка страницы
  const loadSportsmansPage = () => {
    SportsmansApi.page()
      .then(response => {
        sportsmansPage.value = response.data
      })
  }

  return {
    sportsmansPage,
    loadSportsmansPage
  }
}
