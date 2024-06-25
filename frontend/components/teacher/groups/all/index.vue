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
      {
        id: 5,
        firstName: "Viktorija",
        lastName: "Zarankaite",
        middleName: "Maria",
        status: "Inactive",
        attendance: "31%",
        email: "viktorija@gmail.com",
        startDate: "2011/01/15",
        dateOfBirth: "1999/03/05",
        endDate: "2019/06/20",
        academicHistory:
          "Enrolled into Business Administration group B-19-3 in 2011/01/15. Awarded best project presentation in 2012.",
        academicHolidays: true,
        holidayFrom: "2012/09/01",
        holidayTo: "2016/09/01",
      },
      {
        id: 6,
        firstName: "Egle",
        lastName: "Kazlauskaite",
        middleName: "",
        status: "Active",
        attendance: "23%",
        email: "egle@gmail.com",
        startDate: "2012/02/01",
        dateOfBirth: "2001/05/12",
        endDate: "2022/05/30",
        academicHistory:
          "Enrolled into Mechanical Engineering group M-21-2 in 2012/02/01. Completed an internship at a leading tech company in 2015.",
        academicHolidays: false,
        holidayFrom: "N/A",
        holidayTo: "N/A",
      },
      {
        id: 7,
        firstName: "Justas",
        lastName: "Baltrunas",
        middleName: "Jonas",
        status: "Inactive",
        attendance: "18%",
        email: "justas@gmail.com",
        startDate: "2013/03/10",
        dateOfBirth: "2002/07/22",
        endDate: "2021/07/15",
        academicHistory:
          "Enrolled into Biochemistry group B-20-5 in 2013/03/10. Published a research paper in a reputed journal in 2018.",
        academicHolidays: true,
        holidayFrom: "2014/09/01",
        holidayTo: "2019/09/01",
      },
      {
        id: 8,
        firstName: "Karolina",
        lastName: "Andriuskeviciute",
        middleName: "",
        status: "Active",
        attendance: "35%",
        email: "karolina@gmail.com",
        startDate: "2014/04/05",
        dateOfBirth: "2003/09/18",
        endDate: "2024/04/05",
        academicHistory:
          "Enrolled into Architecture group A-22-4 in 2014/04/05. Won a national design competition in 2017.",
        academicHolidays: false,
        holidayFrom: "N/A",
        holidayTo: "N/A",
      },
      {
        id: 9,
        firstName: "Lukas",
        lastName: "Petraitis",
        middleName: "Antanas",
        status: "Inactive",
        attendance: "20%",
        email: "lukas@gmail.com",
        startDate: "2015/05/20",
        dateOfBirth: "2004/11/27",
        endDate: "2023/05/20",
        academicHistory:
          "Enrolled into Finance group F-23-1 in 2015/05/20. Member of the student council and organized multiple events.",
        academicHolidays: true,
        holidayFrom: "2016/09/01",
        holidayTo: "2020/09/01",
      },
      {
        id: 10,
        firstName: "Simona",
        lastName: "Stankeviciute",
        middleName: "",
        status: "Active",
        attendance: "40%",
        email: "simona@gmail.com",
        startDate: "2016/06/15",
        dateOfBirth: "2005/02/14",
        endDate: "2026/06/15",
        academicHistory:
          "Enrolled into Psychology group P-25-2 in 2016/06/15. Conducted a significant research project on cognitive behavior.",
        academicHolidays: false,
        holidayFrom: "N/A",
        holidayTo: "N/A",
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
  {
    id: 3,
    name: "C19-2",
    studyProgram: "Engineering",
    status: "Inactive",
    studentCount: "4",
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
