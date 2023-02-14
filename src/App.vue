<template>
  <router-view />
</template>

<style lang="scss">
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  height: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import SideNav from './components/SideNav.vue'
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar,
    SideNav
  },
  data() {
    return { isSideNavOpen: false }
  },
  methods: {
    toggleSideNav() {
      this.isSideNavOpen = !this.isSideNavOpen
    }
  }
}
</script>
