<template>
  <div class="flex-col flex flex-grow">
    <div class="cards flex flex-col flex-grow justify-between md:flex-row">
      <div
        v-for="card in cardsList"
        :key="card.label"
        class="flex flex-grow one-card"
      >
        <card :card="card" />
      </div>
    </div>
    <div class="secondary-cards flex flex-row flex-grow justify-between">
      <div
        v-for="SecondaryCard in SecondaryCardList"
        :key="SecondaryCard.label"
        class="flex flex-grow"
      >
        <secondary-card :SecondaryCard="SecondaryCard">
          <template #secondary-card-content>
            <div class="p-6">
              <Bar
                v-if="chartType === 'bar'"
                :height="250"
                :width="400"
                :chart-options="barChartData"
                :chart-data="chartData"
              />
              <Pie
              v-if="chartType === 'pie'"
                :chart-options="barChartData"
                :chart-data="chartData"
              />
            </div> </template
        ></secondary-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Card from './Card.vue'
import { cardsList } from '../statics/cards'
import { SecondaryCardList } from '../statics/secondary-cards'
import SecondaryCard from './SecondaryCard.vue'
import { Bar ,Pie } from 'vue-chartjs'
import { emitter } from '@/utils/emitter'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'Home-page',
  components: {
    Card,
    SecondaryCard,
    Bar,
    Pie,
  },
  data() {
    return {
      chartType: 'bar',
      SecondaryCardList,
      cardsList,
      barChartData: {
        labels: [
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thuresday',
          'Friday'
        ],
        datasets: [
          {
            label: 'Sign ups',
            backgroundColor: '#0083ff',
            data: [40, 20, 12, 39, 10, 40, 39]
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  mounted() {
    emitter.on('change-secondary-card-chart-type', (data: string) => {
      this.chartType = data
    })
  }
})
</script>

<style lang="sass" scoped>
.one-card
  flex: 0.32
</style>
