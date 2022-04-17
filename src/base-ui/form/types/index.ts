/*
 * @Author: smx
 * @Date: 2022-03-24 13:36:25
 * @LastEditTime: 2022-04-05 16:30:10
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\base-ui\form\types\index.ts
 */
type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
