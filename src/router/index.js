import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/tinymce',
  },
  {
    path: '/tinymce',
    name: 'Tinymce',
    component: () => import(/* webpackChunkName: "Tinymce" */ '@/views/Tinymce')
  },
  {
    path: '/wangEditor',
    name: 'WangEditor',
    component: () => import(/* webpackChunkName: "WangEditor" */ '@/views/WangEditor')
  },
  {
    path: '/kindEditor',
    name: 'KindEditor',
    component: () => import(/* webpackChunkName: "KindEditor" */ '@/views/KindEditor')
  },
  {
    path: '/uEditor',
    name: 'UEditor',
    component: () => import(/* webpackChunkName: "UEditor" */ '@/views/UEditor')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 }),
})

export default router
