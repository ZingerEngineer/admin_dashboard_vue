<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex justify-center bg-slate-300 px-2 py-2 text-sm font-medium text-gray-800 focus:outline-none"
      >
        <ChevronDownIcon
          class="mr-1 ml-2 h-5 w-5 flex justify-center items-center"
          aria-hidden="true"
        />
      </MenuButton>
    </div>
    <MenuItems
      class="right-0 w-28 z-10 w-fit h-fit origin-top-right bg-white shadow-lg focus:outline-none justify-center items-center flex flex-col absolute border-slate-400 border-solid border-[1px]"
    >
      <div
        class=""
        v-for="item in SecondaryCard.CardDropDownItems"
        :key="item"
      >
        <MenuItem v-slot="{ active }">
          <a
            href="#"
            :class="[
              active
                ? 'bg-white text-gray-800 border-slate-400'
                : 'text-gray-800 border-slate-400 ',
              'flex justify-center px-4 py-2 text-sm'
            ]"
            >{{ item }}</a
          >
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
</template>

<script lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
export default {
  name: 'secondary-card-drop-down',
  props: {
    SecondaryCard: {
      type: Object
    }
  },
  components: {
    ChevronDownIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
  }
}
</script>
