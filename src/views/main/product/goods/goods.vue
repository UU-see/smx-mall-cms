<!--
 * @Author: smx
 * @Date: 2022-03-23 14:36:55
 * @LastEditTime: 2022-04-02 15:43:28
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\views\main\product\goods\goods.vue
-->
<template>
  <div class="goods">
    <page-content :contentTable="goodsContent" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }}</template>
      <template #newPrice="scope">{{ '￥' + scope.row.newPrice }}</template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content.vue'

import { goodsContent } from '@/constants/main/product/goods/goods-content'
</script>

<style scoped lang="less"></style>
