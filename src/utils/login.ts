/*
 * @Author: smx
 * @Date: 2022-03-21 16:07:41
 * @LastEditTime: 2022-03-24 16:56:25
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\service\index.ts
 */
// service统一出口
import HYRequest from '@/utils/request'
import localStorge from '@/utils/storge'
import httpConfig from '@/config/http.config'
const hyRequest = new HYRequest({
  baseURL: httpConfig.BASE_URL,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localStorge.getStorge('token')
      if (token) {
        const headers = config.headers ?? {}
        headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest
