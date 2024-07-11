<!--components/teacher/calendar/header/index.vue-->
<template>
  <div>
    <!-- First row -->
    <div class="flex items-center mb-4 space-x-2">
      <div class="relative flex-grow">
        <input
          :value="searchQuery"
          @input="$emit('update:search-query', $event.target.value)"
          placeholder="Filter by..."
          class="w-1/3 p-2 border rounded pl-8"
        />
        <span class="absolute left-2 top-2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div
        v-for="filter in filters"
        :key="filter.name"
        class="relative inline-block text-left"
      >
        <button
          @click="toggleFilter(filter.name)"
          class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          ref="filterButtons"
        >
          {{ filter.name }}
          <svg
            class="-mr-1 ml-2 h-5 w-5 transition-transform duration-200"
            :class="{ 'transform rotate-180': filter.isOpen }"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
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
            class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
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

    <!-- Second row -->
    <div class="flex justify-between items-center mb-4">
      <div class="text-lg font-semibold">{{ currentDateRange }}</div>
      <div>
        <button
          @click="$emit('navigate', -1)"
          class="px-4 py-2 bg-gray-200 rounded mr-2 hover:bg-gray-300 transition-colors duration-200"
        >
          Previous
        </button>
        <button
          @click="$emit('navigate', 1)"
          class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
        >
          Next
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
