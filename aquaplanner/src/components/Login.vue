<template>
  <b-modal
    id="loginForm"
    title="Login"
    v-bind:visible="showLoginForm"
    ok-only
    ok-disabled
    cancel-disabled
    ok-title="Login"
    centered
  >
    <b-form-group>
      <b-input-group>
        <b-form-input
          id="userNameInput"
          type="text"
          placeholder="Benutzername"
          required
        />
      </b-input-group>
    </b-form-group>
    <b-form-group>
      <b-input-group>
        <b-form-input
          id="passwordInput"
          type="password"
          placeholder="Passwort"
          required
        />
      </b-input-group>
    </b-form-group>

    <p>oder melde dich mit Google an</p>
    <center>
      <img
        class="social-image-google"
        alt="Google Logo"
        @click="socialLogin"
        src="../assets/google-logo.png"
      />
    </center>
  </b-modal>
</template>

<script lang="ts">
  import Vue from "vue";
  import firebase from "firebase";

  export default Vue.extend({
    name: "Login",
    props: {},

    data: function() {
      return {
        showLoginForm: true,
      };
    },
    methods: {
      socialLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            this.$router.replace("/");
          })
          .catch((err) => {
            alert("Oops. " + err.message);
          });
      },
    },
  });
</script>

<style scoped>
  .social-button {
    width: 75px;
    background: white;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    outline: 0;
    border: 0;
  }
  .social-button:active {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }

  .social-button:hover {
    cursor: pointer;
  }
  .social-image-google {
    width: 64px;
    align-self: center;
  }
</style>
