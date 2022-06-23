<template>
  <div>
     <ColumnList :list="list"/>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import ColumnList from '../components/ColumnList.vue'
export default defineComponent({
  components: {
    ColumnList
  },
  setup () {
    const store = useStore()
    const list = computed(() => store.state.columnList)
    return {
      list
    }
  }
})
</script>
