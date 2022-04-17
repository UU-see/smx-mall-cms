/*
 * @Author: smx
 * @Date: 2022-03-18 17:27:55
 * @LastEditTime: 2022-04-07 15:41:58
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\utils\storge.ts
 */
class LocalStorage {
  setStorge(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getStorge(key: string) {
    //obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteStorge(key: string) {
    window.localStorage.removeItem(key)
  }

  clearStorge() {
    window.localStorage.clear()
  }
}

export default new LocalStorage()
