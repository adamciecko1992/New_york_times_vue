<template>
  <header>
    <b-navbar type="is-black" spaced fixed-top>
      <template slot="brand">
        <b-navbar-item>
          <img :src="logo" alt="New York Times Logo" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div" v-if="!loggedIn">
          <div class="buttons">
            <b-button type="is-light">Sign up</b-button>
            <b-button type="is-info">Log In</b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
import logo from "../../assets/logo.jpg";

export default {
  data() {
    return {
      logo,
    };
  },

  computed: {
    ...mapState({
      loggedIn: (state) => state.loggedIn,
    }),
  },

  methods: {
    showLogIn() {
      this.auth({ username: "admin", password: "admin" });
      this.login = true;
    },
    showSignIn() {
      this.signup = true;
    },
    ...mapActions(["auth"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
