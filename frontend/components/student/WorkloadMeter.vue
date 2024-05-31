<template>
  <div class="w-full p-4 flex items-end justify-end">
      <span class="text-black font-semibold text-xl pr-2">
        {{displayText}}
      </span>
    <div class="bg-gray-200 h-8 rounded w-2/6">
      <div
        :class="colorClass"
        :style="{ width: `${coefficient * 100}%` }"
        class="h-8 rounded transition-all"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  coefficient: {
    type: Number,
    required: true
  }
});
const displayText = computed(() => `Workload: ${Math.round(props.coefficient * 100)}%`);

const colorClass = computed(() => {
  if (props.coefficient < 0.5) return 'bg-green-500';
  if (props.coefficient < 0.75) return 'bg-yellow-500';
  return 'bg-red-500';
});
</script>
