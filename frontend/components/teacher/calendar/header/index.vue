<!--components/teacher/calendar/header/index.vue-->
<template>
  <div>
    <div class="flex items-center justify-between mb-4">
      <!-- Search bar -->
      <div class="relative">
        <input
          :value="searchQuery"
          @input="$emit('update:search-query', $event.target.value)"
          placeholder="Filter by..."
          class="w-72 p-2 border rounded-lg pl-8"
        />
        <span class="absolute left-2 top-2 text-gray-400">
          <Icon name="mdi:magnify" class="h-5 w-5" />
        </span>
      </div>

      <!-- Navigation and current date range -->
      <div class="flex items-center space-x-4">
        <button
          @click="$emit('navigate', -1)"
          class="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200 ease-in-out"
        >
          <Icon name="mdi:chevron-left" class="w-5 h-5 mr-1" />
          <span>Previous</span>
        </button>

        <Transition name="fade" mode="out-in">
          <div
            :key="currentDateRange"
            class="text-lg font-semibold px-4 py-2 bg-gray-100 rounded-md"
          >
            {{ currentDateRange }}
          </div>
        </Transition>

        <button
          @click="$emit('navigate', 1)"
          class="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200 ease-in-out"
        >
          <span>Next</span>
          <Icon name="mdi:chevron-right" class="w-5 h-5 ml-1" />
        </button>
      </div>

      <!-- Filters -->
      <div class="flex items-center space-x-2">
        <div
          v-for="filter in filters"
          :key="filter.name"
          class="relative inline-block text-left"
        >
          <button
            @click="toggleFilter(filter.name)"
            class="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            ref="filterButtons"
          >
            {{ filter.name }}
            <Icon
              :name="filter.isOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'"
              class="ml-2 h-5 w-5"
            />
          </button>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <div
              v-if="filter.isOpen"
              class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white z-10"
              :style="{ minWidth: `${getButtonWidth(filter.name)}px` }"
            >
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  v-for="option in filter.options"
                  :key="option"
                  @click="selectFilter(filter.name, option)"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer whitespace-nowrap"
                  role="menuitem"
                  >{{ option }}</a
                >
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Active filters -->
    <div class="flex flex-wrap gap-2 mb-4">
      <div
        v-for="(value, key) in activeFilters"
        :key="key"
        class="px-2 py-1 rounded text-sm"
        :class="getFilterClass(key)"
      >
        {{ key }}: {{ value }}
        <button @click="$emit('remove-filter', key)" class="ml-1 font-bold">
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentDateRange: String,
  searchQuery: String,
  filters: Array,
  activeFilters: Object,
});

const emit = defineEmits([
  "update:search-query",
  "toggle-filter",
  "select-filter",
  "remove-filter",
  "navigate",
]);

const filterButtons = ref([]);

const getButtonWidth = (filterName) => {
  const button = filterButtons.value.find(
    (el) => el.textContent.trim() === filterName
  );
  return button ? button.offsetWidth : 100;
};

const toggleFilter = (filterName) => {
  emit("toggle-filter", filterName);
};

const selectFilter = (filterName, option) => {
  emit("select-filter", filterName, option);
  emit("toggle-filter", filterName);
};

const closeAllFilters = (event) => {
  if (!event.target.closest(".relative.inline-block")) {
    props.filters.forEach((filter) => {
      if (filter.isOpen) {
        emit("toggle-filter", filter.name);
      }
    });
  }
};

onMounted(() => {
  document.addEventListener("click", closeAllFilters);
});

onUnmounted(() => {
  document.removeEventListener("click", closeAllFilters);
});

const getFilterClass = (filterName) => {
  const filter = props.filters.find((f) => f.name === filterName);
  if (filter && filter.color) {
    return `bg-${filter.color}-100 text-${filter.color}-800`;
  }
  return "bg-gray-100 text-gray-800";
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
