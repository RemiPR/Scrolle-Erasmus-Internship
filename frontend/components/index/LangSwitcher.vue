<template>
  <div class="relative">
    <select
      id="language"
      v-model="language"
      class="appearance-none bg-gray-800 dark:bg-white border-2 border-gray-300 rounded-md px-4 py-2 pr-8 hover:border-blue-500 focus:outline-none focus:border-blue-500"
    >
      <option
        v-for="item in locales"
        :key="typeof item === 'object' ? item.code : item"
        :value="typeof item === 'object' ? item.code : item"
        class="dark:text-black"
      >
        {{ typeof item === "object" ? item.name : item }}
      </option>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white dark:text-black"
    >
      <svg
        class="w-4 h-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>
