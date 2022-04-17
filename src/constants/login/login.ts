/*
 * @Author: smx
 * @Date: 2022-03-17 22:07:03
 * @LastEditTime: 2022-03-24 16:42:33
 * @LastEditors: smx
 * @Description:
 * @FilePath: \vue-ts\src\constants\login-rules.config.ts
 */
export const rules = {
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须为5-10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,15}$/,
      message: '密码必须为6-15个字母或数字',
      trigger: 'blur'
    }
  ],
  number: [
    {
      required: true,
      message: '请输入手机号码',
      trigger: 'blur'
    },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '请正确输入你的手机号码',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '请输入正确的验证码',
      trigger: 'blur'
    }
  ]
}
