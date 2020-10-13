import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getAuthorization(): string {
  return  localStorage.getItem('Authorization') ?? ''
}

export default new Vuex.Store({
  state: {
    Authorization: getAuthorization()
  },
  mutations: {
    changeLogin(state, user) {
      state.Authorization = user.Authorization
      localStorage.setItem('Authorization', user.Authorization)
    }
  },

  actions: {
  },

  modules: {
  }
})
