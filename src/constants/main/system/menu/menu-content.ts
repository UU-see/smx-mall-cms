/*
 * @Author: smx
 * @Date: 2022-03-30 15:55:41
 * @LastEditTime: 2022-04-02 17:06:18
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\constants\main\system\menu\menu-content.ts
 */
import { ItableContent } from '@/base-ui/table'
export const menuContent: ItableContent = {
  title: '菜单',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '120' },
    { prop: 'type', label: '类型', minWidth: '60' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    { prop: 'icon', label: '菜单icon', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '220',
      slotName: 'updateAt'
    },
    { prop: 'handler', label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
