<template>
  <ul class="row">
    <li v-for="column in list" :key="column.id" class="col-4">
      <div class="card h-100 shadow-sm" style="width: 18rem;">
        <div class="card-body text-center">
          <img :src="column.avatar" class="w-50 h-50 my-3" :alt="column.title">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-tex">{{ column.description }}</p>
          <router-link :to="`/column/${column.id}`" class="btn btn-outline-primary">进入专栏</router-link>
        </div>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface ColumnProps{
  id: number;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      default: () => ([])
    }
  },
  methods: {
  }
})
</script>
