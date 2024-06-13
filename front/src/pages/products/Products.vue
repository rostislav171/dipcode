<template>
  <q-page>
    <div class="q-pa-md">
      <product-cards></product-cards>
    </div>
  </q-page>
</template>

<script>
import ProductCards from 'components/products/ProductCards.vue'
import { defineComponent } from 'vue'
// import { ProductService } from 'src/service/products/ProductService'

export default defineComponent({
  components: {
    ProductCards
  }
})
</script>
