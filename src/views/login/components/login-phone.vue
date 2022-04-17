<!--
 * @Author: smx
 * @Date: 2022-03-17 18:29:03
 * @LastEditTime: 2022-03-27 17:34:07
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\views\login\components\login-phone.vue
-->
<template>
  <el-form :rules="rules" :model="phone" ref="formRef">
    <el-form-item label="手机号" prop="number">
      <el-input v-model="phone.number" />
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="get-code">
        <el-input v-model="phone.code" />
        <el-button type="primary" class="get-btn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { defineExpose, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import { rules } from '@/constants/login/login'
import localStorge from '@/utils/storge'

const store = useStore()

const phone = ref({
  number: localStorge.getStorge('number') ?? '',
  code: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const phoneLogin = (iskeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      //1.判断是否需要记住密码
      if (iskeepPassword) {
        //本地缓存
        localStorge.setStorge('number', phone.value.number)
      } else {
        localStorge.deleteStorge('number')
      }
      // 2.执行登录逻辑
      store.dispatch('login/phoneLoginAction', { ...phone.value })
    }
  })
}

defineExpose({
  phoneLogin
})
</script>

<style scoped>
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 8px;
}
</style>
