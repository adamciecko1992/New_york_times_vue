<template>
  <section class="reader">
    <h1 class="is-size-1 has-text-weight-bold has-text-centered reader__header">Browse New York Times Articles</h1>
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
        <b-button type="is-primary is-medium" @click="fetchArticles(1)"
          >Search</b-button
        >
      </p>
    </b-field>

    <ArticleList v-if="!loading">
      <Article v-for="article in articles" :key="article.id">
        <template #date> {{ formatDate(article.pub_date) }}</template>
        <template #header>{{ article.headline.main }}</template>
        <template #text> {{ article.snippet }} </template>
      </Article>
    </ArticleList>
    <Spinner v-else />
    <Pagination
      v-show="response"
      :page="page"
      :total="Math.min(totalHits / 10, 500)"
      @changePage="handlePageChange"
    />
  </section>
</template>

<script>
import ArticleList from "../ArticlesList/ArticlesList";
import Article from "../Article/Article";
import Spinner from "../UI/baseSpinner";
import Pagination from "../Pagination/Pagination";
import { mapState } from "vuex";

export default {
  inject: ["axios"],
  components: {
    ArticleList,
    Article,
    Spinner,
    Pagination,
  },
  data() {
    return {
      phrase: null,
      page: 0,
      articles: null,
      totalHits: null,
      loading: false,
      response: null,
      howManyPages: null,
      error: false,
      errorMessage: "",
    };
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.loggedIn,
    }),
  },

  methods: {
    fetchArticles(page = 0) {
      this.loading = true;
      this.page = page;
      this.axios
        .get(`articlesearch.json?q=${this.phrase}&page=${page}`)
        .then(({ data }) => {
          this.articles = data.response.docs;
          this.totalHits = data.response.meta.hits;
          this.response = data;
          this.loading = false;
          if (data.response.docs.length === 0) {
            throw new Error("nothing found");
          }
        })
        .catch((err) => {
          this.error = true;
          this.errorMessage = err;
        });
    },
    formatDate(date) {
      return date.slice(0, 10);
    },
    handleInput(phrase) {
      this.phrase = phrase;
    },
    handlePageChange(e) {
      this.page = e;
      this.fetchArticles(e);
    },
  },
};
</script>

<style lang="scss">
.reader {
  margin-top: 4rem;
  padding: 5px;
  min-height: 120vh;
  &__header{
    margin-bottom: 2rem;
  }
}
</style>