<!-- components/global/nav/Sidebar.vue -->
<template>
  <div class="flex">
    <aside class="w-64 bg-gray-800 text-white min-h-screen fixed left-0 top-0">
      <nav class="py-8">
        <ul class="space-y-3">
          <li v-for="link in sidebarLinks" :key="link.label" class="group">
            <a
              href="#"
              @click.prevent="setActiveComponent(link.component)"
              :tabindex="0"
              class="flex items-center space-x-4 p-3 m-4 rounded-lg"
              :class="{
                'text-strongBlue': activeComponent === link.component,
              }"
            >
              <div
                class="p-1 rounded-full transition-transform duration-300"
                :class="{
                  'bg-blue-100 shadow-lg': activeComponent === link.component,
                  'scale-125': activeComponent === link.component,
                }"
              >
                <Icon :name="link.icon" class="h-6 w-6" />
              </div>
              <span
                class="text-base font-medium"
                :class="{
                  'group-hover:text-blue-500 text-lg':
                    activeComponent !== link.component,
                  'text-strongBlue font-bold text-xl':
                    activeComponent === link.component,
                }"
              >
                {{ link.label }}
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <div
        class="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between"
      >
        <SharedUserProfileAvatar />
        <button
          class="flex h-12 w-12 items-center justify-center rounded-full outline-none bg-gray-700 hover:bg-gray-600 text-white transition duration-300 ease-in-out"
        >
          <Icon name="mdi:logout" class="h-7 w-7" alt="Logout icon" />
        </button>
      </div>
    </aside>

    <main class="flex-1 mt-4 min-h-screen">
      <component :is="activeComponent" />
    </main>
  </div>
</template>

<script setup>
import { useSidebar } from "@/composables/useSidebar";

const { sidebarLinks, activeComponent, setActiveComponent } = useSidebar();
</script>
