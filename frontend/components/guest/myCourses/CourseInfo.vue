<!-- components/EntranceRequirements.vue -->
<template>
  <div>
    <h3 class="text-3xl font-semibold mb-14">Aesthetic cosmetology</h3>
    <div class="text-left text-xl text-gray-800 mt-12">
      <p class="mb-6">
        The course on aesthetic cosmetology at the International College of
        Cosmetology is a 1st level professional higher education program aimed
        at educating students to become beauty specialists in cosmetology, with
        a 4th professional qualification level.
      </p>
      <br />
      <p>Here are the key details:</p>
      <br />
      <ul class="list-decimal mt-6 ml-12">
        <li class="font-normal mt-2 mb-10">
          Program Duration: The program can be completed in 3 years or 3 years
          and 5 months, with options for full-time and part-time studies.
        </li>
        <li class="font-normal mt-2">
          Course Curriculum: The curriculum covers a wide range of subjects,
          including both compulsory and optional courses. Some of the courses
          offered include:
          <ul class="list-disc ml-16 my-6">
            <li class="my-6">Dermatology I & II</li>
            <li class="my-6">Anatomy, Physiology, and Nutrition</li>
            <li class="my-6">
              Various beauty procedures like Makeup, Manicure-Pedicure, and
              Aesthetic Surgery
            </li>
            <li class="my-6">Management courses such as Salon Management</li>
            <li class="my-6">
              Specialized procedures like Micropigmentation, Electrical
              Procedures, and Body Cosmetic Procedures
            </li>
            <li class="my-6">
              Basic and advanced courses in cosmetology, aesthetics, and
              health-related topics.
            </li>
          </ul>
        </li>
        <li class="font-normal mt-10">
          Educational Goals: The program aims to provide in-depth knowledge of
          skin anatomy and physiology, understand the pathological processes
          that affect the skin, and equip students with the skills to assess
          skin conditions and perform various cosmetological procedures.
        </li>
        <li class="font-normal mt-10">
          Practical Skills: Students learn various cosmetological and
          therapeutic techniques and treatments, such as mesotherapy,
          aromatherapy, and cosmetic product mixing, aiming to prepare them for
          professional practice in a variety of settings, including salons,
          spas, and medical facilities.
        </li>
        <li class="font-normal mt-10">
          Certification: Upon successful completion, students receive a
          qualification as a beauty specialist in cosmetology.
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const currentStep = ref(1);

const content = [
  {
    text: `The course on aesthetic cosmetology at the International College of Cosmetology is a 1st level professional higher education program aimed at educating students to become beauty specialists in cosmetology, with a 4th professional qualification level.\n\nHere are the key details:\n\n1. Program Duration: The program can be completed in 3 years or 3 years and 5 months, with options for full-time and part-time studies.\n\n2. Course Curriculum: The curriculum covers a wide range of subjects, including both compulsory and optional courses. Some of the courses offered include:\n\n`,
  },
];

const currentContent = computed(() => content[currentStep.value - 1]);

const formattedText = computed(() => {
  // Split text by \n\n for paragraphs and \n for line breaks
  return currentContent.value.text.split("\n").map((line) => line.trim());
});

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++;
  }
};
</script>

<style scoped>
button:disabled {
  background-color: #e2e8f0; /* Tailwind CSS bg-gray-200 */
  color: #a0aec0; /* Tailwind CSS text-gray-400 */
  cursor: not-allowed;
}
</style>
