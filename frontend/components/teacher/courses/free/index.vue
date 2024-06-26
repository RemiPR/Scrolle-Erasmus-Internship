<template>
  <div>
    <!-- Conditional rendering of content -->
    <template v-if="!showMyCourses">
      <div class="pb-64">
        <div class="container mx-auto p-4 h-screen relative">
          <SharedCardSection
            id="available-free-courses"
            :title="$t('shared_card_section_second.title')"
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
import EditCourses from "@/components/teacher/courses/student/EditCourses.vue";

const courses = ref([
  {
    id: 1,
    title: "Advanced Aesthetic Cosmetology",
    imageUrl: "/advanced_aesthetic_cosmetology.jpg",
    imageUrlLowRes: "/low_res_advanced_aesthetic_cosmetology.jpg",
    videoUrl: "/advanced_aesthetic_cosmetology.mp4",
    courseDescription: "A course on advanced aesthetic cosmetology.",
    startDateText: "Start date",
    endDateText: "End date",
    startDate: "2024/06/11",
    endDate: "2024/07/11",
    ects: "3 ECTS",
  },
  {
    id: 2,
    title: "Facial Cosmetic Procedures",
    imageUrl: "/facial_cosmetic_procedures.jpg",
    imageUrlLowRes: "/low_res_facial_cosmetic_procedures.jpg",
    videoUrl: "/facial_cosmetic_procedures.mp4",
    startDateText: "Start date",
    endDateText: "End date",
    courseDescription: "A course on facial cosmetic procedures.",
    startDate: "2024-08-15",
    endDate: "2024-09-15",
    ects: "3 ECTS",
    lecturerImg: "/lecturer_avatar.png",
  },
  {
    id: 3,
    title: "Introduction to Physiotherapy",
    imageUrl: "/physiotherapy.jpg",
    imageUrlLowRes: "/low_res_physiotherapy.jpg",
    videoUrl: "/physiotherapy.mp4",
    courseDescription: "An introduction to Physiotherapy.",
    startDateText: "Start date",
    endDateText: "End date",
    startDate: "2024-09-10",
    endDate: "2024-10-20",
    ects: "6 ECTS",
  },
  {
    id: 4,
    title: "Communication Psychology and Ethics",
    imageUrl: "/communication_psychology_and_ethics.jpg",
    imageUrlLowRes: "/low_res_communication_psychology_and_ethics.jpg",
    videoUrl: "/communication_psychology_and_ethics.mp4",
    startDate: "2024-10-05",
    endDate: "2025-01-05",
    startDateText: "Start date",
    endDateText: "End date",
    ects: "5 ECTS",
    courseDescription: "A course on communication psychology and ethics.",
  },
  {
    id: 5,
    title: "Classical Body Massage and Feet Reflexology",
    imageUrl: "/classical_body_massage_and_feet_reflexology.jpg",
    imageUrlLowRes: "/low_res_classical_body_massage_and_feet_reflexology.jpg",
    videoUrl: "/classical_body_massage_and_feet_reflexology.mp4",
    startDate: "2024-11-01",
    endDate: "2024-12-01",
    startDateText: "Start date",
    endDateText: "End date",
    ects: "4 ECTS",
    courseDescription:
      "A course about classical body massage and feet reflexology.",
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
