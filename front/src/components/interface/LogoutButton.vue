<template>
  <q-btn-dropdown
    flat
    round
    dense
  >
    <div class="row no-wrap q-pa-md">

       <div class="column items-center">
        {{userInfo}}
        <q-btn
          v-if="getLoggedIn"
          color="red"
          label="Выход"
          push
          size="sm"
          v-close-popup
          @click="logout()"
        />
        <q-btn
          v-else
          @click="this.$router.push({ name: 'login' })"
          color="green"
          label="Войти"
          push
          size="sm"
          v-close-popup
        />
      </div>
      <q-separator vertical inset class="q-mx-lg" />

      <div class="column">
        <div class="text-h6 q-mb-md">Настройки</div>
        <q-toggle label="Ночной режим" :model-value="$q.dark.isActive" @click="$q.dark.toggle()"/>
      </div>

    </div>
  </q-btn-dropdown>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import EventBus from './../../service/user/EventBus'

export default defineComponent({
  name: 'LogoutButton',
  computed: {
    ...mapGetters('user', [
      'userInfo',
      'getLoggedIn'
    ])
  },
  methods: {
    logout () {
      EventBus.dispatch('logout')
    }
  }

})
</script>
