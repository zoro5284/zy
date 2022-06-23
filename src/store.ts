import { createStore } from 'vuex'
import { testData } from './mock/testData'
export default createStore({
  state: {
    columnList: testData
  },
  getters: {
    columnDetail: (state) => (id: number) => {
      return state.columnList.find(item => item.id === id)
    }
  },
  mutations: {},
  actions: {}
})
