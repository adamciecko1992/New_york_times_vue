import Vue from "vue"
import Vuex from "vuex";
import {authenticateUser} from "../axios/firebaseAxios";

Vue.use(Vuex)


export const store = new Vuex.Store({
  state() {
    return {
      loggedIn: false,
      logInError: false
    };
  },
  mutations: {
    logIn(state) {
      state.loggedIn = true;
      console.log('logged In')
    },
    authError(state){
        state.loggedIn = false;
        state.logInError = true;
        console.log('error');
    }
  },
  actions: {
     async auth({ commit }, payload) {
         const isAuthenticated = await authenticateUser(payload);
         if(isAuthenticated){
             commit('logIn')
         }else{
             commit('authError')
         }
    },
  },
});
