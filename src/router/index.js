import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import Register from "@/components/Register.vue"
import Login from "@/components/Login.vue"
import NotFoundeView from '@/views/NotFoundeView.vue'
import ProductView from '@/views/ProductView.vue'
import DetailView from '@/views/DetailView.vue' 
import ListUser from '@/components/ListUser.vue'
import UserDetail from '@/components/UserDetail.vue'   
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/listUser',
      name: 'listUser',
      component: ListUser
    },
    {
      path: '/userDetail/:id',
      name: 'userDetail',
      component: UserDetail
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundeView
    },
  ]
})

export default router
