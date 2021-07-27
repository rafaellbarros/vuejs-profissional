import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import actions from './actions'
import mutations from './mutations'
import state from './state'

const vuexPersist = new VuexPersist({
    key: 'cd-works',
    storage: window.localStorage,
})

Vue.use(Vuex)

export default new Vuex.Store({
    plugin: [vuexPersist.plugin],
    state: state,
    mutations: mutations,
    actions: actions,
    getters: {},
    modules: {},
})
