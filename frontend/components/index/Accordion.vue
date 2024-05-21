<template>
  <div class="example accordion-example mt-48">
    <div>
      <p class="text-3xl mb-20 font-bold text-gray-700 dark:text-white">
        {{ title }}
      </p>
    </div>
    <ul class="accordion">
      <li
        class="accordion-item mb-3 border-2 border-black dark:border-white rounded overflow-hidden bg-gray-700 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-800"
        v-for="(item, index) in faqItems"
        :key="index"
        v-auto-animate
      >
        <div
          class="question text-white dark:text-white font-semibold text-lg py-4 px-6 flex justify-between items-center cursor-pointer relative"
          @click="toggleQuestion(index)"
          :style="{ userSelect: 'none' }"
        >
          <span class="text flex-grow text-left">{{ $t(item.question) }}</span>
          <span
            class="icon text-xl transition-transform ease-in-out absolute right-6 top-1/2 transform -translate-y-1/2"
            :class="{
              'text-purple-m': $root.darkMode,
              expanded: current === index,
            }"
          ></span>
        </div>
        <p
          class="answer text-left px-6 pt-4 pb-6 text-white dark:text-white"
          v-if="current === index"
          v-html="$t(item.answer)"
          :style="{ userSelect: 'none' }"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

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

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: block;
}

.question {
  padding: 1em;
  font-size: 1.25em;
}

.question .text {
  text-align: left;
}

.question .icon {
  font-size: 1.5em;
  transition: transform 0.3s ease;
  position: absolute;
  right: 1em;
  top: 50%;
  transform: translateY(-50%);
}

.icon::before {
  content: "+";
  font-size: x-large;
}

.icon.expanded::before {
  content: "-";
  font-size: larger;
}

[data-dark-mode="true"] .icon::before {
  color: var(--purple-m);
}

.answer {
  margin: 0 1rem;
  padding: 0 0 1rem 0;
  font-size: 1em;
}
</style>
