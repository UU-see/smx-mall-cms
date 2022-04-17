/*
 * @Author: smx
 * @Date: 2022-03-23 14:35:46
 * @LastEditTime: 2022-03-23 18:10:16
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\router\main\system\menu\menu.ts
 */
const menuManager = () => import('@/views/main/system/menu/menu.vue')
export default {
  path: '/main/system/menu',
  name: 'menu',
  component: menuManager,
  children: []
}
