<template>
  <q-page>
    <div class="q-pa-md">

      <div class="row justify-center">

        <div class="col-10 col-md-6">
          <q-form @submit="submitForm">
            <h1 class="text-h4">{{$route.meta.title}}</h1>
            <q-input
              v-model="user.username"
              type="text"
              :outlined="true"
              label="Имя пользователя"
              class="q-mb-md"
              />
            <q-input
              v-model="user.password"
              :type="passwordShow ? 'password' : 'text'"
              :outlined="true"
              label="Пароль"
              class="q-mb-md"
            >
              <template v-slot:append>
                <q-icon
                  :name="passwordShow ? 'manage_accounts' : 'manage_accounts'"
                  class="cursor-pointer"
                  @click="passwordShow = !passwordShow"
                />
              </template>
            </q-input >

            <div class="row justify-center">
              <div class="col-12 col-md-6 q-pa-xs">
                  <q-btn color="green" class="full-width" :disable="disableComponentStatus"  type="submit" label="Начало работы" />
              </div>
              <div class="col-12 col-md-6 q-pa-xs">
                  <q-btn color="amber" class="full-width" :disable="disableComponentStatus"  label="Сбросить пароль" />
              </div>
            </div>

            <div class="row q-my-md">
              <div class="col-12">
                <div v-if="message !==''" class="text-weight-bolder text-center text-body1 text-negative">
                  {{message}}
                </div>
              </div>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import useDisableCompponent from 'src/hooks/useDisableCompponent'
export default defineComponent({
  name: 'Login',
  setup () {
    const {
      disable,
      enable,
      disableComponentStatus
    } = useDisableCompponent()

    return {
      disable,
      enable,
      disableComponentStatus
    }
  },
  data () {
    return {
      message: '',
      passwordShow: true,
      user: {
        username: 'admin',
        password: 'admin'
      }

    }
  },
  created () {
  },
  methods: {
    submitForm () {
      this.disable()
      this.$store.dispatch('user/login', this.user)
        .then(() => {
          this.$router.push({ name: 'products' })
          this.enable()
        },
        (error) => {
          this.message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message || error.toString()
          this.enable()
        }
        )
    }
  }
})
</script>
