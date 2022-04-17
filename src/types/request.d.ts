/*
 * @Author: smx
 * @Date: 2022-03-21 15:55:35
 * @LastEditTime: 2022-03-21 15:55:36
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\types\request.d.ts
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}
