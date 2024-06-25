<template>
  <div>
    <h3 class="text-3xl font-semibold mb-14">Aesthetic cosmetology</h3>
    <div class="text-left text-xl text-gray-800 mt-12">
      <!-- Content for /guest users -->
      <template v-if="currentPage !== '/teacher'">
        <p class="mb-6">
          The course on aesthetic cosmetology at the International College of
          Cosmetology is a 1st level professional higher education program aimed
          at educating students to become beauty specialists in cosmetology,
          with a 4th professional qualification level.
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
            aromatherapy, and cosmetic product mixing, aiming to prepare them
            for professional practice in a variety of settings, including
            salons, spas, and medical facilities.
          </li>
          <li class="font-normal mt-10">
            Certification: Upon successful completion, students receive a
            qualification as a beauty specialist in cosmetology.
          </li>
        </ul>
      </template>

      <!-- Content for /teacher users -->
      <template v-else>
        <div v-for="(text, index) in content" :key="index" class="mb-6">
          <textarea
            v-model="content[index]"
            class="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>

        <ul class="list-decimal mt-6 ml-12">
          <li class="font-normal mt-2 mb-10">
            <textarea
              v-model="listItems.programDuration"
              class="w-full mb-6 p-2 border border-gray-300 rounded"
              rows="2"
            ></textarea>
          </li>

          <li class="font-normal mt-2">
            <textarea
              v-model="listItems.courseCurriculum"
              class="w-full mb-6 p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
            <ul class="list-disc ml-16 my-6">
              <li
                v-for="(course, index) in courseList"
                :key="index"
                class="my-6"
              >
                <input
                  v-model="courseList[index]"
                  class="w-full mb-2 p-2 border border-gray-300 rounded"
                />
              </li>
            </ul>
          </li>

          <li class="font-normal mt-10">
            <textarea
              v-model="listItems.educationalGoals"
              class="w-full mb-6 p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
          </li>

          <li class="font-normal mt-10">
            <textarea
              v-model="listItems.practicalSkills"
              class="w-full mb-6 p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
          </li>

          <li class="font-normal mt-10">
            <textarea
              v-model="listItems.certification"
              class="w-full mb-6 p-2 border border-gray-300 rounded"
              rows="4"
            ></textarea>
          </li>

          <!-- Save Button -->
          <div class="mt-4">
            <button
              @click="saveChanges"
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </ul>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const currentPage = computed(() => {
  const result = route.path.substring(6);
  return result;
});

const content = [
  `The course on aesthetic cosmetology at the International College of Cosmetology is a 1st level professional higher education program aimed at educating students to become beauty specialists in cosmetology, with a 4th professional qualification level.`,
  `Here are the key details:`,
];

const listItems = ref({
  programDuration:
    "Program Duration: The program can be completed in 3 years or 3 years and 5 months, with options for full-time and part-time studies.",
  courseCurriculum:
    "Course Curriculum: The curriculum covers a wide range of subjects, including both compulsory and optional courses. Some of the courses offered include:",
  educationalGoals:
    "Educational Goals: The program aims to provide in-depth knowledge of skin anatomy and physiology, understand the pathological processes that affect the skin, and equip students with the skills to assess skin conditions and perform various cosmetological procedures.",
  practicalSkills:
    "Practical Skills: Students learn various cosmetological and therapeutic techniques and treatments, such as mesotherapy, aromatherapy, and cosmetic product mixing, aiming to prepare them for professional practice in a variety of settings, including salons, spas, and medical facilities.",
  certification:
    "Certification: Upon successful completion, students receive a qualification as a beauty specialist in cosmetology.",
});

const courseList = [
  "Dermatology I & II",
  "Anatomy, Physiology, and Nutrition",
  "Various beauty procedures like Makeup, Manicure-Pedicure, and Aesthetic Surgery",
  "Management courses such as Salon Management",
  "Specialized procedures like Micropigmentation, Electrical Procedures, and Body Cosmetic Procedures",
  "Basic and advanced courses in cosmetology, aesthetics, and health-related topics.",
];

const saveChanges = () => {
  // Implement saving logic here
  console.log("Changes saved:", content, listItems.value, courseList);
};
</script>

<style scoped>
textarea {
  resize: vertical;
}
</style>
