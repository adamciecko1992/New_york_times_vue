import Vue from "vue"
import Vuex from "vuex";
import firebaseModule from "./firebaseModule";
import nytApiModule from "./nytApiModule"


Vue.use(Vuex)


export const store = new Vuex.Store({
    modules: {
        firebaseModule,
        nytApiModule,
    }
});