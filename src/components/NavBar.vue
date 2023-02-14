<template>
  <Disclosure as="nav" class="bg-white p-0 w-full h-fit" v-slot="{ open }">
    <div class="mx-auto px-2 py-0.5 sm:px-6 lg:px-8">
      <div class="relative flex h-20 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex items-center justify-center w-full">
          <div class="pr-2 flex">
            <button
              class="w-8 h-8 flex items-center justify-center"
              @click="toggleSideNav"
            >
              <Bars4Icon class="w-6" />
            </button>
            <button class="w-8 h-8 flex items-center justify-center">
              <MagnifyingGlassIcon class="w-6" />
            </button>
          </div>
          <div class="w-full">
            <div class="relative">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              ></div>
              <input
                type="text"
                name="price"
                id="price"
                class="block w-full pl-7 pr-12 pt-3.5 pb-3.5 sm:text-sm outline-none"
                placeholder="Search..."
              />
              <div class="absolute inset-y-0 right-0 flex items-center"></div>
            </div>
          </div>
        </div>
        <div
          class="absolute flex items-center sm:static sm:inset-auto sm:pr-0 w-[126px] justify-around"
        >
          <button
            type="button"
            class="rounded-full p-1 text-gray-800 focus:outline-none focus:ring-white focus:ring-offset-2"
          >
            <span class="sr-only">View notifications</span>
            <CodeBracketIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            class="rounded-full p-1 text-gray-800 focus:outline-none focus:ring-white focus:ring-offset-2"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <!-- Profile dropdown -->
          <Menu as="div" class="relative">
            <div>
              <MenuButton
                class="flex rounded-full text-sm focus:outline-none focus:ring-white focus:ring-offset-2"
              >
                <span class="sr-only">Open user menu</span>
                <div
                  class="h-8 w-8 rounded-full flex justify-center items-center"
                >
                  <UserIcon class="h-6 w-6 text-gray-800" />
                </div>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 ',
            'block px-3 py-2 rounded-md text-base font-medium'
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<script lang="ts">
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  UserIcon,
  CodeBracketIcon,
  Bars4Icon,
  MagnifyingGlassIcon
} from '@heroicons/vue/24/outline'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    UserIcon,
    CodeBracketIcon,
    Bars4Icon,
    MagnifyingGlassIcon
  },
  data() {
    return {
      navigation: [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false }
      ]
    }
  },
  methods: {
    toggleSideNav(): void {
      this.$emit('toggle')
    }
  }
})
</script>

<style lang="sass"></style>
