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
      
    },
    authError(state){
        state.loggedIn = false;
        state.logInError = true;
       
    }
  },
  actions: {
     async auth({ commit }, payload) { //did it in store only for exercise in dispatching actions
         const isAuthenticated = await authenticateUser(payload);
         if(isAuthenticated){
             commit('logIn')
         }else{
             commit('authError')
         }
    },
 
  },
});
