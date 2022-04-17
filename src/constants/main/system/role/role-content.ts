/*
 * @Author: smx
 * @Date: 2022-03-30 15:55:41
 * @LastEditTime: 2022-04-02 17:06:13
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\constants\main\system\role\role-content.ts
 */
import { ItableContent } from '@/base-ui/table'
export const roleContent: ItableContent = {
  title: '角色',
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    { prop: 'handler', label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
