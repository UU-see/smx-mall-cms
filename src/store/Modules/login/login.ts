/*
 * @Author: smx
 * @Date: 2022-03-18 18:42:34
 * @LastEditTime: 2022-04-07 15:48:17
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\store\Modules\login\login.ts
 */

import { Module } from 'vuex'
import type { IRootState, ILoginState } from '@/types/store'
import type { IAccount } from '@/types/login'
import localStorage from '@/utils/storge'
import router from '@/router'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/hooks/use-map-menus'

import {
  accountLoginRequest,
  useMenusRequest,
  userInfoRequest
} from '@/service/login'
const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenus: '',
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      //usermenus -> routes
      const routes = mapMenusToRoutes(userMenus)

      //将routes添加到route.main.children
      routes.forEach((route) => router.addRoute('main', route))

      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      //1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localStorage.setStorge('token', token)

      // 发送初始化的请求(完整的role/department)
      dispatch('getInitialDataAction', null, { root: true })

      //3.请求用户信息
      const userInfoResult = await userInfoRequest(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localStorage.setStorge('userInfo', userInfo)

      //4.请求用户菜单
      const userMenusResult = await useMenusRequest(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localStorage.setStorge('userMenus', userMenus)

      // 5.跳到首页
      router.push('/main')
    },

    loginLocalStorage({ commit, dispatch }) {
      const token = localStorage.getStorge('token')
      const userInfo = localStorage.getStorge('userInfo')
      const userMenus = localStorage.getStorge('userMenus')
      if (token) {
        commit('changeToken', token)
        dispatch('getInitialDataAction', null, { root: true })
        commit('changeUserInfo', userInfo)
        commit('changeUserMenus', userMenus)
      }
    }
  }
}
export default login
