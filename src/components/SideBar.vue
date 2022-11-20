<template>
  <div class="wrapper w-[238px] min-w-[238px] h-full bg-slate-900 flex flex-col">
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
      <div class="item " v-if="!dropItem.children">
        <side-nav-button class=" w-full" :item="dropItem"/>
      </div>
      <div class="drop-down" v-else>
        <drop-down class=" w-full" :item="dropItem"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SideNavButton from "./SideNavButton.vue";
import DropDown from "./DropDown.vue";
import { dropDownItemsList } from '../statics/index';
export default {
  name: "side-bar",
  components: {
    DropDown,
    SideNavButton
  },
  data() {
    return {
      dropDownItemsList,
    };
  },
};
</script>
