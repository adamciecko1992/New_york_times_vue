<template>
  <div>
    <appHeader
      @showLogIn="toggle('logInVisible')"
      @showSignUp="toggle('signUpVisible')"
    />
    <appSignUpWindow
      :active="signUpVisible"
      @closeSignUp="toggle('signUpVisible')"
    />
    <appLogInWindow
      :active="logInVisible"
      @closeLogIn="toggle('logInVisible')"
    />
    <div class="container">
      <router-view></router-view>
    </div>
    <appFooter />
  </div>
</template>

<script>
import appHeader from "../Header/Header";
import appFooter from "../Footer/Footer";

import appSignUpWindow from "../SignUpWindow/theSignUpWindow";
import appLogInWindow from "../LogInWindow/TheLogInWindow";

export default {
  components: {
    appHeader,
    appFooter,

    appSignUpWindow,
    appLogInWindow,
  },
  data() {
    return {
      logInVisible: false,
      signUpVisible: false,
    };
  },
  methods: {
    toggle(prop) {
      this[prop] = !this[prop];
    },
  },
};
</script>

<style>
</style>