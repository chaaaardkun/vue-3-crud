import Home from './views/Home.vue';
import Products from './views/Products.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'home',
      path: '',
      component: Home,
    },
    {
      name: 'products',
      path: '/products',
      component: Products,
    },
  ],
});

export default router;
