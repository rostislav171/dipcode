<template>
  <q-page>
    <div class="q-pa-md">
      <create-order></create-order>
    </div>
  </q-page>
</template>
<script>
import CreateOrder from 'components/orders/CreateOrder.vue'

export default {
  components: {
    CreateOrder
  }
}
</script>
