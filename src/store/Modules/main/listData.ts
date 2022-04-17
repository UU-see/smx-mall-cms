/*
 * @Author: smx
 * @Date: 2022-03-28 16:20:57
 * @LastEditTime: 2022-04-05 22:46:12
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\store\Modules\main\listData.ts
 */
import { Module } from 'vuex'
import { IRootState, IListDataState } from '@/types/store'
import {
  getPageListData,
  deletePageListData,
  createPageListData,
  editPageListData
} from '@/service/main/listData'
const systemModule: Module<IListDataState, IRootState> = {
  namespaced: true,
  state: {
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    goodsList: [],
    goodsCount: 0,
    menuList: [],
    menuCount: 0
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  actions: {
    //获取列表数据
    async getPageListAction({ commit }, payload: any) {
      //pageName首字母大写
      const commitPageName = payload.pageName.replace(/^\S/, (s: string) =>
        s.toUpperCase()
      )
      //发送网络请求
      const pageResult = await getPageListData(
        payload.pageName,
        payload.queryInfo
      )
      const { list, totalCount } = pageResult.data
      commit(`change${commitPageName}List`, list)
      commit(`change${commitPageName}Count`, totalCount)
    },

    //删除列表数据
    async deletePageListAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await deletePageListData(pageUrl)
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    //创建列表数据
    async createPageListAction({ dispatch }, payload: any) {
      // 1.创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageListData(pageUrl, newData)

      // 2.请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    //编辑列表数据
    async editPageListAction({ dispatch }, payload: any) {
      // 1.编辑数据的请求
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageListData(pageUrl, editData)

      // 2.请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
export default systemModule
