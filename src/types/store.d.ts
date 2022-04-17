/*
 * @Author: smx
 * @Date: 2022-03-18 18:48:11
 * @LastEditTime: 2022-04-05 20:16:48
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\types\store.d.ts
 */
export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}
export interface IRootWithModule {
  login: ILoginState
  listData: IListDataState
}
export interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: Array
}
export interface IListDataState {
  usersList: any
  usersCount: number
  roleList: any
  roleCount: number
  goodsList: any
  goodsCount: number
  menuList: any
  menuCount: number
}

export type IStoreType = IRootState & IRootWithModule
