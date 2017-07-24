

<template>
  <v-app>
    <Navigation />

    <main>
      <router-view></router-view>
    </main>

    <my-footer />
  </v-app>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue'
import Footer from '@/components/Layout/Footer.vue'

export default {
  data () {
    return {}
  },
  components: { Navigation, 'my-footer': Footer }
}
</script>

<style lang="stylus">
@import './stylus/main'
</style>
