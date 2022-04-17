/*
 * @Author: smx
 * @Date: 2022-03-16 17:40:20
 * @LastEditTime: 2022-04-07 15:52:02
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\store\index.ts
 */
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import type { IRootState, IStoreType } from '@/types/store'
import { getPageListData } from '@/service/main/listData'
import login from './Modules/login/login'
import listData from './Modules/main/listData'
const store = createStore<IRootState>({
  state() {
    return {
      name: '',
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      //1.请求部门和角色数据
      const departmentResult = await getPageListData('department', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('role', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      const menuResult = await getPageListData('menu', {})
      const { list: menuList } = menuResult.data

      // 2.保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    login,
    listData
  }
})
export function setupStore() {
  store.dispatch('login/loginLocalStorage')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
