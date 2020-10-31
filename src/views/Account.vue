<template>
  <section class="account">
    <appArticleList v-if="userId">
      <appArticle
        v-for="article in savedArticles"
        :key="article.id"
        :article="article"
      >
        <template #date> {{ formatDate(article.pub_date) }}</template>
        <template #header>{{ article.headline.main }}</template>
        <template #text> {{ article.snippet }} </template>
      </appArticle>
    </appArticleList>
  </section>
</template>

<script>
import ArticleList from "../components/ArticlesList/ArticlesList";
import Article from "../components/Article/Article";

import { mapState, mapActions } from "vuex";

export default {
  name: "account",
  components: {
    appArticleList: ArticleList,
    appArticle: Article,
  },
  computed: {
    ...mapState({
      userId: (state) => state.firebaseModule.userData.id,
      savedArticles: (state) => state.firebaseModule.savedArticles,
    }),
  },
  mounted() {
    this.updateArticles();
  },

  methods: {
    formatDate(date) {
      return date.slice(0, 10);
    },
    ...mapActions({ updateArticles: "firebaseModule/updateSavedArticles" }),
  },
};
</script>

<style lang="scss" scoped>
.account {
  min-height: 120vh;
  padding-top: 2rem;
}
</style>
