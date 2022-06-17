<template>
  <div class="validate-input-container" pb-3>
    <input type="text"
      class="form-control"
      :class="{'is-invalid': inputRef.error, 'is-valid': inputRef.val && !inputRef.error}"
      v-model="inputRef.val"
      @blur="validateInput"
    >
    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.errMsg }}</span>
    <span v-if="inputRef.val && !inputRef.error" class="valid-feedback">{{ succMsg }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
interface RuleProps {
  type: 'required' | 'email',
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
    }
  },
  setup (props) {
    const inputRef = reactive({
      val: '',
      error: false,
      errMsg: ''
    })
    const validateInput = () => {
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
    }
    return {
      inputRef,
      validateInput
    }
  }
})
</script>
