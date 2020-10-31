<template>
  <header>
    <b-navbar type="is-black" spaced fixed-top>
      <template slot="brand">
        <b-navbar-item>
          <img :src="logo" alt="New York Times Logo" />
        </b-navbar-item>
      </template>
      <template slot="start" v-if="loggedIn">
        <b-navbar-item>
          <router-link
            :to="`/account/${userId}`"
            v-slot="{ isExactActive, navigate, href }"
          >
            <b-button
              :class="{ 'is-warning': isExactActive }"
              :href="href"
              @click="navigate"
              expanded
              >Account</b-button
            >
          </router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link
            :to="`/${userId}`"
            v-slot="{ isExactActive, navigate, href }"
          >
            <b-button
              :class="{ 'is-warning': isExactActive }"
              :href="href"
              @click="navigate"
              expanded
              >Reader</b-button
            >
          </router-link>
        </b-navbar-item>
        <b-navbar-item>
          <b-button type="is-link" @click="handleLogOut">Log Out</b-button>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div" v-if="!loggedIn">
          <div class="buttons">
            <b-button type="is-light" @click="emitSignUpClick"
              >Sign up</b-button
            >
            <b-button type="is-info" @click="emitLogInClick">Log In</b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import logo from "../../assets/logo.jpg";

export default {
  data() {
    return {
      logo,
    };
  },

  computed: {
    ...mapState({
      loggedIn: (state) => state.firebaseModule.loggedIn,
      userId: (state) => state.firebaseModule.userData.id,
    }),
  },

  methods: {
    emitLogInClick() {
      this.$emit("showLogIn");
    },
    emitSignUpClick() {
      this.$emit("showSignUp");
    },
    handleLogOut() {
      this.logOut();
      this.$router.push("/");
    },
    ...mapMutations({ logOut: "firebaseModule/logOut" }),
  },
};
</script>

<style lang="scss" scoped>
</style>
