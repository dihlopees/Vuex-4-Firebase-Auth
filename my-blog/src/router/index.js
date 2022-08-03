import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home-Page.vue'
import Signup from '../views/Signup-Page.vue'
import Login from '../views/Login-Page.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
