import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

/* 设置vue，让它去使用vuex */
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
