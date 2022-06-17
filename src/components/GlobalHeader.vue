<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <span class="navbar-brand mb-0 h1">ONE PIECE</span>
    <ul class="list-inline mb-0">
        <li class="list-inline-item" v-if="!user.isLogin">
          <a href="#" class="btn btn-outline-light mx-2">登陆</a>
          <a href="#" class="btn btn-outline-light mx-2">注册</a>
        </li>
        <li  class="list-inline-item" v-else>
          <DropDown :title="`你好 ${user.name}`">
            <DropDownItem><a class="dropdown-item" href="#">新建悬赏</a></DropDownItem>
            <DropDownItem><a class="dropdown-item" href="#">编辑悬赏</a></DropDownItem>
            <DropDownItem disabled><a class="dropdown-item" href="#">退出登陆</a></DropDownItem>
          </DropDown>
        </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from './DropDown.vue'
import DropDownItem from './DropDownItem.vue'
export interface UserProps{
    isLogin: boolean;
    name?: string;
    id?: number;
}
export default defineComponent({
  components: {
    DropDown,
    DropDownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>
