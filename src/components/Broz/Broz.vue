<template>
  <v-container>
    <v-layout row>
      <v-flex xs12
        sm6
        offset-sm3>
        <line-chart :data="chartData"
          :options="chartOptions"></line-chart>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12
        sm6
        offset-sm3>
        <v-data-table v-bind:headers="headers"
          :items="items"
          hide-actions
          class="elevation-1">
          <template slot="items"
            scope="props">
            <td class="text-xs-right">{{ props.item.date | date }}</td>
            <td class="text-xs-right">{{ props.item.backlog }}</td>
            <td class="text-xs-right">{{ props.item.todo }}</td>
            <td class="text-xs-right">{{ props.item.review }}</td>
            <td class="text-xs-right">{{ props.item.approval }}</td>
            <td class="text-xs-right">{{ props.item.tobereleased }}</td>
            <td class="text-xs-right">{{ props.item.done }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const data = [
  {
    date: new Date('2017-08-13T14:22:46.504Z'),
    backlog: 8,
    todo: 2,
    review: 4,
    approval: 4,
    tobereleased: 4,
    done: 4
  },
  {
    date: new Date('2017-08-13T14:22:46.504Z'),
    backlog: 8,
    todo: 2,
    review: 4,
    approval: 4,
    tobereleased: 4,
    done: 4
  }
]
export default {
  computed: {
    chartData () {
      return {
        labels: ['January', 'February'],
        datasets: [
          {
            data: [40, 20]
          }
        ]
      }
    }
  },
  data () {
    return {
      chartOptions: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      },
      headers: [
        { text: 'Datum', value: 'date', sortable: false },
        { text: 'Backlog', value: 'backlog', sortable: false },
        { text: 'To Do', value: 'todo', sortable: false },
        { text: 'Review', value: 'review', sortable: false },
        { text: 'Approval', value: 'approval', sortable: false },
        { text: 'To Be Released', value: 'tobereleased', sortable: false },
        { text: 'Done', value: 'done', sortable: false }
      ],
      items: data
    }
  }
}
</script>
