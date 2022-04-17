/*
 * @Author: smx
 * @Date: 2022-03-29 17:04:35
 * @LastEditTime: 2022-04-02 16:00:04
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\base-ui\table\types\index.ts
 */
export interface IpropItem {
  prop: string
  label: string
  minWidth: string
  slotName?: string
}

export interface ItableContent {
  title: string
  propList: IpropItem[]
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  childrenProps?: any
  showFooter?: boolean
}
