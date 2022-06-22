<template>
  <div class="container">
    <GlobalHeader :user="curUser" />
    <router-view />
    <!-- <ValidateForm @form-submit="handleFormSubmit">
      <label class="form-label">邮箱地址</label>
      <ValidateInput :rules="emailRules" v-model="emailVal" succ-msg="that's right" placeholder="请输入邮箱地址" />
      <label class="form-label">密码</label>
      <ValidateInput :rules="pwdRules" v-model="pwdVal" succ-msg="that's right" placeholder="请输入密码" />
    </ValidateForm> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProps } from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader
    // ValidateInput,
    // ValidateForm
  },
  setup () {
    const curUser:UserProps = {
      isLogin: true,
      name: 'Jzy'
    }

    const emailRules: RulesProps = [
      {
        type: 'required',
        errMsg: '请输入邮箱'
      },
      {
        type: 'email',
        errMsg: '请确认邮箱格式'
      }
    ]
    const pwdRules: RulesProps = [
      {
        type: 'required',
        errMsg: '请输入密码'
      },
      {
        type: 'pwd',
        errMsg: '请确认密码格式'
      }
    ]
    const emailVal = ref('')
    const pwdVal = ref('')
    const handleFormSubmit = (result: boolean) => {
      console.log('result', result)
    }
    return {
      curUser,
      emailRules,
      pwdRules,
      emailVal,
      pwdVal,
      handleFormSubmit
    }
  }
})
</script>
