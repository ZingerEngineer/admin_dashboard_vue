<template>
  <div class="wrapper min-w-[300px] border-solid border-slate-400 border flex flex-col  flex-grow">
    <div class="h-14 top-bar bg-slate-300  flex items-center p-2  border-solid border-slate-400 border-b">
      <div class="flex flex-row items-center flex-grow justify-between">
        <div class="flex flex-row items-center">
          <div class="top-bar-icon w-4 mr-1 relative">
            <component :is="SecondaryCard.icon" />
          </div>
          <p class="top-bar-label">{{ SecondaryCard.label }}</p>
        </div>
        <div v-if="SecondaryCard.functional">
          <secondary-card-drop-down :SecondaryCard="SecondaryCard" />
        </div>
      </div>
    </div>
    <div class="content h-[300px]">
    <slot name="secondary-card-content">
       </slot>
    </div>
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
