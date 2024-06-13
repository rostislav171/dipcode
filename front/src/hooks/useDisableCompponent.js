import { computed, ref } from 'vue'

export default function useDisableCompponent (props) {
  const disableStatus = ref(false)

  const disableComponentStatus = computed(() => disableStatus.value)
  const disable = () => {
    disableStatus.value = true
  }
  const enable = () => {
    disableStatus.value = false
  }
  return {
    disable,
    enable,
    disableComponentStatus
  }
}
