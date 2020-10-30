<template>
  <div>
    <appHeader @showLogIn="showLogInWindow" @showSignUp="showSignUpWindow" />
    <appSignUpWindow />
    <div class="container">
      <appReader />
    </div>
    <appFooter />
  </div>
</template>

<script>
import appHeader from "../Header/Header";
import appFooter from "../Footer/Footer";
import appReader from "../Reader/Reader";
import appSignUpWindow from "../SignUpWindow/theSignInWindow";

export default {
  components: {
    appHeader,
    appFooter,
    appReader,
    appSignUpWindow,
  },
  data() {
    return {
      logInVisible: false,
    };
  },
  methods: {
    showLogInWindow() {
      this.logInVisible = true;
    },
    showSignUpWindow() {
      this.signUpVisible = true;
    },
  },
};
</script>

<style>
</style>