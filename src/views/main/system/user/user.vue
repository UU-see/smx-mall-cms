<!--
 * @Author: smx
 * @Date: 2022-03-23 14:32:12
 * @LastEditTime: 2022-04-09 22:13:24
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\views\main\system\user\user.vue
-->
<template>
  <div class="user">
    <page-search :searchForm="userSearch" @handleBtnClick="handleBtnClick" />
    <page-content
      ref="pageContentRef"
      :contentTable="userContent"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <page-model
      ref="pageModelRef"
      pageName="users"
      :dialogModel="userModelRef"
      :defaultInfo="defaultInfo"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import { userSearch } from '@/constants/main/system/user/user-search'
import { userContent } from '@/constants/main/system/user/user-content'
import { userModel } from '@/constants/main/system/user/user-model'

import PageSearch from '@/components/page-search.vue'
import PageContent from '@/components/page-content.vue'
import pageModel from '@/components/page-model.vue'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModel } from '@/hooks/use-page-model'

const store = useStore()

// pageModal相关的hook逻辑
// 1.处理密码的逻辑
const newCallback = () => {
  const passwordItem = userModel.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = userModel.formItems.find(
    (item) => item.field === 'password'
  )
  passwordItem!.isHidden = true
}

// 2.动态添加部门和角色列表
const userModelRef = computed(() => {
  const departmentItem = userModel.formItems.find(
    (item) => item.field === 'departmentId'
  )
  departmentItem!.options = store.state.entireDepartment.map((item) => {
    return { title: item.name, value: item.id }
  })
  const roleItem = userModel.formItems.find((item) => item.field === 'roleId')
  roleItem!.options = store.state.entireRole.map((item) => {
    return { title: item.name, value: item.id }
  })
  return userModel
})

//3.调用hooks获得公共变量和函数
const [pageContentRef, handleBtnClick] = usePageSearch()
const [pageModelRef, defaultInfo, handleNewData, handleEditData] = usePageModel(
  newCallback,
  editCallback
)
</script>

<style scoped></style>
