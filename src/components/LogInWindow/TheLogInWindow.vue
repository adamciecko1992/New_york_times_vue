<template>
  <b-modal :active="active" @close="handleClose">
    <div class="box">
      <form>
        <b-field label="Username">
          <b-input v-model="username"></b-input>
        </b-field>

        <b-field
          label="Password"
          :message="error ? 'username or password invalid' : ''"
        >
          <b-input type="password" password-reveal v-model="password">
          </b-input>
        </b-field>

        <div class="buttons">
          <b-button type="is-dark" @click="handleSubmit">Log In</b-button>
          <b-button type="is-warning" @click="handleClose">Cancel</b-button>
        </div>
      </form>
    </div>
  </b-modal>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  props: {
    active: Boolean,
  },
  computed: {
    logInMessage() {
      if (this.loggedIn) {
        return "You logged in";
      } else if (this.error) {
        return "Username or password invalid";
      }
      return "";
    },
    ...mapState({
      error: (state) => state.firebaseModule.logInError,
      loggedIn: (state) => state.firebaseModule.loggedIn,
      userData: (state) => state.firebaseModule.userData,
    }),
  },
  watch: {
    loggedIn() {
      if (this.loggedIn) {
        this.handleClose();
        alert("Welcome ");
      }
    },
    userData() {
      console.log("changed");
      if (this.userData.id) {
        this.$router.push(`/${this.userData.id}`);
      }
    },
  },

  methods: {
    handleClose() {
      this.$emit("closeLogIn");
    },
    handleSubmit() {
      const user = { username: this.username, password: this.password };
      this.auth(user);
    },
    ...mapActions({
      auth: "firebaseModule/auth",
    }),
  },
};
</script>
