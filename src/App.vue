<template>
  <router-view />
</template>

<style lang="scss">
html{
  width: 100%;
  height: 100%;
}
body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  height: 100%;
  margin: auto;
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
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
export default ({
  components: {
    NavBar,
    SideBar

  },
  data () {
    return { isSideBarOpen: false }
  },
  methods: {
    toggleSideBar () {
      this.isSideBarOpen = !this.isSideBarOpen
    }
  }
})
</script>
