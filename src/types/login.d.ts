/*
 * @Author: smx
 * @Date: 2022-03-21 16:29:54
 * @LastEditTime: 2022-03-21 19:28:55
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\types\login.d.ts
 */
export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}
