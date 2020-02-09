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
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 }),
})

export default router
