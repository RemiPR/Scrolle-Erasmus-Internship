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
            ? 'bg-gray-700 dark:bg-gray-200 dark:text-black  text-white hover:bg-gray-800'
            : 'bg-gray-200 dark:bg-gray-700 dark:text-white text-black hover:bg-gray-300',
        ]"
      >
        {{ tab.label }}
      </button>
    </div>
    <component
      :is="activeComponent.component"
      v-bind="activeComponent.props"
      class="p-4"
    ></component>
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

// Gets component and props from an active tab
const activeComponent = computed(() => {
  const tab = props.tabs.find((tab) => tab.name === activeTab.value);
  return {
    component: tab.component,
    props: tab.props,
  };
});
</script>
