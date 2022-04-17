<!--
 * @Author: smx
 * @Date: 2022-03-29 15:58:31
 * @LastEditTime: 2022-04-05 22:32:03
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\components\page-content.vue
-->
<template>
  <div class="page-content">
    <x-table
      v-bind="contentTable"
      :listData="dataList"
      :listCount="dataCount"
      v-model:page="PaginationInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler="scope">
        <el-button type="primary" v-if="isCreate" @click="handleNewClick"
          >新建{{ scope.title }}</el-button
        >
      </template>

      <!-- 2.列中固定的插槽 -->
      <template #status="scope">
        <el-button plain :type="scope.row.enable ? 'success' : 'danger'">{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #createAt="scope">
        <span>{{ formatUtcString(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatUtcString(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            type="text"
            icon="Edit"
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="text"
            icon="Delete"
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 3.在page-content中动态插入的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </x-table>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineExpose,
  defineEmits,
  computed,
  onMounted,
  ref,
  watch
} from 'vue'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/use-permission'
import { formatUtcString } from '@/hooks/use-format-data'

import xTable from '@/base-ui/table'

const props = defineProps({
  contentTable: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['newBtnClick', 'editBtnClick'])

const store = useStore()

//获取按钮权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')

//双向绑定分页器参数
const PaginationInfo = ref({ currentPage: 1, pageSize: 10 })

//发起请求
const getPageData = (searchInfo: any = {}) => {
  if (!isQuery) return
  store.dispatch('listData/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset:
        (PaginationInfo.value.currentPage - 1) * PaginationInfo.value.pageSize,
      size: PaginationInfo.value.pageSize,
      ...searchInfo
    }
  })
}

//vuex中的数据
const dataList = computed(() =>
  store.getters[`listData/pageListData`](props.pageName)
)
const dataCount = computed(() =>
  store.getters[`listData/pageListCount`](props.pageName)
)

// 获取其他的动态插槽
const otherPropSlots = props.contentTable?.propList.filter((item: any) => {
  if (item.slotName) {
    if (item.slotName === 'status') return false
    if (item.slotName === 'createAt') return false
    if (item.slotName === 'updateAt') return false
    if (item.slotName === 'handler') return false
    return true
  }
  return false
})

//删除/编辑/创建按钮
const handleDeleteClick = (item: any) => {
  store.dispatch('listData/deletePageListAction', {
    pageName: props.pageName,
    id: item.id
  })
}

const handleEditClick = (item: any) => {
  emits('editBtnClick', item)
}

const handleNewClick = () => {
  emits('newBtnClick')
}

//监听分页器参数变化
watch(PaginationInfo, () => getPageData(), { deep: true })

onMounted(() => {
  getPageData()
})

defineExpose({
  getPageData
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
