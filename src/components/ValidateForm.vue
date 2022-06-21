<template>
    <form class="validate-form-container">
      <slot />
      <slot name="footer">
        <button type="button" class="btn btn-primary mt-3" @click="submitForm">Primary</button>
      </slot>
    </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
// todo
type ValidateFunc = () => boolean
type Emits<EventType extends string | symbol, T> = {
  on(type: EventType, handler: (arg: T) => void): void
  off(type: EventType, handler: (arg: T) => void): void
  emit(type: EventType, arg: T): void
}
type Emitter = Emits<'form-item-created', ValidateFunc>
export const emitter:Emitter = mitt<Emitter>()

export default defineComponent({
  setup (props, context) {
    const validateFuncArr: ValidateFunc[] = []
    const callback = (func?: ValidateFunc) => {
      func && validateFuncArr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
    })

    const submitForm = () => {
      const result = validateFuncArr.map(func => func()).every(res => res)
      context.emit('form-submit', result)
    }
    return {
      submitForm
    }
  }
})
</script>
