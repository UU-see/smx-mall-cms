<!--
 * @Author: smx
 * @Date: 2022-03-23 14:33:30
 * @LastEditTime: 2022-04-11 16:36:28
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\views\main\system\role\role.vue
-->
<template>
  <div class="role">
    <page-search :searchForm="roleSearch" />
    <page-content
      :contentTable="roleContent"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <page-model
      ref="pageModelRef"
      pageName="role"
      :otherInfo="otherInfo"
      :dialogModel="roleModel"
      :defaultInfo="defaultInfo"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        >
        </el-tree></div
    ></page-model>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'
import { ElTree } from 'element-plus'

import PageSearch from '@/components/page-search.vue'
import PageContent from '@/components/page-content.vue'
import PageModel from '@/components/page-model.vue'

import { roleSearch } from '@/constants/main/system/role/role-search'
import { roleContent } from '@/constants/main/system/role/role-content'
import { roleModel } from '@/constants/main/system/role/role-model'

import { usePageModel } from '@/hooks/use-page-model'
import { menuMapLeafKeys } from '@/hooks/use-map-menus'

// 1.处理pageModal的hook
const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (item: any) => {
  const leafKeys = menuMapLeafKeys(item.menuList)
  nextTick(() => {
    console.log(elTreeRef.value)
    elTreeRef.value?.setCheckedKeys(leafKeys, false)
  })
}

const [pageModelRef, defaultInfo, handleNewData, handleEditData] = usePageModel(
  undefined,
  editCallback
)

const store = useStore()
const menus = computed(() => store.state.entireMenu)
const otherInfo = ref({})

const handleCheckChange = (data1: any, data2: any) => {
  const checkedKeys = data2.checkedKeys
  const halfCheckedKeys = data2.halfCheckedKeys
  const menuList = [...checkedKeys, ...halfCheckedKeys]
  otherInfo.value = { menuList }
}
</script>

<style scoped lang="less"></style>
