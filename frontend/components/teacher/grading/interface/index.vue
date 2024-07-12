<!-- components/teacher/groups/grading/interface/index.vue -->
<template>
  <div class="grading-interface">
    <h3 class="text-xl font-semibold text-gray-800 mb-6">
      Grade {{ student.firstName }} {{ student.lastName }}
    </h3>

    <!-- Subject and Assignment Selection -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <select
          v-model="selectedSubject"
          @change="selectedAssignment = ''"
          class="block w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a subject</option>
          <option
            v-for="subject in subjects"
            :key="subject.id"
            :value="subject.id"
          >
            {{ subject.name }}
          </option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Assignment
        </label>
        <select
          v-model="selectedAssignment"
          :disabled="!selectedSubject"
          :class="[
            'block w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            { 'opacity-50 cursor-not-allowed bg-gray-100': !selectedSubject },
          ]"
        >
          <option value="">Select an assignment</option>
          <option
            v-for="assignment in currentAssignments"
            :key="assignment.id"
            :value="assignment.id"
          >
            {{ assignment.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- Grade Input -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Grade
        </label>
        <input
          v-model="grade"
          type="number"
          min="0"
          max="100"
          class="block w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

    <!-- Comments -->
    <div class="mb-6">
      <label class="block text-sm font-medium text-gray-700 mb-1">
        Comments
      </label>
      <textarea
        v-model="comments"
        rows="3"
        class="block w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
    </div>

    <!-- Submit Button -->
    <div class="mb-8 flex justify-center">
      <button
        @click="submitGrade"
        class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
      >
        Submit Grade
      </button>
    </div>

    <!-- Grades Overview -->
    <div class="grades-overview">
      <h4 class="text-lg font-semibold text-gray-800 mb-4">Grades Overview</h4>
      <div v-for="subject in subjects" :key="subject.id" class="mb-6">
        <h5 class="text-md font-semibold text-gray-700 mb-2">
          {{ subject.name }}
        </h5>
        <div class="bg-gray-100 p-4 rounded-md">
          <div
            v-for="assignment in subject.assignments"
            :key="assignment.id"
            class="mb-2 flex justify-between"
          >
            <span>{{ assignment.name }}:</span>
            <span class="font-medium">{{ assignment.grade || "N/A" }}</span>
          </div>
          <div
            class="mt-4 pt-2 border-t border-gray-300 flex justify-between font-semibold"
          >
            <span>Final Grade:</span>
            <span>{{ calculateFinalGrade(subject) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  student: Object,
});

const subjects = ref([
  {
    id: 1,
    name: "Mathematics",
    assignments: [
      { id: 1, name: "Midterm Exam", grade: null },
      { id: 2, name: "Final Exam", grade: null },
      { id: 3, name: "Homework", grade: null },
    ],
  },
  {
    id: 2,
    name: "Science",
    assignments: [
      { id: 4, name: "Lab Report", grade: null },
      { id: 5, name: "Quiz", grade: null },
      { id: 6, name: "Project", grade: null },
    ],
  },
  // Add more subjects as needed
]);

const selectedSubject = ref("");
const selectedAssignment = ref("");
const grade = ref("");
const comments = ref("");

const currentAssignments = computed(() => {
  if (!selectedSubject.value) return [];
  return (
    subjects.value.find((s) => s.id === selectedSubject.value)?.assignments ||
    []
  );
});

function submitGrade() {
  if (!selectedSubject.value || !selectedAssignment.value || !grade.value) {
    alert("Please fill in all required fields");
    return;
  }

  const subject = subjects.value.find((s) => s.id === selectedSubject.value);
  const assignment = subject.assignments.find(
    (a) => a.id === selectedAssignment.value
  );
  assignment.grade = parseFloat(grade.value);

  console.log("Submitting grade:", {
    studentId: props.student.id,
    subjectId: selectedSubject.value,
    assignmentId: selectedAssignment.value,
    grade: grade.value,
    comments: comments.value,
  });

  // Reset form after submission
  selectedAssignment.value = "";
  grade.value = "";
  comments.value = "";

  alert("Grade submitted successfully!");
}

function calculateFinalGrade(subject) {
  const grades = subject.assignments
    .map((a) => a.grade)
    .filter((g) => g !== null);
  if (grades.length === 0) return "N/A";
  const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  return average.toFixed(2);
}
</script>

<style scoped>
.grading-interface {
  max-width: 800px;
  margin: 0 auto;
}

select,
input[type="number"],
textarea {
  @apply bg-white;
  @apply border-2;
  @apply border-gray-300;
}

select:focus,
input[type="number"]:focus,
textarea:focus {
  @apply border-blue-500;
  @apply ring-2;
  @apply ring-blue-500;
  @apply ring-opacity-50;
}
select:disabled {
  @apply opacity-50 cursor-not-allowed bg-gray-100;
}
</style>
