<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue'
import EventBus from './service/user/EventBus'

export default defineComponent({
  name: 'App',
  methods: {
    logOut () {
      this.$store.dispatch('user/logout')
      this.$router.push({ name: 'products' })
    }
  },
  mounted () {
    EventBus.on('logout', () => {
      this.logOut()
    })
  },
  beforeUnmount () {
    EventBus.remove('logout')
  }
})
</script>
