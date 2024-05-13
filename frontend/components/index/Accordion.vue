<template>
  <div class="example accordion-example mt-48">
    <div>
      <p class="text-3xl mb-20 font-bold text-gray-700 dark:text-white">
        {{ title }}
      </p>
    </div>
    <ul class="accordion">
      <li
        class="accordion-item"
        v-for="(item, index) in faqItems"
        :key="index"
        v-auto-animate
        :style="{ marginBottom: '10px', backgroundColor: '#4A5568' }"
      >
        <div
          class="question font-semibold text-lg"
          @click="toggleQuestion(index)"
        >
          {{ $t(item.question) }}
        </div>
        <p
          class="answer text-left"
          v-if="current === index"
          v-html="$t(item.answer)"
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
  background-color: var(--ui-light);
  border-radius: 0.5em;
  overflow: hidden;
}

.question {
  padding: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.25em; /* Adjust font size here */
}
.question::before {
  content: "+";
  font-size: 1.5em;
  margin-right: 0.5em;
  color: var(--primary);
}
[data-dark-mode="true"] .question::before {
  color: var(--purple-m);
}
.answer {
  margin: 0 1rem;
  padding: 0 0 1rem 0;
  font-size: 1em;
}
</style>
