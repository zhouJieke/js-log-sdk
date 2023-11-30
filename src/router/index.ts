import {createRouter, createWebHashHistory, Router, RouteRecordRaw} from "vue-router";

export const allowRouter: Array<RouteRecordRaw> = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('../views/Login/index.vue'),
    meta: {title: '登录'}
  },
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: allowRouter
})

export default router