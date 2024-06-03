<template>
  <div>
    <div class="relative min-h-screen">
      <SharedVideoBackground
        ref="backgroundVideo"
        :videoSource="videoSource"
        :videoPlaying="videoPlaying"
        @update:videoPlaying="updateVideoPlaying"
      />
      <SharedVideoOverlay
        :title="$t('shared_video_overlay.title')"
        :description="$t('shared_video_overlay.description')"
        :freeCoursesText="$t('shared_video_overlay.free_courses_text')"
        :accreditedProgramsText="
          $t('shared_video_overlay.accredited_programs_text')
        "
        checkFreeCoursesLink="/free-courses"
        checkProgramsLink="/accredited-programmes"
      />
      <SharedVideoControls
        :videoRef="videoRef"
        :videoPlaying="videoPlaying"
        @toggleVideo="toggleVideo"
      />
    </div>
    <div class="container mx-auto p-4 h-screen">
      <SharedCardSection
        :title="$t('shared_card_section_first.title')"
        :dataArray="enrolledCourses"
        @openModal="handleOpenModal"
      />
      <SharedCardSection
        id="available-free-courses"
        :title="$t('shared_card_section_second.title')"
        :dataArray="courses"
        @openModal="handleOpenModal"
        class="pb-12"
      />
    </div>
    <SharedCardModal
      class="overflow-y-auto"
      v-if="showModal"
      :isVisible="showModal"
      :data="selectedCourse"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

definePageMeta({
  layout: "nav",
  navigation: "guest",
  enableScrollStyling: true,
  // middleware: ['auth', 'guest'],
});
const authStore = useAuthStore();

const backgroundVideo = ref(null);
const videoPlaying = ref(true);
const videoRef = ref(null);

const setVideoRef = () => {
  videoRef.value = backgroundVideo.value?.$refs.videoRef;
};

const toggleVideo = () => {
  if (videoPlaying.value) {
    videoRef.value.pause();
  } else {
    videoRef.value.play();
  }
  videoPlaying.value = !videoPlaying.value;
};

const updateVideoPlaying = (isPlaying) => {
  videoPlaying.value = isPlaying;
};

onMounted(() => {
  setVideoRef();
});

const videoSource = "/guest_bg_video.mp4"; // Define the video source
const showModal = ref(false);
const selectedCourse = ref({});
const modal = ref(null);

const courses = ref([
  {
    id: 1,
    title: t("courses.aesthetic_cosmetology.title"),
    imageUrl: "/advanced_aesthetic_cosmetology.jpg",
    imageUrlLowRes: "/low_res_advanced_aesthetic_cosmetology.jpg",
    videoUrl: "/advanced_aesthetic_cosmetology.mp4",
    language: t("courses.aesthetic_cosmetology.language"),
    subject: t("courses.aesthetic_cosmetology.subject"),
    price: t("courses.aesthetic_cosmetology.price"),
    certification: "99",
    duration: 10,
    selfLearningMaterial: t(
      "courses.aesthetic_cosmetology.self_learning_material"
    ),
    startDate: "2024-07-01",
    startTime: "18:00 - 19:00",
    endDate: "2024-08-01",
    endTime: "18:00 - 19:00",
    difficulty: t("courses.aesthetic_cosmetology.difficulty"),
    timeCommitment: t("courses.aesthetic_cosmetology.time_commitment"),
    lecturesDuration: t("courses.aesthetic_cosmetology.lectures_duration"),
    lecturer: "Dr. Laima Bērziņa",
    lecturerTitle: t("courses.aesthetic_cosmetology.lecturer_title"),
    lecturerImg: "/lecturer_avatar.png",
    lecturerBiography: t("courses.aesthetic_cosmetology.biography"),
    description: t("courses.aesthetic_cosmetology.description"),
  },
  {
    id: 2,
    title: t("courses.facial_cosmetic_procedures.title"),
    imageUrl: "/facial_cosmetic_procedures.jpg",
    imageUrlLowRes: "/low_res_facial_cosmetic_procedures.jpg",
    videoUrl: "/facial_cosmetic_procedures.mp4",
    language: t("courses.facial_cosmetic_procedures.language"),
    subject: t("courses.facial_cosmetic_procedures.subject"),
    price: t("courses.facial_cosmetic_procedures.price"),
    certification: "85",
    duration: 8,
    selfLearningMaterial: t(
      "courses.facial_cosmetic_procedures.self_learning_material"
    ),
    startDate: "2024-08-15",
    startTime: "16:00 - 17:00",
    endDate: "2024-09-15",
    endTime: "16:00 - 17:00",
    difficulty: t("courses.facial_cosmetic_procedures.difficulty"),
    timeCommitment: t("courses.facial_cosmetic_procedures.time_commitment"),
    lecturesDuration: t("courses.facial_cosmetic_procedures.lectures_duration"),
    lecturer: "Dr. Jane Doe",
    lecturerTitle: t("courses.facial_cosmetic_procedures.lecturer_title"),
    lecturerImg: "/lecturer_avatar.png",
    lecturerBiography: t("courses.facial_cosmetic_procedures.biography"),
    description: t("courses.facial_cosmetic_procedures.description"),
  },
  {
    id: 3,
    title: t("courses.introduction_to_physiotherapy.title"),
    imageUrl: "/physiotherapy.jpg",
    imageUrlLowRes: "/low_res_physiotherapy.jpg",
    videoUrl: "/physiotherapy.mp4",
    language: t("courses.introduction_to_physiotherapy.language"),
    subject: t("courses.introduction_to_physiotherapy.subject"),
    price: t("courses.introduction_to_physiotherapy.price"),
    certification: "70",
    duration: 6,
    selfLearningMaterial: t(
      "courses.introduction_to_physiotherapy.self_learning_material"
    ),
    startDate: "2024-09-10",
    startTime: "14:00 - 15:30",
    endDate: "2024-10-20",
    endTime: "14:00 - 15:30",
    difficulty: t("courses.introduction_to_physiotherapy.difficulty"),
    timeCommitment: t("courses.introduction_to_physiotherapy.time_commitment"),
    lecturesDuration: t(
      "courses.introduction_to_physiotherapy.lectures_duration"
    ),
    lecturer: "Dr. Alex Thompson",
    lecturerTitle: t("courses.introduction_to_physiotherapy.lecturer_title"),
    lecturerImg: "/lecturer_avatar.png",
    lecturerBiography: t("courses.introduction_to_physiotherapy.biography"),
    description: t("courses.introduction_to_physiotherapy.description"),
  },
  {
    id: 4,
    title: t("courses.communication_psychology_and_ethics.title"),
    imageUrl: "/communication_psychology_and_ethics.jpg",
    imageUrlLowRes: "/low_res_communication_psychology_and_ethics.jpg",
    videoUrl: "/communication_psychology_and_ethics.mp4",
    language: t("courses.communication_psychology_and_ethics.language"),
    subject: t("courses.communication_psychology_and_ethics.subject"),
    price: t("courses.communication_psychology_and_ethics.price"),
    certification: "85",
    duration: 12,
    selfLearningMaterial: t(
      "courses.communication_psychology_and_ethics.self_learning_material"
    ),
    startDate: "2024-10-05",
    startTime: "19:00 - 20:00",
    endDate: "2025-01-05",
    endTime: "19:00 - 20:00",
    difficulty: t("courses.communication_psychology_and_ethics.difficulty"),
    timeCommitment: t(
      "courses.communication_psychology_and_ethics.time_commitment"
    ),
    lecturesDuration: t(
      "courses.communication_psychology_and_ethics.lectures_duration"
    ),
    lecturer: "Dr. Emily Brown",
    lecturerTitle: t(
      "courses.communication_psychology_and_ethics.lecturer_title"
    ),
    lecturerImg: "/lecturer_avatar.png",
    lecturerBiography: t(
      "courses.communication_psychology_and_ethics.biography"
    ),
    description: t("courses.communication_psychology_and_ethics.description"),
  },
  {
    id: 5,
    title: t("courses.body_massage_and_feet_reflexology.title"),
    imageUrl: "/classical_body_massage_and_feet_reflexology.jpg",
    imageUrlLowRes: "/low_res_classical_body_massage_and_feet_reflexology.jpg",
    videoUrl: "/classical_body_massage_and_feet_reflexology.mp4",
    language: t("courses.body_massage_and_feet_reflexology.language"),
    subject: t("courses.body_massage_and_feet_reflexology.subject"),
    price: t("courses.body_massage_and_feet_reflexology.price"),
    certification: "90",
    duration: 4,
    selfLearningMaterial: t(
      "courses.body_massage_and_feet_reflexology.self_learning_material"
    ),
    startDate: "2024-11-01",
    startTime: "17:00 - 18:00",
    endDate: "2024-12-01",
    endTime: "17:00 - 18:00",
    difficulty: t("courses.body_massage_and_feet_reflexology.difficulty"),
    timeCommitment: t(
      "courses.body_massage_and_feet_reflexology.time_commitment"
    ),
    lecturesDuration: t(
      "courses.body_massage_and_feet_reflexology.lectures_duration"
    ),
    lecturer: "Sarah Johnson",
    lecturerTitle: t(
      "courses.body_massage_and_feet_reflexology.lecturer_title"
    ),
    lecturerImg: "/lecturer_avatar.png",
    lecturerBiography: t("courses.body_massage_and_feet_reflexology.biography"),
    description: t("courses.body_massage_and_feet_reflexology.description"),
  },
]);
const enrolledCourses = computed(() => {
  return courses.value.filter((course) =>
    authStore.enrolledCourses.includes(course.id)
  );
});
const openModal = (course) => {
  document.body.classList.add("overflow-hidden");
  selectedCourse.value = { ...course };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  document.body.classList.remove("overflow-hidden");
};

const handleOpenModal = (course) => {
  openModal(course);
};
</script>

<style scoped>
/* Page-specific styles */
</style>
