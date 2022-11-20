<template>
  <home-page/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomePage from '@/components/Home.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HomePage
  },
})
</script>
<style scoped>
</style>
