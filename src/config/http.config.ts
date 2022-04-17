/*
 * @Author: smx
 * @Date: 2022-03-16 20:24:59
 * @LastEditTime: 2022-03-30 15:38:59
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\config\http.config.ts
 */
import type { HttpConfig } from '@/types/http'
const env = process.env.NODE_ENV || 'production'

const httpConfig: HttpConfig = {
  development: {
    BASE_URL: 'http://152.136.185.210:5000',
    BASE_NAME: ''
  },
  test: {
    BASE_URL: '',
    BASE_NAME: ''
  },
  production: {
    BASE_URL: '',
    BASE_NAME: ''
  }
}
export default {
  env,
  ...httpConfig[env]
}
