import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'
import user from './module-user'
import aplicationInterface from './module-aplication-interface'
import setupInterceptors from './../service/setupInterceptors'
import cart from './cart.js'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      user,
      aplicationInterface,
      cart
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })
  setupInterceptors(Store)

  return Store
})
