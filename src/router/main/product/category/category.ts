/*
 * @Author: smx
 * @Date: 2022-03-23 14:36:23
 * @LastEditTime: 2022-03-23 17:50:25
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\router\main\product\category\category.ts
 */
const category = () => import('@/views/main/product/category/category.vue')
export default {
  path: '/main/product/category',
  name: 'category',
  component: category,
  children: []
}
