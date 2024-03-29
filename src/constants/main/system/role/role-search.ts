/*
 * @Author: smx
 * @Date: 2022-03-30 15:55:58
 * @LastEditTime: 2022-03-31 17:04:05
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\constants\main\system\role\role-search.ts
 */
import { IForm } from '@/base-ui/form'

export const roleSearch: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
