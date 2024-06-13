
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/orders',
        name: 'orders',
        component: () => import('pages/orders/Orders.vue'),
        meta: { title: 'Заказы' }
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('pages/orders/Cart.vue'),
        meta: { title: 'Заказы' }
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('pages/products/Products.vue'),
        meta: { title: 'Товары' }
      }
    ]
  },
  {
    path: '/profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/profile/Login.vue'),
        meta: { title: 'Авторизация' }
      },
      {
        path: '/create-profile',
        name: 'create-profile',
        component: () => import('pages/profile/CrearteProfile.vue'),
        meta: { title: 'Регистрация' }
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('pages/profile/Profile.vue'),
        meta: { title: 'Авторизация' }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/services/Error404.vue')
  }
]

export default routes
