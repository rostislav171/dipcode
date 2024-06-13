import { ref } from 'vue'
import ProductApi from 'src/hooks/products/Product.api'

export default function ProductService () {
  const productList = ref([])
  const productPage = ref([])
  const referenceList = ref([])
  const loading = ref(false)

  const loadProductPage = (filter) => {
    loading.value = true
    ProductApi.page(filter)
      .then(response => {
        productPage.value = response.data
        productList.value = []
        response.data.results.forEach(element => {
          productList.value.push(element)
        })
        loading.value = false
      })
      .catch((e) => {
        loading.value = false
      })
  }
  const loadNextProductPage = (filter) => {
    if (productPage.value.next) {
      loading.value = true
      ProductApi.urlCall(productPage.value.next)
        .then(response => {
          productPage.value = response.data
          response.data.results.forEach(element => {
            productList.value.push(element)
          })
          loading.value = false
        })
        .catch((e) => {
          loading.value = false
        })
    }
  }
  const loadReference = (filters) => {
    ProductApi.reference()
      .then(response => {
        referenceList.value = response.data
      })
  }

  const getRefByName = (name) => {
    if (referenceList.value.length > 0) {
      return referenceList.value.find(r => r.name === name).items
    }
    return []
  }

  return {
    loading,
    productPage,
    productList,
    loadProductPage,
    loadNextProductPage,
    loadReference,
    getRefByName
  }
}
