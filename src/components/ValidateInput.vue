<template>
  <div class="validate-input-container" pb-3>
    <input type="text"
      class="form-control"
      :class="{'is-invalid': inputRef.error, 'is-valid': inputRef.val && !inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    >
    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.errMsg }}</span>
    <span v-if="inputRef.val && !inputRef.error" class="valid-feedback">{{ succMsg }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from 'vue'
import { emitter } from './ValidateForm.vue'
interface RuleProps {
  type: 'required' | 'email' | 'pwd',
  errMsg: string
}
export type RulesProps = RuleProps[]
const emailReg = /^[0-9a-zA-Z]+@(([0-9a-zA-Z]+)[.])+[a-z]{2,4}$/i
export default defineComponent({
  props: {
    rules: {
      type: Array as PropType<RulesProps>,
      default: () => ([])
    },
    succMsg: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  inheritAttrs: false,
  setup (props, context) {
    console.log('attrs', context.attrs)
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      errMsg: ''
    })
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.errMsg = rule.errMsg
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    onMounted(() => {
      emitter.emit('form-item-created', validateInput)
    })
    const updateValue = (e: Event) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>
