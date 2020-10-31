import { authenticateUser, updateArticles } from "../axios/firebaseAxios";


const fireBaseModule = {
    namespaced: true,
    state() {
        return {
            loggedIn: false,
            logInError: false,
            userData: null,
            savedArticles: [],
        };
    },

    mutations: {
        logIn(state) {
            state.loggedIn = true;
        },
        logOut(state) {
            state.loggedIn = false;
            state.savedArticles = [];
            state.userData = null;

        },
        authError(state) {
            state.loggedIn = false;
            state.logInError = true;
        },
        setUserData(state, payload) {
            state.userData = payload;
        },
        setSavedArticles(state, payload) {
            state.savedArticles = payload;
        }
    },
    actions: {
        async auth({ commit }, payload) { //did it in store only for exercise in dispatching actions
            const [isAuthenticated, userData] = await authenticateUser(payload);
            if (isAuthenticated) {
                commit('logIn')
                commit('setUserData', userData)
                commit('setSavedArticles', Object.values(userData.articles));

            } else {
                commit('authError')
            }
        },
        async updateSavedArticles({ commit, state }) {
            const updatedArticles = await updateArticles(state.userData.id);
            commit('setSavedArticles', updatedArticles.data);
        }

    },
}

export default fireBaseModule;