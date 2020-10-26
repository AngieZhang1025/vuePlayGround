// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)
const localCreatedCount = localStorage.getItem('createdCount')
const localFinishedCount = localStorage.getItem('finishedCount')
const store = new Vuex.Store({
  state: {
    theme: 'gray',
    createdCount: localCreatedCount || 0,
    finishedCount: localFinishedCount || 0
  },
  mutations: {
    finishedCountIncrement (state) {
      state.finishedCount++
    },
    createdCountIncrement (state) {
      state.createdCount++
    },
    finishedCountDecrement (state) {
      state.finishedCount--
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
