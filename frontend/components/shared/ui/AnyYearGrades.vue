<template>
  <div>
    <div>
      <p class="text-4xl mb-10 font-bold text-gray-700 dark:text-white">
        {{ title }}
      </p>
    </div>
    <div>
      <p class="text-left text-2xl font-semibold">Course name</p>
      <hr class="mt-6 mb-8 border-t border-gray-900" />
    </div>
    <ul>
      <li
        v-for="(item, index) in faqItems"
        :key="index"
        v-auto-animate
        class="mb-3 overflow-hidden"
      >
        <hr class="border-t border-gray-900" />
        <div
          class="flex justify-between items-center cursor-pointer relative text-black dark:text-white font-semibold text-2xl py-4 px-6 select-none"
          @click="toggleQuestion(index)"
        >
          <span class="flex-grow text-left">{{ item.question }}</span>
          <span
            :class="{
              'text-purple-m': $root.darkMode,
              expanded: current === index,
            }"
          ></span>
        </div>
        <hr class="border-t border-gray-900" />
        <div
          v-if="current === index"
          class="text-left px-6 pt-4 pb-6 text-black dark:text-white text-lg"
          :class="{ 'user-select-none': true }"
        >
          <table class="w-full text-left border-collapse">
            <thead>
              <tr>
                <th class="border-t border-gray-900 p-2">No.</th>
                <th class="border-t border-gray-900 p-2">Type</th>
                <th class="border-t border-gray-900 p-2">Assignment name</th>
                <th class="border-t border-gray-900 p-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(detail, i) in item.details"
                :key="i"
                class="border-t border-gray-900"
              >
                <td class="p-2">{{ detail.no }}</td>
                <td class="p-2">{{ detail.type }}</td>
                <td class="p-2 truncate-text" :title="detail.assignmentName">
                  {{ detail.assignmentName }}
                </td>
                <td class="p-2">{{ detail.grade }}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-between items-center mt-4">
            <span class="text-lg font-bold">Final grade</span>
            <span class="text-lg font-bold">{{ item.finalGrade }}</span>
          </div>
          <hr class="border-t border-gray-900" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  faqItems: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const current = ref(null); // No item expanded by default

const toggleQuestion = (index) => {
  current.value = current.value === index ? null : index;
};
</script>

<style scoped>
.truncate-text {
  max-width: 150px; /* Adjust as needed */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
