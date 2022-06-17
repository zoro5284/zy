<template>
    <li class="dropdown-option" :class="{'is-disabled': disabled}">
      <slot />
    </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropDownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style>
  .dropdown-option.is-disabled * {
    color: #b2b2b2;
    pointer-events: none;
    background: transparent;
  }
</style>
