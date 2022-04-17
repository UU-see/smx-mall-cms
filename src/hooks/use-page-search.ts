/*
 * @Author: smx
 * @Date: 2022-03-30 19:05:51
 * @LastEditTime: 2022-04-01 15:52:12
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\hooks\use-page-search.ts
 */
import { ref } from 'vue'
import PageContent from '@/components/page-content.vue'

export function usePageSearch(): any {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleBtnClick = (queryInfo: any = {}) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleBtnClick]
}
