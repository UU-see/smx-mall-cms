/*
 * @Author: smx
 * @Date: 2022-04-09 22:09:27
 * @LastEditTime: 2022-04-09 22:17:17
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\constants\main\system\role\role-model.ts
 */
/*
 * @Author: smx
 * @Date: 2022-04-04 17:44:37
 * @LastEditTime: 2022-04-05 16:32:13
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\constants\main\system\user\user-model.ts
 */
import { IForm } from '@/base-ui/form'

export const roleModel: IForm = {
  labelWidth: '70px',
  colLayout: {
    span: 24
  },
  itemStyle: { padding: '5px 20px' },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ]
}
