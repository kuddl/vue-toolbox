<template>
  <div>
    <v-navigation-drawer temporary
      v-model="sideNav">
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-content class="text-xs-center subheading">Home</v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile v-for="{title, uri, icon} in filteredNavigation"

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
          style="cursor: pointer"> Tools </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat
          v-for="{title, uri, icon} in filteredNavigation"
          :to="uri"
          :key="uri">
          <v-icon left
            dark>{{icon}}</v-icon> {{title}} </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'navigation',
      'user'
    ]),
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    filteredNavigation () {
      return this.navigation.filter(element => {
        if (element.hideOnLoggedIn === true && this.userIsAuthenticated) {
          return false
        } else if (element.hideOnLoggedIn === false && !this.userIsAuthenticated) {
          return false
        } else {
          return true
        }
      }
      )
    }
  },
  data () {
    return {
      sideNav: false
    }
  }
}
</script>

<style>

</style>
