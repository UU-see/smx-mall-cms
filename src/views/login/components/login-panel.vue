<!--
 * @Author: smx
 * @Date: 2022-03-17 17:01:00
 * @LastEditTime: 2022-03-22 17:46:01
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\views\login\components\login-panel.vue
-->
<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" v-model="currentTab" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span
            ><el-icon><avatar /></el-icon> 账号登录</span
          >
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span
            ><el-icon><iphone /></el-icon> 手机登录</span
          >
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="iskeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginCLick"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
import { ref } from 'vue'
// 1.定义属性
const currentTab = ref<string>('account')
const iskeepPassword = ref<boolean>(true)

//2.定义方法
const accountRef = ref<InstanceType<typeof loginAccount>>()
const phoneRef = ref<InstanceType<typeof loginPhone>>()

const handleLoginCLick = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.accountLogin(iskeepPassword.value)
  } else {
    phoneRef.value?.phoneLogin(iskeepPassword.value)
  }
}
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
