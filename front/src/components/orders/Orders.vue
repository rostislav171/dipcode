<template>
  <div class="row justify-center">
    <div v-for="o in orders" :key="o.id" class="col-12 col-md-7 q-px-sm q-py-md">
      <q-card class="my-card" flat bordered>
        <q-card-section class="text-center">
          <span>Заказ на сумму: {{o.price}} руб.</span>
          <span></span>
        </q-card-section>
        <q-card-section class="row">
          <div class="col-12 col-sm-6">
            <q-list>
              <q-item v-for="i in o.items" :key="i.id">
                <q-item-section>
                  <q-item-label>
                    {{i.productName}} <span class="text-weight-thin">{{i.categoryName}}</span>
                    <q-badge color="primary" transparent>
                      {{i.count}}
                    </q-badge>
                  </q-item-label>
                  <q-item-label v-if="i.categoryName" ></q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col-12 col-sm-6">
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div class="row justify-center">
  </div>
</template>

<script>
// import OrderPosition from 'components/orders/OrderPosition.vue'
import { defineComponent } from 'vue'
// import { mapGetters, mapActions } from 'vuex'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'CreateOrder',
  components: {
    // OrderPosition
  },
  data () {
    return {
      orders: [],
      loading: false
    }
  },
  created () {
    api.get('api/v1/orders/list/')
      .then(response => {
        this.loading = true
        this.orders = response.data
        this.loading = false
      })
      .catch(() => {
        this.loading = false
      })
  },
  methods: {

  },
  computed: {

  }
})
</script>
