<!--
 * @Author: smx
 * @Date: 2022-03-22 17:25:25
 * @LastEditTime: 2022-03-30 22:02:47
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\components\nav-header\nav-header.vue
-->
<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <Expand v-if="isFold" />
      <Fold v-else></Fold>
    </el-icon>
    <div class="content">
      <x-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue'
import UserInfo from './components/user-info.vue'
import xBreadcrumb from '@/base-ui/breadcrumb'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/hooks/use-map-menus'

const emits = defineEmits(['foldChange'])

//store
const store = useStore()
const userMenus = store.state.login.userMenus

//route
const route = useRoute()

//data
const isFold = ref<boolean>(false)

//面包屑数据
const breadcrumbs = computed(() => {
  return pathMapBreadcrumbs(userMenus, route.path)
})

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emits('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
