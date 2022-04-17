/*
 * @Author: smx
 * @Date: 2022-03-16 17:17:06
 * @LastEditTime: 2022-03-28 23:37:08
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localStorage from '@/utils/storge'
import { firstMenu } from '@/hooks/use-map-menus'
// omponent: () => import('@/views/login/login.vue')实现路由懒加载，运用懒加载可以将页面进行划分
// 需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时
// 只有在加载对应路径时时候才会导入组件，webpack打包时会进行分包

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    children: []
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    if (!localStorage.getStorge('token')) {
      return '/login'
    }
  }
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
