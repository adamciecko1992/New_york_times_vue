<template>
  <section class="reader">
    <h1 class="is-size-1 has-text-weight-bold has-text-centered reader__header">
      Browse New York Times Articles
    </h1>
    <b-field>
      <b-input
        placeholder="Search for articles"
        type="search"
        icon="magnify"
        expanded
        v-model="phrase"
        size="is-medium"
      >
      </b-input>
      <p class="control">
        <b-button
          type="is-primary is-medium"
          @click="fetchArticles({ page: page, phrase: phrase })"
          >Search</b-button
        >
      </p>
    </b-field>

    <ArticleList v-if="!loading">
      <Article
        v-for="article in articles"
        :key="article.id"
        :loggedIn="loggedIn"
        :article="article"
        @saved="handleSave"
      >
        <template #date> {{ formatDate(article.pub_date) }}</template>
        <template #header>{{ article.headline.main }}</template>
        <template #text> {{ article.snippet }} </template>
      </Article>
    </ArticleList>
    <Spinner v-else />
    <Pagination
      v-show="response"
      :page="page"
      :total="totalHits / 100"
      @changePage="handlePageChange"
    />
  </section>
</template>

<script>
import ArticleList from "../ArticlesList/ArticlesList";
import Article from "../Article/Article";
import Spinner from "../UI/baseSpinner";
import Pagination from "../Pagination/Pagination";
import { mapState, mapActions } from "vuex";
import { addArticle } from "../../axios/firebaseAxios";

export default {
  components: {
    ArticleList,
    Article,
    Spinner,
    Pagination,
  },
  data() {
    return {
      phrase: null,
      page: 1,
    };
  },
  computed: {
    ...mapState({
      loggedIn: (state) => state.firebaseModule.loggedIn,
      userId: (state) => state.firebaseModule.userData.id,
      articles: (state) => state.nytApiModule.articles,
      totalHits: (state) => state.nytApiModule.totalHits,
      response: (state) => state.nytApiModule.response,
      error: (state) => state.nytApiModule.error,
      loading: (state) => state.nytApiModule.loading,
    }),
  },

  methods: {
    formatDate(date) {
      return date.slice(0, 10);
    },
    handleInput(phrase) {
      this.phrase = phrase;
    },
    handlePageChange(e) {
      this.page = e;
      this.fetchArticles({ page: e, phrase: this.phrase });
    },
    handleSave(payload) {
      addArticle(this.userId, payload);
    },

    ...mapActions({
      fetchArticles: "nytApiModule/fetchArticles",
    }),
  },
};
</script>

<style lang="scss">
.reader {
  margin-top: 4rem;
  padding: 5px;
  min-height: 120vh;
  &__header {
    margin-bottom: 2rem;
  }
}
</style>