<template>
  <main>
    <v-container>
      <form @submit.prevent="onSubmit"
        action="sdf">
        <v-layout row
          wrap>
          <v-flex xs12
            md1>
            <v-text-field name="backlog"
              type="number"
              v-model="backlog"
              label="Backlog"
              id="backlog"></v-text-field>
          </v-flex>
          <v-flex xs12
            md1>
            <v-text-field name="todo"
              type="number"
              v-model="todo"
              label="ToDo"
              id="todo"></v-text-field>
          </v-flex>
          <v-flex xs12
            md1>
            <v-text-field name="review"
              type="number"
              v-model="review"
              label="Review"
              id="review"></v-text-field>
          </v-flex>
          <v-flex xs12
            md1>
            <v-text-field name="approval"
              label="Approval"
              type="number"
              v-model="approval"
              id="approval"></v-text-field>
          </v-flex>
          <v-flex xs12
            md1>
            <v-text-field name="tobereleased"
              type="number"
              v-model="tobereleased"
              label="To be released"
              id="tobereleased"></v-text-field>
          </v-flex>
          <v-flex xs12
            md1>
            <v-text-field name="done"
              label="Done"
              type="number"
              v-model="done"
              id="done"></v-text-field>
          </v-flex>
          <v-flex class="text-xs-center">
            <v-text-field name="comment"
              label="Comment"
              type="text"
              v-model="comment"
              id="done"></v-text-field>
          </v-flex>
          <v-flex xs12
            md1>
            <v-btn type="submit"
              :loading="loading"
              :disabled="loading"> Save
              <span slot="loader"
                class="custom-loader">
                <v-icon light>cached</v-icon>
              </span>
            </v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-container>
  </main>
</template>

<script>
export default {
  data () {
    return {
      backlog: '',
      todo: '',
      review: '',
      approval: '',
      tobereleased: '',
      done: '',
      comment: '',
      loading: false
    }
  },
  methods: {
    onSubmit () {
      console.log('save', this._data)
    }
  }
}
</script>
