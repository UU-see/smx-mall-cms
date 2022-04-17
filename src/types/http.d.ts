/*
 * @Author: smx
 * @Date: 2022-03-17 15:21:48
 * @LastEditTime: 2022-03-29 18:39:46
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\types\http.d.ts
 */
type EnvConfig = {
  BASE_URL: string
  BASE_NAME: string
}

export type HttpConfig = {
  [key: string]: EnvConfig
}

export interface IDataType<T = any> {
  code: number
  data: T
}
