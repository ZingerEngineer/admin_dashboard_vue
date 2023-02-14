<template>
  <div class="flex-col flex flex-grow justify-start">
    <div
      class="cards flex flex-col mb-10 justify-between md:flex-row "
    >
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
        class="flex  w-[49%] h-fit"
      >
        <secondary-card :SecondaryCard="SecondaryCard">
          <template #secondary-card-content>
            <div
              v-if="
                SecondaryCard.contentType.type == secondaryCardContentType[0]
              "
              class="flex flex-col flex-grow py-3"
            >
              <div
                v-for="comment in SecondaryCard.contentType.content"
                :key="comment.label"
              >
                <comment-element :comment="comment" />
              </div>
            </div>
            <div
              v-if="
                SecondaryCard.contentType.type == secondaryCardContentType[1]
              "
              class="flex flex-grow justify-center content-center max-h-[300px]"
            >
              <Bar 
                v-if="chartType == barData.type"
                :chart-options="barData.chartOptions"
                :chart-data="barData.chartsData"
              />
              <Pie
                v-if="chartType == pieData.type"
                :chart-options="pieData.chartOptions"
                :chart-data="pieData.chartsData"
              />
                            <Line
                v-if="chartType == lineData.type"
                :chart-options="lineData.chartOptions"
                :chart-data="lineData.chartsData"
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
import { Bar, Pie, Line } from 'vue-chartjs'
import { emitter } from '@/utils/emitter'
import { defineComponent } from '@vue/runtime-core'
import { barData, pieData , lineData } from '../statics/charts-data'
import commentElement from './Comment.vue'
export default defineComponent({
  name: 'Home-page',
  components: {
    Card,
    SecondaryCard,
    Bar,
    Pie,
    Line,
    commentElement
  },
  data() {
    return {
      chartType: 'bar',
      SecondaryCardList,
      cardsList,
      barData,
      pieData,
      lineData,
      secondaryCardContentType: ['Comments', 'Charts']
    }
  },
  mounted() {
    console.log()
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
