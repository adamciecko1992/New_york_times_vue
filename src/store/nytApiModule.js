import nytAxios from "../axios/nytAxios"

const nytApiModule = {
    namespaced: true,
    state() {
        return {
            loading: false,
            totalHits: null,
            response: null,
            articles: null,
            error: null,
            page: 0
        };
    },
    mutations: {
        toggleLoading(state) { state.loading = !state.loading },
        setPage(state, payload) { state.page = payload },
        setTotalHits(state, payload) { state.totalHits = payload },
        setResponse(state, payload) { state.response = payload },
        setArticles(state, payload) { state.articles = payload },
        setError(state) { state.error = true }
    },
    actions: {
        async fetchArticles({ commit }, payload) {
            commit('toggleLoading');
            const response = await nytAxios.get(`articlesearch.json?q=${payload.phrase}&page=${payload.page}`);
            commit('setPage', payload.page);
            commit('setResponse', response);
            commit("setArticles", response.data.response.docs);
            commit('setTotalHits', response.data.response.meta.hits);
            commit('toggleLoading');
            if (response.data.response.docs.length === 0) {
                commit('setError');
            }
        },
    },
}

export default nytApiModule;