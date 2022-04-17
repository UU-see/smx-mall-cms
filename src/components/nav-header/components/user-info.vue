<!--
 * @Author: smx
 * @Date: 2022-03-23 18:19:27
 * @LastEditTime: 2022-04-07 15:44:31
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\components\nav-header\components\user-info.vue
-->
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      <span>{{ name }}</span>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>用户信息</el-dropdown-item>
        <el-dropdown-item divided>系统设置</el-dropdown-item>
        <el-dropdown-item divided @click="handleExitClick"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import localStorage from '@/utils/storge'

const store = useStore()
const router = useRouter()
const name = computed(() => store.state.login.userInfo.name)

const handleExitClick = () => {
  localStorage.deleteStorge('token')
  router.push('/main')
}
</script>

<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
}
</style>
