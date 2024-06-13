import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default function useUserInfo (props) {
  const $store = useStore()
  onMounted(() => $store.dispatch('user/loadUserInfo'))
  const userInfo = computed(() => $store.getters['user/getUserInfo'])
  return {
    userInfo
  }
}
