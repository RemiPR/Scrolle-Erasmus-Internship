<template>
  <div class="max-w-4xl mx-auto p-8 bg-white shadow-md rounded mt-16">
    <div class="flex justify-end mb-4">
      <input
        type="text"
        placeholder="Search..."
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <table class="w-full table-auto">
      <thead>
        <tr class="bg-gray-200 text-gray-700">
          <th class="py-2 px-4 text-left">Test name</th>
          <th class="py-2 px-4 text-left">Start time</th>
          <th class="py-2 px-4 text-left">Questions</th>
          <th class="py-2 px-4 text-left">Time limit</th>
          <th class="py-2 px-4 text-left"></th>
        </tr>
      </thead>
      <tbody v-for="course in courses" :key="`course-${course.id}`">
        <tr class="border-b">
          <td colspan="5" class="py-2 px-4 font-bold">{{ course.name }}</td>
        </tr>
        <tr v-if="course.tests.length === 0" class="border-b">
          <td colspan="5" class="py-2 px-4 text-gray-500 italic">
            There are no tests in this course
          </td>
        </tr>
        <tr
          v-for="test in course.tests"
          :key="`test-${test.id}`"
          class="border-b"
        >
          <td class="py-2 px-4">{{ test.name }}</td>
          <td class="py-2 px-4">{{ test.startTime }}</td>
          <td class="py-2 px-4">{{ test.questions }}</td>
          <td class="py-2 px-4">{{ test.timeLimit }}</td>
          <td class="py-2 px-4 text-right">
            <button class="text-blue-500 hover:underline focus:outline-none">
              Details
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const courses = ref([
  {
    id: 1,
    name: "Course 1",
    tests: [
      {
        id: 1,
        name: "Test 1",
        startTime: "2024/06/15 - 15:30",
        questions: 6,
        timeLimit: "8 min.",
      },
      {
        id: 2,
        name: "Test 2",
        startTime: "Not set",
        questions: 20,
        timeLimit: "30 min.",
      },
    ],
  },
  {
    id: 2,
    name: "Course 2",
    tests: [
      {
        id: 3,
        name: "Test 1",
        startTime: "2024/06/11 - 13:15",
        questions: 10,
        timeLimit: "12 min.",
      },
      {
        id: 4,
        name: "Test 2",
        startTime: "2024/06/05 - 15:30",
        questions: 30,
        timeLimit: "35 min.",
      },
    ],
  },
  {
    id: 3,
    name: "Course 3",
    tests: [],
  },
  {
    id: 4,
    name: "Course 4",
    tests: [
      {
        id: 5,
        name: "Test 1",
        startTime: "2024/06/04 - 15:30",
        questions: 10,
        timeLimit: "12 min.",
      },
      {
        id: 6,
        name: "Test 2",
        startTime: "2024/06/03 - 16:30",
        questions: 30,
        timeLimit: "35 min.",
      },
    ],
  },
]);
</script>
