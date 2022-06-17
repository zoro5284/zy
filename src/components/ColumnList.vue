<template>
  <div class="row">
    <div v-for="column in list" :key="column.id" class="col-4">
      <div class="card h-100 shadow-sm" style="width: 18rem;">
        <div class="card-body text-center">
          <img :src="column.avatar" class="w-50 h-50 my-3" :alt="column.title">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-tex">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">查看详情</a>
        </div>
      </div>
    </div>
  </div>
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
  }
})
</script>
