import { boot } from 'quasar/wrappers'
import BaseButton from 'components/interface/MtButton.vue'
import BaseNumber from 'components/interface/MtNumber.vue'
import BaseString from 'components/interface/MtString.vue'
// import MtPhone from 'components/interface/MtPhone.vue'
// import MtEmail from 'components/interface/MtEmail.vue'
import BaseDate from 'components/interface/MtDate.vue'

export default boot(({ app }) => {
  app.component('base-button', BaseButton)
  app.component('base-number', BaseNumber)
  app.component('base-string', BaseString)
  app.component('base-date', BaseDate)
})
