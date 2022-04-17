<!--
 * @Author: smx
 * @Date: 2022-03-16 16:46:26
 * @LastEditTime: 2022-03-29 15:44:46
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\App.vue
-->
<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<style scoped lang="less">
.app {
  height: 100%;
}
</style>
