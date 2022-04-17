<!--
 * @Author: smx
 * @Date: 2022-03-25 16:44:36
 * @LastEditTime: 2022-03-26 19:10:24
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\base-ui\breadcrumb\src\breadcrumb.vue
-->
<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadcrumbs" :key="item.name"
      ><el-breadcrumb-item :to="{ path: item.path }">{{
        item.name
      }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { IBreadcrumb } from '../types'
const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
</script>

<style scoped lang="less"></style>
