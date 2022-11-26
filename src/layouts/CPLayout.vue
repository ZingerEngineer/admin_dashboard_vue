<template>
  <div class="flex flex-row layout">
    <side-nav v-if="isSideNavOpen" />
    <div class="flex flex-col flex-grow">
      <NavBar @toggle="toggleSideNav" />
      <div class="p-3 content bg-slate-200 flex-grow flex-row flex">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
import NavBar from '../components/NavBar.vue'
import SideNav from '../components/SideNav.vue'
export default {
  components: {
    NavBar,
    SideNav
  },
  data () {
    return { isSideNavOpen: false }
  },
  methods: {
    toggleSideNav () {
      this.isSideNavOpen = !this.isSideNavOpen
    }
  }
}
</script>

<style lang="sass" scoped>
.layout
 overflow: hidden
 max-width: 100vw
 width: 100vw
 height: 100vh
.content
  overflow-y: auto
</style>
