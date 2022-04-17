/*
 * @Author: smx
 * @Date: 2022-03-28 16:30:58
 * @LastEditTime: 2022-04-05 21:35:56
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\service\main\listData.ts
 */
import hyRequest from '@/utils/login'
import { IDataType } from '@/types/http'

type ApiItem = {
  [key: string]: string
}

const getListAPI: ApiItem = {
  users: 'users/list',
  role: 'role/list',
  goods: 'goods/list',
  menu: 'menu/list',
  department: 'department/list'
}
export function getPageListData(pageName: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: getListAPI[pageName],
    data: queryInfo
  })
}

export function deletePageListData(url: string) {
  return hyRequest.delete<IDataType>({
    url: url
  })
}

export function createPageListData(url: string, newData: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageListData(url: string, editData: any) {
  return hyRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
