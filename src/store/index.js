import Vue from 'vue'
import Vuex from 'vuex'
import VueAnime from 'vue-animejs';

// import example from './module-example'
import tabs from './tabs'
import state from './state'
import services from './services'

Vue.use(Vuex)
Vue.use(VueAnime)
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      tabs,
      state,
      services
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
