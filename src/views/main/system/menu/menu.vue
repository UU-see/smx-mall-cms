<!--
 * @Author: smx
 * @Date: 2022-03-23 14:33:30
 * @LastEditTime: 2022-04-02 16:10:51
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\views\main\system\menu\menu.vue
-->
<template>
  <div class="menu">
    <page-content :contentTable="menuContent" pageName="menu" />
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content.vue'

import { menuContent } from '@/constants/main/system/menu/menu-content'
</script>

<style scoped lang="less"></style>
