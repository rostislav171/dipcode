<template>
  <div class="col-12 col-md-10 col-lg-8 q-px-sm q-py-md">
    <q-card class="product-card">
      <q-card-section horizontal>
        <q-img v-if="entity.mainPicture" :src="entity.mainPicture" mod="cover" style="max-width: 250px;"></q-img>
        <q-card-section>
          <div v-if="entity.name" class="text-h5">
              {{ entity.name }}
          </div>
          <div v-if="entity.category" class="text-subtitle1">
            {{ entity.category }}
          </div>
          <div v-if="entity.brand" class="">
            <span class="text-weight-light">Производилель:</span> {{ entity.brand }}
          </div>
          <div v-if="entity.algorithm" class="">
            <span class="text-weight-light">Алгоритм:</span> {{ entity.algorithm }}
          </div>
          <div v-if="entity.currencyMining" class="">
            <span class="text-weight-light">Валюта:</span> {{ entity.currencyMining }}
          </div>
          <div v-if="entity.power" class="">
            <span class="text-weight-light">Потребление:</span> {{ entity.power }}
          </div>
        </q-card-section>
        <q-space></q-space>
        <q-card-section class="column justify-center items-center">
          <div class="product-card__price">{{ entity.price }}</div>
          <div>
            <q-btn round color="primary" icon="add" @click="addToCart(entity)" />
            <span class="product-card__count">{{getCountProductCart(entity.id)}}</span>
            <q-btn round color="red" icon="remove"  @click="removeFromCart(entity.id)"  />
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  name: 'OrderPosition',
  props: {
    entity: {
      required: true
    }
  },
  methods: {
    ...mapActions('cart', [
      'addToCart',
      'removeFromCart'
    ])
  },
  computed: {
    ...mapGetters('cart', [
      'getCountProductCart'
    ])
  }
})
</script>

<style>
.product-card {
}
.product-card__price {
  font-size: 1.7em;

}
.product-card__count {
  font-size: 1.5em;
  margin: 0 1.2rem;
}
.product-card:hover {}
</style>
