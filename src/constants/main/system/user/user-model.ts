/*
 * @Author: smx
 * @Date: 2022-04-04 17:44:37
 * @LastEditTime: 2022-04-05 16:32:13
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\constants\main\system\user\user-model.ts
 */
import { IForm } from '@/base-ui/form'

export const userModel: IForm = {
  labelWidth: '70px',
  colLayout: {
    span: 24
  },
  itemStyle: { padding: '5px 20px' },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '用户密码',
      placeholder: '请输入密码',
      isHidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: []
    }
  ]
}
