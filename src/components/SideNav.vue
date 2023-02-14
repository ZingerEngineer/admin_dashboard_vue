<template>
  <div
    class="wrapper w-[238px] min-w-[238px] h-full bg-slate-900 flex flex-col"
  >
    <div
      class="logo text-white h-20 flex justify-center items-center text-base"
    >
      SPUR
    </div>
    <div
      class="nav-items"
      v-for="dropItem in dropDownItemsList"
      :key="dropItem.label"
    >
      <div class="item" v-if="!dropItem.children">
        <side-nav-button class="w-full" :item="dropItem" />
      </div>
      <div class="drop-down" v-else>
        <side-nav-drop-down class="w-full" :item="dropItem" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SideNavButton from './SideNavButton.vue'
import SideNavDropDown from './SideNavDropDown.vue'
import { dropDownItemsList } from '../statics/side-nav-drop-down-items'
export default {
  name: 'side-nav',
  components: {
    SideNavButton,
    SideNavDropDown
  },
  data() {
    return {
      dropDownItemsList
    }
  }
}
</script>
