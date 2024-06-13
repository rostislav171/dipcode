import { api } from 'boot/axios'

const ProductApi = {
  urlCall (url) {
    return api
      .get(url)
  },
  page (filters) {
    const base = 'api/v1/products/product/'
    const url = filters ? base + '?' + filters : base
    return api
      .get(url)
  },
  reference () {
    return api
      .get('api/v1/products/product-reference/')
  }
}

export default ProductApi
