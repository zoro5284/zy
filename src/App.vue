<template>
  <div class="container">
    <GlobalHeader :user="curUser" />
    <!-- <ColumnList :list="list"/> -->
    <ValidateForm @form-submit="handleFormSubmit">
      <label class="form-label">邮箱地址</label>
      <ValidateInput :rules="emailRules" v-model="emailVal" succ-msg="that's right" placeholder="请输入邮箱地址" />
      <label class="form-label">密码</label>
      <ValidateInput :rules="pwdRules" v-model="pwdVal" succ-msg="that's right" placeholder="请输入密码" />
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProps } from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm
  },
  setup () {
    const curUser:UserProps = {
      isLogin: true,
      name: 'Jzy'
    }

    const testData: ColumnProps[] = [
      {
        id: 1,
        title: '路飞',
        description: '海贼王，阳光sunny号船长，赏金21亿贝利',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0705%252F735415e2j00qvrocv003jc000p0010bc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657760253&t=2a7b1555048f094a540f8d6ca5317b1e'
      },
      {
        id: 2,
        title: '索隆',
        description: '世界第一剑豪，阳光sunny号副船长，赏金15亿贝利',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F01%2F20160901202246_8J5Ga.thumb.400_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657760292&t=e5d41a1111d73ee3f87c9c0d458f3253'
      },
      {
        id: 3,
        title: '山治',
        description: '这是一个厨师，赏金8亿贝利',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fee62958a35ed65a39b55179cd4939a27e71f2f47.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657760368&t=83ba8b4dc4ad4a4601282fec3088f6b0'
      }
    ]
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
      list: testData,
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
