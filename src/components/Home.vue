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
              <BarChart :height="250"/>
            </div> </template
        ></secondary-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BarChart from './BarChart.vue'
import Card from './Card.vue'
import { cardsList } from '../statics/cards'
import { SecondaryCardList } from '../statics/secondary-cards'
import SecondaryCard from './SecondaryCard.vue'

export default {
  name: 'Home-page',
  components: {
    Card,
    SecondaryCard,
    BarChart
  },
  data() {
    return {
      SecondaryCardList,
      cardsList
    }
  }
}
</script>

<style lang="sass" scoped>
.one-card
  flex: 0.32
</style>
