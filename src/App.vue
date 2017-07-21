<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        Hello
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>

        <v-btn flat
          v-for="{title, uri, icon} in navigation"
          :to="uri"
          :key="uri">
          <v-icon left>{{icon}}</v-icon>
          {{title}}
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      navigation: [
        { title: 'Broz', uri: '/broz', icon: 'search' },
        { title: 'Fox', uri: '/fox', icon: 'favorite' },
        { title: 'Sign In', uri: '/signin', icon: 'more_vert' }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import './stylus/main'
</style>
