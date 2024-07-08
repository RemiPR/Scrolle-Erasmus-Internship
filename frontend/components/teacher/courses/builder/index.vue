<!-- Components/teacher/courses/builder/index.vue -->
<template>
  <div
    class="max-w-4xl mx-auto p-8 bg-white shadow-md rounded mt-16 select-none"
  >
    <div v-if="!courseCreated">
      <form @submit.prevent="createCourse">
        <div class="mb-4 select-none">
          <label class="block text-gray-700 font-bold mb-2"
            >This course will be virtual or in person?*</label
          >
          <div>
            <label class="inline-flex items-center mr-4">
              <input
                type="radio"
                name="courseLocationType"
                value="virtual"
                v-model="courseLocationType"
                class="form-radio text-indigo-600"
              />
              <span class="ml-2">Virtual</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                name="courseLocationType"
                value="inPerson"
                v-model="courseLocationType"
                class="form-radio text-indigo-600"
              />
              <span class="ml-2">In person</span>
            </label>
          </div>
        </div>
        <div class="mb-4 select-none">
          <label class="block text-gray-700 font-bold mb-2"
            >What type of course?*</label
          >
          <div>
            <label class="inline-flex items-center mr-4">
              <input
                type="radio"
                name="courseType"
                value="students"
                v-model="courseType"
                class="form-radio text-indigo-600"
              />
              <span class="ml-2">Students course</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                name="courseType"
                value="free"
                v-model="courseType"
                class="form-radio text-indigo-600"
              />
              <span class="ml-2">Free course</span>
            </label>
          </div>
        </div>

        <div class="mb-4">
          <label for="courseName" class="block text-gray-700 font-bold mb-2"
            >Name of the course*</label
          >
          <input
            type="text"
            id="courseName"
            v-model="courseName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div class="mb-4">
          <label for="category" class="block text-gray-700 font-bold mb-2"
            >Category*</label
          >
          <select
            id="category"
            v-model="category"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Informatics</option>
            <option>Cosmetology</option>
            <option>Something...</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="language" class="block text-gray-700 font-bold mb-2"
            >Language*</label
          >
          <select
            id="language"
            v-model="language"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>English</option>
            <option>Russian</option>
            <option>Latvian</option>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Image*</label>
          <div class="flex items-center">
            <button
              type="button"
              class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2"
            >
              Upload image
            </button>
            <button
              type="button"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Generate image
            </button>
          </div>
          <div
            class="mt-4 bg-gray-100 h-32 w-full flex items-center justify-center border border-dashed border-gray-300"
          >
            Image preview
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Video*</label>
          <div class="flex items-center">
            <button
              type="button"
              class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2"
            >
              Upload video
            </button>
            <button
              type="button"
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Select pre-uploaded
            </button>
          </div>
        </div>

        <div class="mb-4">
          <label for="description" class="block text-gray-700 font-bold mb-2"
            >Description*</label
          >
          <textarea
            id="description"
            v-model="description"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          ></textarea>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2"
            >Add topics, learning material, assignments etc. now or
            later?*</label
          >
          <div>
            <label class="inline-flex items-center mr-4">
              <input
                type="radio"
                name="addNowOrLater"
                value="now"
                v-model="addNowOrLater"
                class="form-radio text-indigo-600"
              />
              <span class="ml-2">Now</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                name="addNowOrLater"
                value="later"
                v-model="addNowOrLater"
                class="form-radio text-indigo-600"
              />
              <span class="ml-2">Later</span>
            </label>
          </div>
        </div>

        <TeacherAssignmentsBuilder v-if="addNowOrLater === 'now'" />

        <div
          :class="{
            'flex justify-center mt-8': addNowOrLater === 'now',
            'flex items-center justify-between': addNowOrLater === 'later',
          }"
        >
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            :class="{
              'font-semibold text-lg': addNowOrLater === 'now',
            }"
          >
            Create Course
          </button>
        </div>
      </form>
    </div>

    <!-- Success message and new course option -->
    <div v-else class="text-center">
      <div class="mb-8 p-4 bg-green-100 text-green-700 rounded">
        Course "{{ createdCourseName }}" has been successfully created!
      </div>
      <p class="mb-4 text-lg">Would you like to create another course?</p>
      <button
        @click="resetForm"
        class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold"
      >
        Yes, create another course
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const courseLocationType = ref("virtual");
const courseType = ref("students");
const courseName = ref("");
const category = ref("Informatics");
const language = ref("English");
const description = ref("");
const addNowOrLater = ref("later");

const courseCreated = ref(false);
const createdCourseName = ref("");

function createCourse() {
  const newCourse = {
    id: Date.now(), // Use a more robust ID in production
    courseLocationType: courseLocationType.value,
    courseType: courseType.value,
    name: courseName.value,
    category: category.value,
    language: language.value,
    description: description.value,
  };

  // In a real application, you'd typically send this to a backend API
  // For now, we'll just store it in localStorage
  const courses = JSON.parse(localStorage.getItem("courses") || "[]");
  courses.push(newCourse);
  localStorage.setItem("courses", JSON.stringify(courses));

  // Set the created course name and show success message
  createdCourseName.value = courseName.value;
  courseCreated.value = true;
}

function resetForm() {
  // Reset all form fields
  courseLocationType.value = "virtual";
  courseType.value = "students";
  courseName.value = "";
  category.value = "Informatics";
  language.value = "English";
  description.value = "";
  addNowOrLater.value = "later";

  // Show the form again
  courseCreated.value = false;
}
</script>
