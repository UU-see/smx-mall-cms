/*
 * @Author: smx
 * @Date: 2022-04-02 16:52:19
 * @LastEditTime: 2022-04-02 16:53:16
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\hooks\use-permission.ts
 */
import { useStore } from '@/store'

export function usePermission(pageName: string, hanldeName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${hanldeName}`

  // name = "coderwhy"
  // !name -> false
  // !!name -> true
  return !!permissions.find((item: string) => item === verifyPermission)
}
