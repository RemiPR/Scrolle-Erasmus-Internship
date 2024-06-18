<!-- components/global/nav/Sidebar.vue -->
<template>
  <div class="flex">
    <aside
      class="flex flex-col justify-between h-full w-72 3xl:w-80 bg-gray-800 text-white min-h-screen fixed left-0 top-0"
    >
      <nav
        class="mb-2 flex overflow-hidden hover:overflow-y-scroll max-h-[700px] 3xl:max-h-[975px] custom-scrollbar"
      >
        <ul class="space-y-1 p-4 w-full">
          <li class="mb-12 flex items-center">
            <NuxtLink
              to="#"
              class="group flex items-center justify-center space-x-2 px-4 py-3 m-4 rounded-lg max-w-52"
            >
              <Icon
                name="fluent:hat-graduation-24-regular"
                class="h-8 w-8 3xl:h-10 3xl:w-10 group-hover:-rotate-[25deg] transition-all duration-500 group-hover:text-blue-500"
                alt="Graduation hat icon"
              />
              <span
                class="text-3xl 3xl:text-4xl font-semibold group-hover:text-blue-300 transition-all duration-700"
                >Scrolle</span
              >
            </NuxtLink>
          </li>
          <li
            v-for="(link, index) in sidebarLinks"
            :key="link.label"
            class="group"
            :class="{
              'border-b border-gray-600':
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
              class="flex items-center space-x-4 px-3 3xl:px-4 py-3 rounded-lg transition duration-300 ease-in-out group"
              :class="{
                'bg-gray-700 text-white': activeComponent === link.component,
                'hover:bg-gray-600 hover:text-blue-400':
                  activeComponent !== link.component,
              }"
            >
              <div
                class="p-1 rounded-full transition-transform duration-300"
                :class="{
                  'bg-blue-400 text-white shadow-lg':
                    activeComponent === link.component,
                  'scale-110': activeComponent === link.component,
                }"
              >
                <Icon :name="link.icon" class="h-6 w-6" />
              </div>
              <span
                class="text-base font-medium transition duration-300 ease-in-out"
                :class="{
                  'text-white group-hover:text-blue-400':
                    activeComponent !== link.component,
                  'text-blue-400': activeComponent === link.component,
                }"
              >
                {{ link.label }}
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <!-- Avatar -->
      <div class="bottom-0 left-0 right-0 p-4">
        <ul class="space-y-1 border-t border-gray-600">
          <li v-for="link in additionalLinks" :key="link.label" class="group">
            <a
              href="#"
              @click.prevent="setActiveComponent(link.component)"
              :tabindex="0"
              class="flex items-center space-x-4 px-3 3xl:px-4 py-3 rounded-lg transition duration-300 ease-in-out group"
              :class="{
                'bg-gray-700 text-white': activeComponent === link.component,
                'hover:bg-gray-600 hover:text-blue-400':
                  activeComponent !== link.component,
              }"
            >
              <div
                class="p-1 rounded-full transition-transform duration-300"
                :class="{
                  'bg-blue-400 text-white shadow-lg':
                    activeComponent === link.component,
                  'scale-110': activeComponent === link.component,
                }"
              >
                <Icon :name="link.icon" class="h-6 w-6" />
              </div>
              <span
                class="text-base font-medium transition duration-300 ease-in-out"
                :class="{
                  'text-white group-hover:text-blue-400':
                    activeComponent !== link.component,
                  'text-blue-400': activeComponent === link.component,
                }"
              >
                {{ link.label }}
              </span>
            </a>
          </li>
        </ul>

        <div
          class="py-3 mb-3 3xl:py-4 3xl:mb-4 flex items-center justify-between bg-gray-800 border-t border-t-gray-600"
        >
          <div class="flex items-center space-x-4">
            <SharedUserProfileAvatar
              width-class="w-8 3xl:w-10"
              height-class="h-8 3xl:h-10"
              img-width-class="w-full"
              img-height-class="h-full"
              :clickable="false"
            />
            <div>
              <p class="text-white font-semibold text-base 3xl:text-lg">
                {{ teacherInfo.name }}
              </p>
              <p class="text-gray-400 text-xs 3xl:text-sm">
                {{ teacherInfo.email }}
              </p>
            </div>
          </div>

          <button
            class="flex h-8 w-8 3xl:h-10 3xl:w-10 items-center justify-center rounded-full outline-none bg-gray-700 hover:bg-gray-600 text-white transition duration-300 ease-in-out"
          >
            <Icon
              name="mdi:logout"
              class="h-5 w-5 3xl:h-6 3xl:w-6"
              alt="Logout icon"
            />
          </button>
        </div>
      </div>
    </aside>

    <main class="flex-1 min-h-screen m-6 3xl:m-8">
      <component :is="activeComponent" />
    </main>
  </div>
</template>

<script setup>
import { useSidebar } from "@/composables/useSidebar";

const {
  sidebarLinks,
  additionalLinks,
  activeComponent,
  setActiveComponent,
  teacherInfo,
} = useSidebar();
</script>

<style scoped>
/* Scrollbar Styling for the nav element */
nav::-webkit-scrollbar {
  width: 8px;
}

nav::-webkit-scrollbar-track {
  background-color: #4b5563;
  border-radius: 4px;
}

nav::-webkit-scrollbar-thumb {
  background-color: #6b7280;
  border-radius: 4px;
}

nav::-webkit-scrollbar-thumb:hover {
  background-color: #9ca3af;
}
</style>
