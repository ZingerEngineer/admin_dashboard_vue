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
            <div>
              <Bar
                v-if="chartType == barData.type"
                :height="250"
                :width="400"
                :chart-options="barData.chartOptions"
                :chart-data="barData.chartsData"
              />
              <Pie
                v-if="chartType == pieData.type"
                :chart-options="pieData.chartOptions"
                :chart-data="pieData.chartsData"
              />
            </div>
          </template>
        </secondary-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Card from './Card.vue'
import { cardsList } from '../statics/cards'
import { SecondaryCardList } from '../statics/secondary-cards'
import SecondaryCard from './SecondaryCard.vue'
import { Bar, Pie } from 'vue-chartjs'
import { emitter } from '@/utils/emitter'
import { defineComponent } from '@vue/runtime-core'
import { barData, pieData } from '../statics/charts-data'

export default defineComponent({
  name: 'Home-page',
  components: {
    Card,
    SecondaryCard,
    Bar,
    Pie
  },
  data() {
    return {
      chartType: 'bar',
      SecondaryCardList,
      cardsList,
      barData,
      pieData
    }
  },
  mounted() {
    console.log(barData.type)
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
