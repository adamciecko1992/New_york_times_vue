<template>
  <b-modal :active="active" @close="handleClose">
    <div class="box">
      <form @submit="handleSubmit">
        <b-field
          label="Username"
          :type="usernameFieldType"
          :message="usernameErrorMessage"
        >
          <b-input
            v-model="username"
            @input="handleUsernameInput"
            @blur="usernameTouched = true"
          ></b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" password-reveal v-model="password">
          </b-input>
        </b-field>

        <b-field
          label="Password Confirmation"
          :type="passwordConfirmationFieldType"
          :message="passwordConfirmationMessage"
        >
          <b-input
            type="password"
            password-reveal
            v-model="passwordConfirmation"
            @blur="passwordConfirmationTouched = true"
          >
          </b-input>
        </b-field>
        <div class="buttons">
          <b-button type="is-dark" @click="handleSubmit">Submit</b-button>
          <b-button type="is-warning" @click="handleClose">Cancel</b-button>
        </div>
      </form>
    </div>
  </b-modal>
</template>

<script>
import { SignUpUser, checkNameAvailability } from "../../axios/firebaseAxios";
export default {
  data() {
    return {
      username: "",
      usernameTouched: false,
      usernameAvailable: false,
      password: "",
      passwordConfirmation: "",
      passwordConfirmationTouched: false,
    };
  },
  props: {
    active: Boolean,
  },
  computed: {
    usernameFieldType() {
      if (this.username === "" && this.usernameTouched) {
        return "is-danger";
      }
      return !this.usernameAvailable && this.usernameTouched ? "is-danger" : "";
    },
    usernameErrorMessage() {
      if (this.username === "" && this.usernameTouched) {
        return "Username is required";
      }
      return !this.usernameAvailable && this.usernameTouched
        ? "Username is taken"
        : "";
    },
    passwordConfirmationFieldType() {
      return this.password !== this.passwordConfirmation &&
        this.passwordConfirmationTouched
        ? "is-danger"
        : "";
    },
    passwordConfirmationMessage() {
      return this.password !== this.passwordConfirmation &&
        this.passwordConfirmationTouched
        ? "Passwords dont match!"
        : "";
    },
  },
  methods: {
    handleClose() {
      this.$emit("closeSignUp");
    },
    handleSubmit() {
      const user = { username: this.username, password: this.password };
      if (this.validateForm()) {
        SignUpUser(user);
        alert("Acccount Created");
        this.handleClose();
      } else {
        alert("Fill inputs properly");
      }
    },
    validateForm() {
      const {
        username,
        password,
        passwordConfirmation,
        usernameAvailable,
      } = this;
      const validUsername = username.length > 4 && usernameAvailable;
      const passwordsMatch = password === passwordConfirmation;
      return validUsername && passwordsMatch && usernameAvailable;
    },
    async handleUsernameInput(username) {
      this.usernameAvailable = await checkNameAvailability(username);
    },
  },
};
</script>
