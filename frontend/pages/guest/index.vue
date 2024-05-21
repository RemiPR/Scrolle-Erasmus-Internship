<template>
  <div>
    <div class="relative min-h-screen">
      <SharedVideoBackground
        ref="backgroundVideo"
        :videoSource="videoSource"
        :videoPlaying="videoPlaying"
        @update:videoPlaying="updateVideoPlaying"
      />
      <SharedVideoOverlay />
      <SharedVideoControls
        :videoRef="videoRef"
        :videoPlaying="videoPlaying"
        @toggleVideo="toggleVideo"
      />
    </div>
    <div class="container mx-auto p-4 h-screen">
      <SharedCardsSection
        title="My Courses"
        :courses="myCourses"
        @openModal="openModal"
      />
    </div>
    <SharedCardsModal
      class="overflow-y-auto"
      v-if="showModal"
      :isVisible="showModal"
      :course="selectedCourse"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "nav",
  navigation: "guest",
  enableScrollStyling: true,
  middleware: ["auth", "guest"],
});

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

const videoSource = "/test.mp4"; // Define the video source
const myCourses = [
  {
    id: 1,
    title: "Course 1",
    imageUrl: "/path/to/image1.jpg",
    videoUrl: "/test.mp4",
    // ... other course properties
  },
  {
    id: 2,
    title: "Course 2",
    imageUrl: "/path/to/image2.jpg",
    videoUrl: "/path/to/video2.mp4",
    // ... other course properties
  },
  // ... other courses
];

const showModal = ref(false);
const selectedCourse = ref({
  id: null,
  title: "",
  imageUrl: "",
  videoUrl: "",
  price: "",
  certification: "",
  subject: "",
  duration: "",
  selfLearningMaterial: "",
  startDate: "",
  endDate: "",
  extraInformation: "",
  difficulty: "",
  timeCommitment: "",
  lecturesDuration: "",
  lecturer: "",
  lecturerTitle: "",
  lecturerImg: "",
  lecturerBiography: "",
  description: "",
});

const openModal = (course) => {
  document.body.classList.add("overflow-hidden");
  selectedCourse.value = {
    ...course,
    // Add any additional data or transformations needed
  };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  document.body.classList.remove("overflow-hidden"); // Re-enable background scroll
};
</script>

<style scoped>
/* Page-specific styles */
</style>
