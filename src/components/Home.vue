<template>
  <main>
    <v-container>
      <v-layout row
        wrap>
        <v-flex text-xs-center
          mt-2
          xs12
          md10
          offset-md1>
          <v-btn class="primary"
            @click.stop="action='Go'">Go</v-btn>
          <v-btn class="secondary"
            @click.stop="action='Stop'">Stop</v-btn>
          <v-carousel class="mt-3 mb-3">
            <v-carousel-item v-for="(item,i) in items"
              v-bind:src="item.src"
              @click="loadItem(i)"
              :key="i"></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-card>
            <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg"

              height="200px"> </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>Located two hours south of Sydney in the
                  <br>Southern Highlands of New South Wales, ... </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat
                class="orange--text">Share</v-btn>
              <v-btn flat
                class="orange--text">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
export default {
  data () {
    return {
      action: 'stop',
      items: [
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg'
        },
        {
          src: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg'
        }
      ]
    }
  },
  methods: {
    loadItem (id) {
      this.$router.push(`/fox/${id}`)
    }
  }
}
</script>
