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
      <appReader />
    </div>
    <appFooter />
  </div>
</template>

<script>
import appHeader from "../Header/Header";
import appFooter from "../Footer/Footer";
import appReader from "../Reader/Reader";
import appSignUpWindow from "../SignUpWindow/theSignUpWindow";
import appLogInWindow from "../LogInWindow/TheLogInWindow";

export default {
  components: {
    appHeader,
    appFooter,
    appReader,
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