<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-12"><h4 class="text-h4 q-ma-xs">Настройки админа</h4></div>
        <button ></button>
        <div class="col-4">
          1
        </div>
        <div class="col-4">
          2
        </div>
        <div class="col-4">
          3
        </div>
      </div>
      <div class="row">
        <div class="col-12">Шрифт</div>
        <div class="col-4">
          1 class="flex flex-center"
        </div>
        <div class="col-4">
          2 class="flex flex-center"
        </div>
        <div class="col-4">
          3 class="flex flex-center"
        </div>
      </div>
      <div class="row">
        <div class="col">
          1
        </div>
        <div class="col">
          2
        </div>
        <div class="col">
          3
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageSettings'
})
</script>

<style lang="sass">
:root
    --q-primary: red
    --q-secondary: #26A69A
    --q-accent: #9C27B0
    --q-positive: #21BA45
    --q-negative: #C10015
    --q-info: #31CCEC
    --q-warning: #F2C037
    --q-dark: #1D1D1D
    --q-dark-page: #121212
</style>
