<template>
  <div class="px-4 bg-white dark:bg-gray-800 pt-40">
    <main class="text-center text-black dark:text-white w-4/6 mx-auto pb-32 mx">
      <h2 class="text-4xl font-bold mb-14">{{ $t("faq_title") }}</h2>
      <DynamicTab :tabs="faqTypeTabs" />
    </main>
  </div>
</template>
<script setup>
import DynamicTab from "@/components/shared/ui/DynamicTab.vue";
import SharedUiFaq from "@/components/shared/ui/Faq.vue";

definePageMeta({
  layout: "nav",
  navigation: "guest",
  enableScrollStyling: false,
  // middleware: ['auth', 'guest'],
});

// content for faq free courses tab
const faqFreeCourses = [
  {
    question: "faq_guest_freecourse_question1",
    answer: "faq_guest_freecourse_answer1",
  },
  {
    question: "faq_guest_freecourse_question2",
    answer: "faq_guest_freecourse_answer2",
  },
  {
    question: "faq_guest_freecourse_question3",
    answer: "faq_guest_freecourse_answer3",
  },
  {
    question: "faq_guest_freecourse_question4",
    answer: "faq_guest_freecourse_answer4",
  },
  {
    question: "faq_guest_freecourse_question5",
    answer: "faq_guest_freecourse_answer5",
  },
];

// content for admission faq tab
const faqAdmission = [
  {
    question: "faq_guest_admission_question1",
    answer: "faq_guest_admission_answer1",
  },
  {
    question: "faq_guest_admission_question2",
    answer: "faq_guest_admission_answer2",
  },
  {
    question: "faq_guest_admission_question3",
    answer: "faq_guest_admission_answer3",
  },
  {
    question: "faq_guest_admission_question4",
    answer: "faq_guest_admission_answer4",
  },
  {
    question: "faq_guest_admission_question5",
    answer: "faq_guest_admission_answer5",
  },
];
import { useI18n } from "vue-i18n";
const { t } = useI18n();

// Array of objects that contain content and name for each tab
const faqTypeTabs = [
  {
    name: "freecourses",
    label: t("faq_online_courses_button"),
    component: SharedUiFaq,
    props: {
      faqItems: faqFreeCourses,
    },
  },
  {
    name: "admission",
    label: t("faq_admission_button"),
    component: SharedUiFaq,
    props: {
      faqItems: faqAdmission,
    },
  },
];
</script>
