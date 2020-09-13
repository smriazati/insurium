<template>
  <div class="container">
      <section class="dashboard">
        <div class="section-wrapper">
            <div class="understated">
                <p>
                    Welcome {{ userEmail }}, <span class="link" @click="logout">Logout?</span>
                </p>
            </div>
        
            <h1>
                Dashboard Coming Soon
            </h1>
        </div>
      </section>
  </div>
</template>

<script>

export default {
    layout: 'login',
    middleware: 'auth',
    data: function() {
        return {
            pageTitle: 'Dashboard'
        }
    },
    computed: {
        userEmail: function() {
            return this.$store.state.user.email;
        }
    },
    methods: {
        async logout() {
            try {
                await this.$store.dispatch('user/logout')
                .then( () => this.$router.replace('/'));
            } catch (e) {
                this.formError = e.message
            }
        }
    }
}
</script>

<style>


</style>
