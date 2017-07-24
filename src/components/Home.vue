<template>
  <main>
    <v-layout row
      wrap>
      <v-flex text-xs-center
        mt-2
        xs12
        sm6
        offset-sm3>
        <v-btn class="primary"
          @click.stop="action='Go'">Go</v-btn>
        <v-btn class="secondary"
          @click.stop="action='Stop'">Stop</v-btn>

        <v-carousel class="mt-3 mb-3">
          <v-carousel-item
          v-for="(item,i) in items"
            v-bind:src="item.src"
            :key="i"></v-carousel-item>
        </v-carousel>

      </v-flex>
    </v-layout>
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
  }
}
</script>
