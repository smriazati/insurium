<template>
  <div class="container">
    <section class="register">
      <div class="section-wrapper">
        <h1 class="title">
          Register
        </h1>
        <!-- <form @submit.prevent>
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" type="text" name="name" v:bind="name">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" name="email" v:bind="email">
            </div>
            <div class="form-group">
                <div id="submit" class="btn submit" @click.prevent="registerNewAccount">
                    Register
                </div>
            </div>
        </form> -->
<form class="register">
    <div class="form-group">
        <label
        class="form-control-label"
        for="Email"
        >Email</label>
        <input
        required
        class="form-control"
        type="email"
        id="email"
        placeholder="Email"
        v-model="email"
        />

        <label
        class="form-control-label"
        for="Name"
        >Name</label>
        <input
        required
        class="form-control"
        type="name"
        id="name"
        placeholder="Name"
        v-model="name"
        />
    </div>

    <div class="form-group">
    <label
        class="form-control-label"
        for="password1"
    >Create Password</label>
    <input
        required
        class="form-control"
        type="password"
        placeholder="Password"
        v-model="password1"
    />

    <label
        class="form-control-label"
        for="password2"
    >Confirm Password</label>
    <input
        required
        class="form-control"
        type="password"
        placeholder="Confirm Password"
        v-model="password2"
    />
    </div>

    <div class="form-group">
    <p class="error" :class="validateNewPassword === true || validateNewPassword === null ? 'error-hide' : 'error-show'">
        Passwords should match
    </p>
    <p 
        class="alert alert-danger"
        v-if="error"
        >
        {{ error }}
    </p>
    <button
        class="btn btn-primary"
        :class="validateNewPassword === true ? 'btn-active' : 'btn-disabled'"
        type="submit"
        @click.prevent="createUser"
    >Create an account</button>
    </div> <!-- form - group -->

</form> 


        <nav>
            <p class="small">
                Already have an account? <nuxt-link to="login">Log in</nuxt-link>
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
    data: function() {
        return {
            pageTitle: 'Register',
            email: '',
            name: '',
            error: '',
            password1: '',
            password2: ''

        }
    },
    computed: {
        validateNewPassword: function() {
            if (this.password1 === '' && this.password2 === '') { // empty form
                return null;
            } 
            if (this.password1 !== '' && this.password2 === '') { // empty p2
                return null;
            }
            if (this.password1 !== '' && this.password2 !== '') {
                if (this.password1 === this.password2) {
                    return true;
                } else {
                    return false;
                }
            }
            return true;
        }
    },
    methods: {
        async createUser() {
            if (this.validateNewPassword) {
                const info = {
                email: this.email,
                password: this.password1,
                displayName: this.name
                }
                try {
                    await this.$fireAuth.createUserWithEmailAndPassword(
                        info.email, info.password
                    ).then( () => this.$router.replace('dashboard'))
                } catch (e) {
                    this.error = e.message;
                }
            } else {
                if (this.email === '' || this.name === '') {
                    this.error = 'Please fill out all required fields.'
                } else {
                   this.error = 'Please check your passwords match.'
                }
           } 
        }
    },
    head() {
        return {
            title: this.pageTitle
        }
    }
}
</script>

<style>


</style>
