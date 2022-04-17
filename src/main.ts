/*
 * @Author: smx
 * @Date: 2022-03-16 16:46:26
 * @LastEditTime: 2022-03-25 15:22:05
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\main.ts
 */
import 'normalize.css'
import './assets/css/index.less'
import { createApp } from 'vue'
import registerElememt from '@/config/element.config'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

registerElememt(app)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')
