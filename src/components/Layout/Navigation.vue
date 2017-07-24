<template>
  <div>
    <v-navigation-drawer temporary
      v-model="sideNav">
      <v-list>
        <v-list-tile to="/" >
          <v-list-tile-content class="text-xs-center subheading">Home</v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile v-for="{title, uri, icon} in navigation"
          :to="uri"
          :key="uri">
          <v-list-tile-action>
            <v-icon>{{icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark
      class="primary">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"
        class="--hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/"
          tag="span"
          style="cursor: pointer">
          Tools
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat
          v-for="{title, uri, icon} in navigation"
          :to="uri"
          :key="uri">
          <v-icon left
            dark>{{icon}}</v-icon>
          {{title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      navigation: [
        { title: 'Broz', uri: '/broz', icon: 'search' },
        { title: 'Fox', uri: '/fox', icon: 'favorite' },
        { title: 'Sign In', uri: '/signin', icon: 'more_vert' }
      ]
    }
  }
}
</script>

<style>

</style>
