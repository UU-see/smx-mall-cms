/*
 * @Author: smx
 * @Date: 2022-03-21 15:46:28
 * @LastEditTime: 2022-03-29 18:41:55
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\service\login.ts
 */
import hyRequest from '@/utils/login'
import { IAccount, ILoginResult } from '@/types/login'
import { IDataType } from '@/types/http'

const LoginAPI = {
  AccountLogin: '/login',
  UserInfo: '/users/',
  UserMenus: '/role/'
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function userInfoRequest(id: number) {
  return hyRequest.get<IDataType<any>>({
    url: LoginAPI.UserInfo + id
  })
}
export function useMenusRequest(id: number) {
  return hyRequest.get<IDataType<any>>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
