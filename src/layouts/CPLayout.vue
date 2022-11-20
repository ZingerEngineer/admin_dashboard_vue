<template>
  <div class="flex flex-row layout">
    <side-bar v-if="isSideBarOpen" />
    <div class="flex flex-col flex-grow">
      <NavBar @toggle="toggleSideBar" />
      <div class="p-3 content bg-slate-200 flex-grow flex-row flex">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return { isSideBarOpen: false };
  },
  methods: {
    toggleSideBar() {
      this.isSideBarOpen = !this.isSideBarOpen;
    },
  },
};
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
