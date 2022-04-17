/*
 * @Author: smx
 * @Date: 2022-03-29 15:58:12
 * @LastEditTime: 2022-04-05 16:31:17
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\constants\main\system\user\user-content.ts
 */
import { ItableContent } from '@/base-ui/table'
export const userContent: ItableContent = {
  title: '用户',
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '手机号码', minWidth: '120' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
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
