<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        :href="item.route"
        class="inline-flex w-full justify-center h-14 items-center bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none"
      >
        <component class="w-[21px] mr-[10px]" :is="item.icon" />
        {{ item.label }}
      </MenuButton>
    </div>
  </Menu>
</template>

<script lang="ts">
import { Menu, MenuButton } from '@headlessui/vue'
export default {
  name: 'side-nav-button',
  props: {
    item: {
      type: Object
    }
  },
  components: {
    Menu,
    MenuButton
  }
}
</script>
