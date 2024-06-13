<template>
  <div class="row items-start justify-around">
    <div class="col-12">
      <div class="row justify-center q-gutter-lg">
        <div class="col-12 col-lg-3 col-lg-2">
          <q-select v-model="brand" multiple :options="getRefByName('brand')" label="Производилель" option-value="id" option-label="name" />
        </div>
        <div class="col-12 col-lg-3 col-lg-2">
          <q-select v-model="currencyMining" multiple :options="getRefByName('currency_mining')" label="Валюта"  option-value="id" option-label="name" />
        </div>
        <div class="col-12 col-lg-3 col-lg-2">
          <q-select v-model="algorithm" multiple :options="getRefByName('algorithm')" label="Алгоритм"  option-value="id" option-label="name" />
        </div>
        <div class="col-12 col-lg-3 col-lg-2">
          <q-select v-model="hashrate" multiple :options="getRefByName('hashrate')" label="Хешрейт"  option-value="id" option-label="name" />
        </div>
        <div class="col-12 col-lg-3 col-lg-2">
          <q-select v-model="power" multiple :options="getRefByName('power')" label="Потреление энергии"  option-value="id" option-label="name" />
        </div>
        <div class="col-12 col-lg-3 col-lg-2 ">
          <div class="row justify-around">
            <q-input
              class="col-5"
              v-model.number="priceGt"
              :step="100"
              type="number"
              label="Мин. цена"
            />
            <q-input
              class="col-5"
              v-model.number="priceLt"
              type="number"
              :step="100"
              label="Макс. цена"
            />
          </div>
        </div>
      </div>
      <div class="row justify-center q-gutter-lg q-mt-md">
        <div class="col-12 col-md-6 col-lg-5">
          <div class="row items-center">
            <q-input
              v-model="name"
              type="string"
              label="Наименование"
              class="col"
            />
            <q-btn v-if="canClearGilters" @click="clearFilters()" class="q-ml-md" round color="red" icon="clear" />
          </div>

        </div>
      </div>
    </div>
    <div class="col-12">
      <div v-if="productList.length > 0" class="row q-my-xl">
        <product-card v-for="product in productList" :key="product.id" :entity="product"></product-card>
      </div>
    </div>
    <div v-if="loading" class="row justify-around">
      <q-spinner-tail color="blue-grey" size="4em" />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import ProductService from 'src/hooks/products/Product.service'
import ProductCard from './ProductCard.vue'

export default defineComponent({
  name: 'ProductCards',
  components: {
    ProductCard
  },
  data () {
    return {
      brand: null,
      currencyMining: null,
      algorithm: null,
      hashrate: null,
      power: null,
      priceGt: null,
      priceLt: null,
      name: null,
      filterString: null
    }
  },
  computed: {
    canClearGilters () {
      return (
        this.brand ||
        this.currencyMining ||
        this.algorithm ||
        this.hashrate ||
        this.power ||
        this.priceGt ||
        this.priceLt ||
        this.name
      )
    }
  },
  setup () {
    const {
      loading,
      productPage,
      productList,
      loadProductPage,
      loadNextProductPage,
      loadReference,
      getRefByName
    } = ProductService()

    onMounted(async () => {
      loadProductPage()
      loadReference()
    })
    return {
      loading,
      productPage,
      productList,
      loadNextProductPage,
      loadProductPage,
      loadReference,
      getRefByName
    }
  },
  methods: {
    clearFilters () {
      this.brand = null
      this.currencyMining = null
      this.algorithm = null
      this.hashrate = null
      this.power = null
      this.priceGt = null
      this.priceLt = null
      this.name = null
      this.loadProductPage()
    },
    getFilterProduct () {
      const filter = {
        price__gt: this.priceGt ? this.priceGt : null,
        price__lt: this.priceLt ? this.priceLt : null,
        name: this.name ? this.name : null
      }
      let filterString = ''
      for (const key in filter) {
        const value = filter[key]
        filterString += value ? `${key}=${filter[key]}&` : ''
      }
      if (this.brand) {
        this.brand.forEach(e => {
          filterString += `brand=${e.id}&`
        })
      }
      if (this.algorithm) {
        this.algorithm.forEach(e => {
          filterString += `algorithm=${e.id}&`
        })
      }
      if (this.hashrate) {
        this.hashrate.forEach(e => {
          filterString += `hashrate=${e.id}&`
        })
      }
      if (this.power) {
        this.power.forEach(e => {
          filterString += `power=${e.id}&`
        })
      }
      if (this.currencyMining) {
        this.currencyMining.forEach(e => {
          filterString += `currency_mining=${e.id}&`
        })
      }
      // console.log(filterString)
      // return filterString === '' ? null : filterString
      this.filterString = filterString === '' ? null : filterString
    },
    scroll () {
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.offsetHeight / 1.2
      if (bottomOfWindow && !this.loading) {
        this.loadNextProductPage()
      }
    }
  },
  watch: {
    brand (values) {
      this.getFilterProduct()
      this.loadProductPage(this.filterString)
    },
    algorithm (values) {
      this.getFilterProduct()
      this.loadProductPage(this.filterString)
    },
    hashrate (values) {
      this.getFilterProduct()
      this.loadProductPage(this.filterString)
    },
    currencyMining (values) {
      this.getFilterProduct()
      this.loadProductPage(this.filterString)
    },
    power (values) {
      this.getFilterProduct()
      this.loadProductPage(this.filterString)
    },
    priceGt (value) {
      this.getFilterProduct()
      this.loadProductPage(this.filterString)
    },
    priceLt (value) {
      this.getFilterProduct()
      this.loadProductPage(this.filterString)
    },
    name (value) {
      if (value && value.length > 1) {
        this.getFilterProduct()
        this.loadProductPage(this.filterString)
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.scroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.scroll)
  }
})
</script>
