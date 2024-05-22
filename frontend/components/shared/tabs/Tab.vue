<!-- components/Tab.vue -->
<template>
  <div>
    <div class="flex justify-center mb-6">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        @click="activeTab = tab.name"
        :class="[
          'px-4 py-4 font-semibold text-xl select-none',
          activeTab === tab.name
            ? 'bg-gray-700 text-white hover:bg-gray-800'
            : 'bg-gray-200 hover:bg-gray-300',
        ]"
      >
        {{ tab.label }}
      </button>
    </div>
    <component :is="activeComponent" class="p-4"></component>
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const activeTab = ref(props.tabs[0].name);

const activeComponent = computed(() => {
  return props.tabs.find((tab) => tab.name === activeTab.value).component;
});
</script>
