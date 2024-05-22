<template>
  <div class="mt-48">
    <div>
      <p class="text-4xl mb-10 font-bold text-gray-700 dark:text-white">
        {{ title }}
      </p>
    </div>
    <ul>
      <li
        v-for="(item, index) in faqItems"
        :key="index"
        v-auto-animate
        class="mb-3 border-2 border-black dark:border-white rounded overflow-hidden bg-gray-700 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-800"
      >
        <div
          class="flex justify-between items-center cursor-pointer relative text-white dark:text-white font-semibold text-2xl py-4 px-6 select-none"
          @click="toggleQuestion(index)"
        >
          <span class="flex-grow text-left">{{ $t(item.question) }}</span>
          <span
            class="icon transition-transform ease-in-out"
            :class="{
              'text-purple-m': $root.darkMode,
              expanded: current === index,
            }"
          ></span>
        </div>
        <div
          v-if="current === index"
          class="text-left px-6 pt-4 pb-6 text-white dark:text-white text-lg"
          :class="{ 'user-select-none': true }"
        >
          <p v-html="$t(item.answer)"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});

const faqItems = ref([
  { question: "faq_question1", answer: "faq_answer1" },
  { question: "faq_question2", answer: "faq_answer2" },
  { question: "faq_question3", answer: "faq_answer3" },
  { question: "faq_question4", answer: "faq_answer4" },
  { question: "faq_question5", answer: "faq_answer5" },
]);

const current = ref(null);

const toggleQuestion = (index) => {
  current.value = current.value === index ? null : index;
};
</script>

<style>
.icon::before {
  @apply text-4xl;
  content: "+";
}

.icon.expanded::before {
  @apply text-6xl;
  content: "-";
}
</style>
