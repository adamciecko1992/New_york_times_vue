import Vue from 'vue'
import Vuex from "vuex"
import App from './App.vue'
import Buefy from 'buefy'
import './assets/scss/app.scss'
import {store} from "./store/store";

Vue.use(Buefy)
Vue.use(Vuex)



new Vue({
    el: '#app',
    store,
    render: h => h(App)
})