<template>
  <div class="container">
    
    <header>
      <div class="section-wrapper">
        <h1 class="title">
          Insurium
        </h1>
        <h2>
          Insurance tools for all the people
        </h2>
        <nav>
          <ul>
            <li v-if="!$store.state.user.id">
              <nuxt-link class="btn" to="/register">
              Register
              </nuxt-link>
            </li>
            <li v-if="!$store.state.user.id">
              <nuxt-link class="btn" to="/login">
              Log in
              </nuxt-link>
            </li>
            <li v-if="$store.state.user.id">
              <nuxt-link class="btn" to="/dashboard">
              Dashboard
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  transition: 'bounce',
  head() {
    return {
        title: this.pageTitle
    }
  }
}
</script>

<style>


</style>
