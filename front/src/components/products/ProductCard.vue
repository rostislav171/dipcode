<template>
  <div class="col-12 col-md-3 col-lg-3 q-px-sm q-py-md">
    <q-card class="product-card">
      <q-img v-if="entity.mainPicture" :src="entity.mainPicture" mod="cover" style="max-height: 250px;">
      </q-img>
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
      <q-card-section class="q-pt-none">
        {{ entity.shortDescription }}
      </q-card-section>

      <q-space></q-space>

      <q-card-section class="q-pt-none row items-center justify-around">
        <div class="product-card__price">{{ entity.price }}</div>
        <div v-if="getCountProductCart(entity.id) > 0" class="">
          <q-btn round color="primary" icon="add" @click="addToCart(entity)" />
          <span class="product-card__count">{{getCountProductCart(entity.id)}}</span>
          <q-btn round color="red" icon="remove"  @click="removeFromCart(entity.id)"  />
        </div>
        <div v-else class="">
          <q-btn color="primary" label="Купить" @click="addToCart(entity)" />
        </div>
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  name: 'ProductCard',
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
  height:100%;
  width:100%;
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
