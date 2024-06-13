import { LocalStorage } from 'quasar'

export default {
  namespaced: true,
  state: () => ({
    products: JSON.parse(LocalStorage.getItem('products')) || []
  }),
  mutations: {
    addProduct (state, product) {
      const existingProduct = state.products.find(p => p.id === product.id)
      if (existingProduct) {
        existingProduct.count += 1
      } else {
        state.products.push({ ...product, count: 1 })
      }
    },
    removeProduct (state, productId) {
      const existingProduct = state.products.find(p => p.id === productId)
      if (!existingProduct) {
        return 0
      }
      if (existingProduct.count === 1) {
        state.products = state.products.filter(p => p.id !== productId)
      } else {
        existingProduct.count -= 1
      }
    },
    cleanProducts (state) {
      state.products = []
    }
  },
  actions: {
    addToCart ({ commit, state }, product) {
      commit('addProduct', product)
      LocalStorage.set('products', JSON.stringify(state.products))
    },
    removeFromCart ({ commit }, productId) {
      commit('removeProduct', productId)
      LocalStorage.remove('products')
    },
    cleanCart ({ commit }) {
      commit('cleanProducts')
      LocalStorage.de('products', [])
    }
  },
  getters: {
    hasProductInCart (state) {
      return (productId) => {
        return state.products.some(p => p.id === productId)
      }
    },
    getCountCart (state) {
      return state.products.reduce((a, b) => {
        return a + b.count
      }, 0)
    },
    getCountProductCart (state) {
      return (productId) => {
        const existingProduct = state.products.find(p => p.id === productId)
        if (!existingProduct) {
          return 0
        }
        return existingProduct.count
      }
    },
    getProducts (state) {
      return state.products
    }
  }
}
