<template>
  <div class="login_layout">
    <HomePageLogo class="HomePageLogo" />
    <nuxt />
  </div>
</template>

<script>
import HomePageLogo from '@/components/HomePageLogo.vue'
export default {
    components: {
        HomePageLogo
    }
}
</script>
