<!--
 * @Author: smx
 * @Date: 2022-03-28 17:58:02
 * @LastEditTime: 2022-04-02 17:55:39
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\base-ui\table\src\table.vue
-->
<template>
  <div class="x-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}列表</div>
        <div class="handler">
          <slot name="headerHandler" :title="title"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue'
import { IpropItem } from '../types'
const props = defineProps({
  listData: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  propList: {
    type: Array as PropType<IpropItem[]>,
    default: () => []
  },
  listCount: {
    type: Number
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 0, pageSize: 10 })
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  showFooter: {
    type: Boolean,
    default: true
  }
})

const emits = defineEmits(['update:page'])

const handleCurrentChange = (currentPage: number) => {
  emits('update:page', { ...props.page, currentPage })
}
const handleSizeChange = (pageSize: number) => {
  emits('update:page', { ...props.page, pageSize })
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px 10px 5px;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}
.footer {
  margin-top: 15px;

  .el-pagination {
    justify-content: end;
  }
}
</style>
