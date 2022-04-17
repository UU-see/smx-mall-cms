<!--
 * @Author: smx
 * @Date: 2022-04-04 17:41:53
 * @LastEditTime: 2022-04-11 16:43:46
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\components\page-model.vue
-->
<template>
  <div class="page-model">
    <el-dialog
      :title="clickName ? '编辑用户' : '新建用户'"
      v-model="dialogVisible"
      width="30%"
      center
      destroy-on-close
    >
      <x-form v-bind="dialogModel" v-model="formData" />
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" size="large" @click="handleConfirmClick">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineExpose, ref, watch, computed } from 'vue'
import { useStore } from '@/store'
import xForm from '@/base-ui/form'

const props = defineProps({
  dialogModel: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  otherInfo: {
    type: Object,
    default: () => ({})
  }
})
const store = useStore()
const formData = ref<any>({})
const dialogVisible = ref<boolean>(false)

// 获取点击按钮
const clickName = computed(() => {
  if (Object.keys(props.defaultInfo).length) return true
  else return false
})

// 点击确定按钮的逻辑
const handleConfirmClick = () => {
  dialogVisible.value = false
  if (clickName.value) {
    // 编辑
    store.dispatch('listData/editPageListAction', {
      pageName: props.pageName,
      editData: { ...formData.value, ...props.otherInfo },
      id: props.defaultInfo.id
    })
  } else {
    // 新建
    store.dispatch('listData/createPageListAction', {
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo }
    })
  }
}

defineExpose({
  dialogVisible
})

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.dialogModel.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)
</script>

<style scoped lang="less"></style>
