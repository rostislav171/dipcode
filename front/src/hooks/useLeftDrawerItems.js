import { useStore } from 'vuex'
import { computed, ref, onMounted } from 'vue'

export default function useLeftDrawerItems (props) {
  const $store = useStore()
  const leftDrawerOpen = ref(false)
  onMounted(() => $store.dispatch('aplicationInterface/loadMenuItems',
    {
      isExaminationTemplatesManager: true
    }))
  const leftDrawerItems = computed(() => $store.getters['aplicationInterface/getMenuItems'])
  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }

  return {
    leftDrawerOpen,
    leftDrawerItems,
    toggleLeftDrawer
  }
}
