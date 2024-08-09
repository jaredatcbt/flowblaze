import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Pricing from '../views/pages/pricing.vue';
import commingsoon from '../views/pages/commingsoon.vue';
import Login from '../views/Auth/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/sign-in',
      name: 'signin',
      component: Login
    },
    {
      path: '/commingSoon',
      name: 'commingsoon',
      component: commingsoon
    }
  ]
})

// {
//   path: '/about',
//   name: 'about',
//   component: () => import('../views/AboutView.vue')
// },

export default router
