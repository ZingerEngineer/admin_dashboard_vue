<template>
  <div
    class="wrapper flex-grow h-[170px] text-white drop-shadow-lg p-3 flex-col flex-start justify-start flex"
    :class="card.color"
  >
    <h1 class="Name w-fit h-fit text-[25px]">{{ card.label }}</h1>
    <div class="Info flex flex-row justify-between mt-4 flex-grow items-end">
      <div>
        <div class="icon w-6 relative bottom-1">
          <component :is="card.icon" />
        </div>
      </div>
      <div class="value flex items-end flex-col">
        <p class="value w-fit h-fit text-[33px]">{{ card.value }}</p>
        <div v-if="card.discription">
          <div class="discription flex flex-row bottom-1 relative">
            <p class="discription w-fit h-fit text-[15px]">
              {{ card.discription }}
            </p>
          </div>
        </div>
        <div v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-component',
  props: {
    card: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="sass" scoped></style>
