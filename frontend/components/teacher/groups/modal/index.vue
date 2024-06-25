<template>
  <Transition name="modal-fade">
    <div
      v-if="isVisible"
      class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-hidden"
      @click.self="closeModal"
    >
      <Transition name="modal-scale">
        <div
          v-if="isVisible"
          class="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
        >
          <div class="flex justify-between items-center p-6 border-b">
            <div class="flex items-center space-x-4">
              <h2 class="text-2xl font-bold text-gray-700">
                {{ group.name }} Students
              </h2>
              <label class="flex items-center">
                <input
                  type="checkbox"
                  v-model="showInactive"
                  class="mr-2 form-checkbox h-5 w-5 text-blue-600 transition-colors duration-200"
                />
                <span class="text-sm font-medium text-gray-700 select-none"
                  >Show inactive</span
                >
              </label>
            </div>
            <div class="flex items-center space-x-2">
              <button
                class="text-gray-600 hover:text-gray-900 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center"
              >
                <Icon name="mdi:file-document-outline" class="w-6 h-6 mr-1" />
                <span class="text-sm">Generate Report</span>
              </button>
              <button
                @click="closeModal"
                class="text-gray-600 hover:text-gray-900 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <!-- Students expanded card -->
          <div class="flex-grow overflow-y-auto p-6">
            <TransitionGroup name="list" tag="div">
              <div
                v-for="(student, index) in filteredStudents"
                :key="student.id"
                class="mb-4 last:mb-0"
              >
                <div
                  @click="toggleStudent(student.id)"
                  class="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                >
                  <div class="flex items-center space-x-4">
                    <span class="text-gray-500 font-medium select-none"
                      >{{ index + 1 }}.</span
                    >
                    <span class="font-semibold"
                      >{{ student.firstName }} {{ student.lastName }}</span
                    >
                    <span class="text-gray-600 select-none"
                      >({{ student.status }})</span
                    >
                  </div>
                  <svg
                    :class="{
                      'rotate-180': expandedStudentIds.includes(student.id),
                    }"
                    class="w-5 h-5 text-gray-500 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div
                  :class="[
                    'student-details',
                    { expanded: expandedStudentIds.includes(student.id) },
                  ]"
                >
                  <div class="p-4 bg-white rounded-lg border">
                    <div class="flex justify-between items-start mb-4">
                      <h3 class="text-lg font-semibold text-gray-800">
                        {{ student.firstName }} {{ student.lastName }}'s Details
                      </h3>
                      <button
                        class="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 py-1"
                      >
                        <Icon
                          name="mdi:file-document-outline"
                          class="w-5 h-5"
                        />
                        <span>Generate Report</span>
                      </button>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        <p class="font-semibold text-sm text-gray-700">
                          Middle name
                        </p>
                        <p>{{ student.middleName || "-" }}</p>
                      </div>
                      <div>
                        <p class="font-semibold text-sm text-gray-700">Email</p>
                        <p>{{ student.email || "N/A" }}</p>
                      </div>
                      <div>
                        <p class="font-semibold text-sm text-gray-700">
                          Status
                        </p>
                        <p>{{ student.enrolmentStatus || "N/A" }}</p>
                      </div>
                      <div>
                        <p class="font-semibold text-sm text-gray-700">
                          Attendance
                        </p>
                        <p>{{ student.attendance || "N/A" }}</p>
                      </div>
                      <div>
                        <p class="font-semibold text-sm text-gray-700">
                          Enrolment Date
                        </p>
                        <p>{{ student.startDate || "N/A" }}</p>
                      </div>
                      <div>
                        <p class="font-semibold text-sm text-gray-700">
                          End Date
                        </p>
                        <p>{{ student.endDate || "N/A" }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  group: Object,
});
const emit = defineEmits(["close"]);

const expandedStudentIds = ref([]);
const showInactive = ref(false);
const isVisible = ref(true);

const filteredStudents = computed(() => {
  return props.group.students
    .filter(
      (student) =>
        showInactive.value || student.status.toLowerCase() === "active"
    )
    .sort((a, b) => {
      if (
        a.status.toLowerCase() === "active" &&
        b.status.toLowerCase() !== "active"
      )
        return -1;
      if (
        a.status.toLowerCase() !== "active" &&
        b.status.toLowerCase() === "active"
      )
        return 1;
      return a.id - b.id;
    });
});

function toggleStudent(studentId) {
  const index = expandedStudentIds.value.indexOf(studentId);
  if (index === -1) {
    expandedStudentIds.value.push(studentId);
  } else {
    expandedStudentIds.value.splice(index, 1);
  }
}

function closeModal() {
  isVisible.value = false;
  setTimeout(() => emit("close"), 300); // Delay to allow transition to complete
}

function disableBodyScroll() {
  document.body.style.overflow = "hidden";
}

function enableBodyScroll() {
  document.body.style.overflow = "";
}

onMounted(() => {
  disableBodyScroll();
});

onUnmounted(() => {
  enableBodyScroll();
});
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-scale-enter-active,
.modal-scale-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-scale-enter-from,
.modal-scale-leave-to {
  transform: scale(0.9);
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.student-details {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-out, opacity 0.3s ease-out,
    margin 0.3s ease-out;
  margin-top: 0;
}

.student-details.expanded {
  max-height: 1000px; /* Adjust based on your maximum content height */
  opacity: 1;
  margin-top: 0.5rem;
}
</style>
