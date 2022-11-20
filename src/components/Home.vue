<template>
  <div class="cards flex flex-col flex-grow justify-between md:flex-row">
    <div v-for="card in cardsList" :key="card.label" class="flex flex-grow one-card">
      <card :card="card" />
    </div>
  </div>
</template>

<script lang="ts">
import Card from "./Card.vue";
import { cardsList } from "../statics/cards";
export default {
  name: "Home-page",
  components: {
    Card,
  },
  data() {
    return {
      cardsList,
    };
  },
};
</script>

<style lang="sass" scoped>
.one-card
  flex: 0.32

</style>
