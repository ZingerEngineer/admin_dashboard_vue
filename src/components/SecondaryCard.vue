<template>
  <div
    class="wrapper border-solid border-slate-400 border flex flex-col flex-grow"
  >
    <div
      class="h-14 top-bar bg-slate-300 flex items-center p-2 border-solid border-slate-400 border-b"
    >
      <div class="flex flex-row items-center flex-grow justify-between">
        <div class="flex flex-row items-center">
          <div class="top-bar-icon w-5 mr-3 ml-6 relative text-stone-700">
            <component :is="SecondaryCard.icon" />
          </div>
          <p class="top-bar-label font-bold text-stone-700">{{ SecondaryCard.label }}</p>
        </div>
        <div v-if="SecondaryCard.functional">
          <secondary-card-drop-down :SecondaryCard="SecondaryCard" />
        </div>
      </div>
    </div>
    <div class="content flex">
      <slot name="secondary-card-content"> </slot>
    </div>
    <button class="w-fit ml-10 mb-4 text-stone-700 font" v-if="SecondaryCard.bottomButton">
      {{ SecondaryCard.buttonMessage }}
    </button>
  </div>
</template>

<script>
import SecondaryCardDropDown from './SecondaryCardDropDown.vue'
export default {
  name: 'secondary-card',
  props: {
    SecondaryCard: {
      type: Object
    }
  },
  components: { SecondaryCardDropDown }
}
</script>

<style></style>
