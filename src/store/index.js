import Vue from 'vue'
import Vuex from 'vuex'
import { PostsStore } from './modules/PostsStore.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        PostsStore
    }
})

export default store