<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        :href="item.route"
        class="inline-flex w-full justify-center h-14 items-center bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none"
      >
      <component class='w-[21px] mr-[10px]' :is="item.icon" />
        {{ item.label }}
        <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>
    <MenuItems
      class="right-0 z-10 w-full origin-top-right bg-slate-900 shadow-lg focus:outline-none items-center flex flex-col"
    >
      <div class="w-full"  v-for="childItem in item.children" :key="childItem.label">
        
        <MenuItem v-slot="{ active }">
          <a
            :href="childItem.childRoute"
            :class="[
              active
                ? 'bg-slate-900  hover:bg-slate-800 text-white'
                : 'text-white',
              'flex justify-center px-4 py-2 text-sm',
            ]"
            >{{ childItem.childLabel }}</a
          >
        </MenuItem>
        
      </div>
    </MenuItems>
  </Menu>
</template>

<script lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
export default {
  name: "drop-down",
  props: {
    item: {
      type: Object,
    },
  },
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },
};
</script>
