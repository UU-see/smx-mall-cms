<!--
 * @Author: smx
 * @Date: 2022-03-17 18:28:19
 * @LastEditTime: 2022-03-27 17:31:18
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\views\login\components\login-account.vue
-->
<template>
  <div class="account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name"
        ><el-input v-model="account.name"
      /></el-form-item>
      <el-form-item label="密码" prop="password"
        ><el-input v-model="account.password" type="password"
      /></el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineExpose, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { rules } from '@/constants/login/login'
import localStorge from '@/utils/storge'

const store = useStore()

const account = ref({
  name: localStorge.getStorge('name') ?? '',
  password: localStorge.getStorge('password') ?? ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const accountLogin = (iskeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      //1.判断是否需要记住密码
      if (iskeepPassword) {
        //本地缓存
        localStorge.setStorge('name', account.value.name)
        localStorge.setStorge('password', account.value.password)
      } else {
        localStorge.deleteStorge('name')
        localStorge.deleteStorge('password')
      }
      // 2.执行登录逻辑
      store.dispatch('login/accountLoginAction', { ...account.value })
    }
  })
}

defineExpose({
  accountLogin
})
</script>

<style scoped lang="less"></style>
