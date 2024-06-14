<!-- components/global/nav/Sidebar.vue -->
<template>
  <div class="flex">
    <aside class="w-72 bg-gray-800 text-white min-h-screen fixed left-0 top-0">
      <nav class="mb-2">
        <ul class="space-y-1">
          <li class="mb-12 flex items-center">
            <NuxtLink
              to="#"
              class="group flex items-center justify-center space-x-2 px-4 py-3 m-4 rounded-lg max-w-52"
            >
              <Icon
                name="fluent:hat-graduation-24-regular"
                class="h-10 w-10 group-hover:-rotate-[25deg] transition-all duration-500 group-hover:text-blue-500"
                alt="Graduation hat icon"
              />
              <span
                class="text-4xl font-semibold group-hover:text-blue-300 transition-all duration-700"
                >Scrolle</span
              >
            </NuxtLink>
          </li>
          <li
            v-for="(link, index) in sidebarLinks"
            :key="link.label"
            class="group"
            :class="{
              'border-b border-gray-700':
                index === 0 ||
                (index >= 3 && (index - 3) % 3 === 0) ||
                index === sidebarLinks.length - 1,
              'mb-4':
                index === 0 ||
                (index >= 3 &&
                  (index - 3) % 3 === 0 &&
                  index !== sidebarLinks.length - 1),
            }"
          >
            <a
              href="#"
              @click.prevent="setActiveComponent(link.component)"
              :tabindex="0"
              class="flex items-center space-x-4 px-4 py-3 rounded-lg transition duration-300 ease-in-out group"
              :class="{
                'bg-gray-700 text-white': activeComponent === link.component,
                'hover:bg-gray-600 hover:text-white':
                  activeComponent !== link.component,
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
                class="text-base font-medium transition duration-300 ease-in-out"
                :class="{
                  'text-white group-hover:text-blue-400':
                    activeComponent !== link.component,
                  'text-blue-500': activeComponent === link.component,
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
