<template>
  <div class="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-16">
    <div class="flex flex-col sm:flex-row justify-between mb-6">
      <label class="flex items-center mb-2 sm:mb-0">
        <input
          type="checkbox"
          v-model="showInactive"
          class="mr-2 form-checkbox h-5 w-5 text-blue-600"
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
              class="py-3 px-4 text-left font-semibold"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="group in filteredGroups"
            :key="group.id"
            class="border-b hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            @click="openModal(group)"
          >
            <td v-for="key in tableKeys" :key="key" class="py-3 px-4">
              {{ group[key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <StudentModal
      v-if="selectedGroup"
      :group="selectedGroup"
      @close="selectedGroup = null"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import StudentModal from "@/components/teacher/groups/modal/index.vue";

const showInactive = ref(false);
const searchTerm = ref("");
const selectedGroup = ref(null);
const groups = ref([
  {
    id: 1,
    name: "B19-3",
    studyProgram: "Aesthetic Cosmetology",
    status: "Active - 3nd year",
    studentCount: "15",
    students: [
      {
        id: 1,
        firstName: "Dainius",
        lastName: "Juška",
        status: "Inactive",
        attendance: "27%",
        email: "dainius@gmail.com",
        startDate: "2010/09/01",
        dateOfBirth: "2000/01/01",
        endDate: "2020/09/01",
        academicHistory:
          "Enrolled into Computer science group C-17-1 in 2010/09/01 but wanted to be transferred to Aesthetic Cosmetology. Transfer date 2010/12/12.",
        academicHolidays: true,
        holidayFrom: "2010/09/01",
        holidayTo: "2018/09/01",
      },
      {
        id: 2,
        firstName: "Deividas",
        lastName: "Litvinenko",
        middleName: "Litvis",
        status: "Active",
        attendance: "27%",
        email: "deividas@gmail.com",
        startDate: "2010/09/01",
        dateOfBirth: "2000/01/01",
        endDate: "2020/09/01",
        academicHistory:
          "Enrolled into Cosmetology group C-17-1 in 2010/09/01 but wanted to be transferred to Computer Science. Transfer date 2010/12/12.",
        academicHolidays: true,
        holidayFrom: "2010/09/01",
        holidayTo: "2018/09/01",
      },
      {
        id: 3,
        firstName: "Mudassir",
        lastName: "Arafat",
        middleName: "",
        status: "Active",
        attendance: "27%",
        email: "mudassir@gmail.com",
        startDate: "2010/09/01",
        dateOfBirth: "2000/01/01",
        endDate: "2020/09/01",
        academicHistory:
          "Enrolled into Cosmetology group C-17-1 in 2010/09/01 but wanted to be transferred to Computer Science. Transfer date 2010/12/12.",
        academicHolidays: true,
        holidayFrom: "2010/09/01",
        holidayTo: "2018/09/01",
      },
      {
        id: 4,
        firstName: "Remigijus",
        lastName: "Prialgauskis",
        middleName: "",
        status: "Active",
        attendance: "27%",
        email: "remi@gmail.com",
        startDate: "2010/09/01",
        dateOfBirth: "2000/01/01",
        endDate: "2020/09/01",
        academicHistory:
          "Enrolled into Cosmetology group C-17-1 in 2010/09/01 but wanted to be transferred to Computer Science. Transfer date 2010/12/12.",
        academicHolidays: true,
        holidayFrom: "2010/09/01",
        holidayTo: "2018/09/01",
      },
      // ... more students
    ],
  },
  {
    id: 2,
    name: "A19-2",
    studyProgram: "Computer Science",
    status: "Inactive",
    studentCount: "8",
    students: [
      {
        id: 1,
        firstName: "Dainius",
        lastName: "Juška",
        status: "Inactive",
        attendance: "27%",
        email: "dainius@gmail.com",
        startDate: "2010/09/01",
        dateOfBirth: "1900/01/01",
        endDate: "2020/09/01",
        academicHistory:
          "Enrolled into Cosmetology group C-12-1 in 2010/09/01 but wanted to be transferred to Computer Science. Transfer date 2010/12/12.",
        academicHolidays: true,
        holidayFrom: "2010/09/01",
        holidayTo: "2018/09/01",
      },
      {
        id: 2,
        firstName: "Deividas",
        lastName: "Litvinenko",
        status: "Inactive",
        attendance: "27%",
        email: "deividas@gmail.com",
        startDate: "2010/09/01",
        dateOfBirth: "1900/01/01",
        endDate: "2020/09/01",
        academicHistory:
          "Enrolled into Cosmetology group C-6-9 in 2010/09/01 but wanted to be transferred to Computer Science. Transfer date 2010/12/12.",
        academicHolidays: true,
        holidayFrom: "2010/09/01",
        holidayTo: "2018/09/01",
      },
      // ... more students
    ],
  },
  // ... more groups
]);

const tableHeaders = ["Group", "Study Program", "Status", "Number of students"];
const tableKeys = ["name", "studyProgram", "status", "studentCount"];

const filteredGroups = computed(() => {
  return groups.value.filter((group) => {
    const matchesSearch =
      group.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      group.studyProgram.toLowerCase().includes(searchTerm.value.toLowerCase());
    return (
      matchesSearch &&
      (showInactive.value || group.status.toLowerCase().includes("active"))
    );
  });
});

function openModal(group) {
  selectedGroup.value = group;
}
</script>
