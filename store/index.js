// vuex 状态管理
import Vue from 'vue'
// uniapp内置vuex 所以不需要安装
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 数据源
  state: {
    historyLists: []
  },
  
  mutations: {
    SET_HISTORY_LISTS(state, history) {
      state.historyLists = history
    }
  },
  actions: {
    set_history({commit, state}, history) {
      let list = state.historyLists
      list.unshift(history)
      commit('SET_HISTORY_LISTS', list)
    }
  }
  
})

export default store