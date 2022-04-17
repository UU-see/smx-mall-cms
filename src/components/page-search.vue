<!--
 * @Author: smx
 * @Date: 2022-03-28 16:35:01
 * @LastEditTime: 2022-03-30 22:01:23
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\components\page-search.vue
-->
<template>
  <div class="page-search">
    <x-form v-bind="searchForm" v-model="formData">
      <template #footer>
        <div class="handle-btns">
          <el-button icon="refresh" @click="handleResetClick"> 重置</el-button>
          <el-button type="primary" icon="search" @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </x-form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import xForm from '@/base-ui/form'

const props = defineProps({
  searchForm: {
    type: Object,
    required: true
  }
})

const emits = defineEmits(['handleBtnClick'])
//动态获取formdata中的属性
const formItems = props.searchForm.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)

//用户点击重置
const handleResetClick = () => {
  // for (const key in formOriginData) {
  //   formData.value[`${key}`] = formOriginData[key]
  // }
  formData.value = formOriginData
  emits('handleBtnClick')
}

//用户点击搜索
const handleQueryClick = () => {
  emits('handleBtnClick', formData.value)
}
</script>

<style scoped lang="less">
.page-search {
  padding-top: 22px;
  .header {
    color: red;
  }
  .handle-btns {
    text-align: right;
    padding: 0 50px 20px 0;
    .el-button {
      width: 120px;
    }
  }
}
</style>
