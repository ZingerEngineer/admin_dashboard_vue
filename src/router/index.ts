import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CPLayout from '../layouts/CPLayout.vue'
import { getUserToken } from '../utils/getUserToken'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/cp',
    component: CPLayout,
    children: [
      {
        path: 'home',
        component: HomeView,
        meta: {
          layout: CPLayout
        }
      },
      {
        path: 'user_home',
        component: () => import('../views/UserHomeView.vue'),
        meta: {
          layout: CPLayout
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
const userToken = getUserToken()
let isAuthenticated = false
if (userToken) {
  isAuthenticated = true
}
router.beforeEach((to, from) => {
  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
})
export default router
