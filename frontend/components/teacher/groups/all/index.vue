<template>
  <div class="max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
    <div class="flex flex-col sm:flex-row justify-between py-6 px-2">
      <label class="flex items-center mb-2 sm:mb-0">
        <input
          type="checkbox"
          v-model="showInactiveGroups"
          class="mr-2 form-checkbox h-5 w-5 text-blue-600 transition-all duration-300 ease-in-out"
        />
        <span class="text-gray-700 select-none">Show inactive groups</span>
      </label>
      <input
        type="text"
        placeholder="Search..."
        v-model="searchTerm"
        class="mt-2 sm:mt-0 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full sm:w-64 select-none"
      />
    </div>
    <div class="overflow-x-auto">
      <table class="w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-700">
            <th
              v-for="header in tableHeaders"
              :key="header"
              class="py-3 px-4 text-left font-semibold whitespace-nowrap"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="group in groups"
            :key="group.id"
            class="border-b hover:bg-gray-100 cursor-pointer group-row"
            :class="{
              '': group.status.toLowerCase() !== 'active',
              'hidden-group': !isGroupVisible(group),
            }"
            @click="isGroupVisible(group) && openModal(group)"
          >
            <td v-for="key in tableKeys" :key="key" class="py-3 px-4">
              {{ group[key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Transition name="modal">
      <StudentModal
        v-if="selectedGroup"
        :group="selectedGroup"
        @close="closeModal"
      />
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import StudentModal from "@/components/teacher/groups/modal/index.vue";

const showInactiveGroups = ref(false);
const searchTerm = ref("");
const selectedGroup = ref(null);
const groups = ref([
  {
    id: 1,
    name: "B19-3",
    studyProgram: "Aesthetic Cosmetology",
    status: "Active",
    studentCount: "15",
    students: [
      {
        id: 1,
        firstName: "Dainius",
        lastName: "Juška",
        status: "Inactive",
        enrolmentStatus: "Dropped out due to attendance issues",
        attendance: "15%",
        email: "dainius@gmail.com",
        startDate: "2024/09/01",
        endDate: "2024/06/20",
      },
      {
        id: 2,
        firstName: "Deividas",
        lastName: "Litvinenko",
        middleName: "Litvis",
        status: "Active",
        enrolmentStatus: "Enroled",
        attendance: "91%",
        email: "deividas@gmail.com",
        startDate: "2024/09/01",
        endDate: "2024/06/20",
      },
      {
        id: 3,
        firstName: "Mudassir",
        lastName: "Arafat",
        middleName: "",
        status: "Active",
        enrolmentStatus: "Enroled",
        attendance: "97%",
        email: "mudassir@gmail.com",
        startDate: "2020/09/01",
        endDate: "2024/06/20",
      },
      {
        id: 4,
        firstName: "Remigijus",
        lastName: "Prialgauskis",
        middleName: "",
        status: "Active",
        enrolmentStatus: "Dropped out due to attendance issues",
        attendance: "27%",
        email: "remi@gmail.com",
        startDate: "2020/09/01",
        endDate: "2024/06/20",
      },
      {
        id: 5,
        firstName: "Viktorija",
        lastName: "Zarankaite",
        middleName: "Maria",
        status: "Inactive",
        enrolmentStatus: "Enroled, on academic leave until 2019/06/20",
        attendance: "91%",
        email: "viktorija@gmail.com",
        startDate: "2020/09/01",
        endDate: "2024/06/20",
      },
      {
        id: 6,
        firstName: "Egle",
        lastName: "Kazlauskaite",
        middleName: "",
        status: "Active",
        enrolmentStatus: "Enroled",
        enrolmentStatus: "Enroled",
        attendance: "93%",
        email: "egle@gmail.com",
        startDate: "2020/09/01",
        endDate: "2024/06/20",
      },
      {
        id: 7,
        firstName: "Justas",
        lastName: "Baltrunas",
        middleName: "Jonas",
        status: "Inactive",
        enrolmentStatus: "Dropped out due to attendance issues",
        attendance: "18%",
        email: "justas@gmail.com",
        startDate: "2020/09/01",
        endDate: "2024/06/20",
      },
      {
        id: 8,
        firstName: "Karolina",
        lastName: "Andriuskeviciute",
        middleName: "",
        status: "Active",
        enrolmentStatus: "Enroled",
        attendance: "95%",
        email: "karolina@gmail.com",
        startDate: "2020/09/01",
        endDate: "2024/06/20",
      },
      {
        id: 9,
        firstName: "Lukas",
        lastName: "Petraitis",
        middleName: "Antanas",
        status: "Active",
        enrolmentStatus: "Enroled",
        attendance: "90%",
        email: "lukas@gmail.com",
        startDate: "2020/09/01",
        endDate: "2024/06/20",
      },
      {
        id: 10,
        firstName: "Simona",
        lastName: "Stankeviciute",
        middleName: "",
        status: "Active",
        enrolmentStatus: "Enroled",
        attendance: "80%",
        email: "simona@gmail.com",
        startDate: "2020/09/01",
        endDate: "2024/06/20",
      },

      // ... more students
    ],
  },
  {
    id: 2,
    name: "A19-3",
    studyProgram: "Computer Science",
    status: "Inactive",
    studentCount: "8",
    students: [
      {
        id: 1,
        firstName: "Dainius",
        lastName: "Juška",
        status: "Inactive",
        enrolmentStatus: "Graduated",
        attendance: "82%",
        email: "dainius@gmail.com",
        startDate: "2020/09/01",
        endDate: "2024/09/01",
      },
      {
        id: 2,
        firstName: "Deividas",
        lastName: "Litvinenko",
        status: "Inactive",
        enrolmentStatus: "Dropped out due to attendance issues",
        attendance: "27%",
        email: "deividas@gmail.com",
        startDate: "2020/09/01",
        endDate: "2024/09/01",
      },
      // ... more students
    ],
  },
  {
    id: 3,
    name: "C19-3",
    studyProgram: "Engineering",
    status: "Inactive",
    studentCount: "4",
    students: [
      {
        id: 1,
        firstName: "Dainius",
        lastName: "Juška",
        status: "Inactive",
        enrolmentStatus: "Graduated",
        attendance: "82%",
        email: "dainius@gmail.com",
        startDate: "2020/09/01",
        endDate: "2024/09/01",
      },
      {
        id: 2,
        firstName: "Deividas",
        lastName: "Litvinenko",
        status: "Inactive",
        enrolmentStatus: "Graduated",
        attendance: "77%",
        email: "deividas@gmail.com",
        startDate: "2020/09/01",
        endDate: "2024/09/01",
      },
      // ... more students
    ],
  },
  // ... more groups
]);

const tableHeaders = ["Group", "Study Program", "Status", "Number of students"];
const tableKeys = ["name", "studyProgram", "status", "studentCount"];

function isGroupVisible(group) {
  const matchesSearch =
    group.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    group.studyProgram.toLowerCase().includes(searchTerm.value.toLowerCase());
  const isActiveOrShown =
    showInactiveGroups.value || group.status.toLowerCase() === "active";
  return matchesSearch && isActiveOrShown;
}

function openModal(group) {
  selectedGroup.value = group;
}

function closeModal() {
  selectedGroup.value = null;
}
</script>

<style scoped>
.group-row {
  transition: all 0.3s ease-in-out;
  max-height: 100px; /* Adjust based on your row height */
  opacity: 1;
}

.inactive-group {
  background-color: #f3f4f6; /* Light gray background for inactive groups */
}

.hidden-group {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-width: 0;
  pointer-events: none; /* Prevents interactions with hidden rows */
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

table {
  table-layout: fixed;
}

th,
td {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
