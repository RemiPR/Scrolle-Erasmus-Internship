<template>
  <div>
    <!-- Conditional rendering of content -->
    <template v-if="!showMyCourses">
      <div class="pb-64">
        <div class="container mx-auto p-4 h-screen relative">
          <SharedCardSection
            id="active-assignments"
            title="Active courses"
            :dataArray="courses"
            @openModal="handleOpenModal"
            @openMyCourses="openMyCourses"
            class="pb-12"
          />
        </div>
      </div>
    </template>

    <!-- Conditional rendering of MyCourses -->
    <template v-else>
      <EditCourses
        @backToMain="toggleMyCourses"
        :selectedCourse="selectedCourse"
      />
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EditCourses from "/components/teacher/courses/student/EditCourses.vue"; // Adjust path

const courses = ref([
  {
    id: 1,
    title: "Advanced Aesthetic Cosmetology",
    imageUrl: "/advanced_aesthetic_cosmetology.jpg",
    imageUrlLowRes: "/low_res_advanced_aesthetic_cosmetology.jpg",
    videoUrl: "/advanced_aesthetic_cosmetology.mp4",
    courseDescription: "A course on advanced aesthetic cosmetology",
    startDateText: "Start date",
    endDateText: "End date",
    startDate: "2024/06/11",
    endDate: "2024/07/11",
    ects: "3 ECTS",
  },
  {
    id: 3,
    title: "Physiotherapy",
    imageUrl: "/physiotherapy.jpg",
    imageUrlLowRes: "/low_res_physiotherapy.jpg",
    videoUrl: "/physiotherapy.mp4",
    courseDescription: "A course on Physiotherapy",
    startDateText: "Start date",
    endDateText: "End date",
    startDate: "2024/11/11",
    endDate: "2024/12/11",
    ects: "6 ECTS",
  },
]);

const showMyCourses = ref(false);
const selectedCourse = ref(null);

const toggleMyCourses = () => {
  showMyCourses.value = !showMyCourses.value;
};

const openMyCourses = (course) => {
  selectedCourse.value = course;
  toggleMyCourses();
};

// Placeholder function for handling modal
const handleOpenModal = (data) => {
  // Implement your modal logic here
};
</script>
