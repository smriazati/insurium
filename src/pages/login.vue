<template>
  <div class="container">
    <section class="login">
      <div class="section-wrapper">
        <h1 class="title">
          Log in
        </h1>

<form class="login">
  <div class="form-group">
    <label
      class="form-control-label"
      for="email"
    >Email</label>
    <input
      id="email"
      ref="first"
      v-model="email"
      required
      class="form-control"
      :class="isEmailValid ? 'valid' : 'error'"
      type="email"
      placeholder="Email"
    />
  </div>
  <div class="form-group">
    <label
      class="form-control-label"
      for="password"
    >Password</label>
    <input
      v-model="password"
      required
      class="form-control"
      :class="isPwordValid ? 'valid' : 'error'"
      type="password"
      placeholder="Password"
    />
  </div>
  <div class="form-group">
    <p
      v-if="error"
      class="copy-wrapper alert alert-danger error"
    >
      {{ error }}
    </p>
    <button
      class="btn btn-primary"
      :class="isFormValid ? 'valid' : 'error'"
      type="submit"
      @click.prevent="logIn"
    >Log in</button>
    </div> <!-- form - group -->
  </form> <!-- root -->

        <nav>
            <p class="small">
              Need to create a new account? <nuxt-link to="register">Register</nuxt-link>
            </p>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>

export default {
    layout: 'login',
    transition: 'bounce',
    data() {
        return {
            pageTitle: 'Login',
            email: '',
            name: '',
            error: '',
            password: ''

        }
    },
    computed: {
      isEmailValid() {
        if (this.email.includes('@') && this.email.includes('.')) {
          return true
        } else {
          return false;
        }
      },
      isPwordValid() {
        if (this.password.length > 8) {
          return true
        } else {
          return false;
        }
      },
      isFormValid() {
        if (this.isEmailValid && this.isPwordValid) {
          return true
        } else {
          return false;
        }
      }
    },
    mounted() {
      // from https://michaelnthiessen.com/set-focus-on-input-vue/
      this.$refs.first.focus();
    },
    methods: {
      async logIn() {
        const info = {
          email: this.email,
          password: this.password
        }
        try {
          await this.$fireAuth.signInWithEmailAndPassword(info.email, info.password)
          .then(
              () => {
                  this.$router.replace("/dashboard")
              }, error => {
                  this.error = error.message;
              }
          )
        } catch (e) {
          this.error = e;
        }
      }
    }
}
</script>

<style>


</style>
