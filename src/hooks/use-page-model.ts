/*
 * @Author: smx
 * @Date: 2022-04-04 18:31:12
 * @LastEditTime: 2022-04-05 16:41:37
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\hooks\use-page-model.ts
 */
import { ref } from 'vue'
import PageModel from '@/components/page-model.vue'

type CallbackFn = (item?: any) => void

export function usePageModel(newCb?: CallbackFn, editCb?: CallbackFn): any {
  const pageModelRef = ref<InstanceType<typeof PageModel>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    pageModelRef.value.dialogVisible = true
    newCb && newCb()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    pageModelRef.value.dialogVisible = true
    editCb && editCb(item)
  }
  return [pageModelRef, defaultInfo, handleNewData, handleEditData]
}
