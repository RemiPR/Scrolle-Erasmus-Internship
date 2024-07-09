<template>
  <div class="pb-64">
    <div class="relative min-h-screen">
      <SharedVideoBackground
        ref="backgroundVideo"
        :videoSource="videoSource"
        :videoPlaying="videoPlaying"
        @update:videoPlaying="updateVideoPlaying"
      />

      <SharedVideoOverlay
        :scrollToElement="$refs.scrollToElement"
        title="Welcome, Emīlija!"
        :description="`You currently have ${assignmentCount(activeAssignments)} unfinished assignments.`"
        freeCoursesText="Check lectures timetable"
        accreditedProgramsText="Check my assignments"
        checkFreeCoursesLink="/free-courses"
        checkProgramsLink="/accredited-programmes"
      >
        <template #extra-text>
          <div class="space-y-4 mb-6 text-2xl text-white">
            <h4 class="text-white font-semibold">
              Your next lecture:
              <span class="italic font-bold"
                >Advanced Aesthetic Cosmetology</span
              >
            </h4>
            <h4 class="font-semibold">
              Location: <span class="italic font-bold">308 aud.</span>
            </h4>
            <h4 class="font-semibold">
              Starts at: <span class="italic font-bold">14:00</span>,
              <span class="italic font-bold">2024/05/20</span>
            </h4>
          </div>
        </template>
      </SharedVideoOverlay>
      <SharedVideoControls
        :videoRef="videoRef"
        :videoPlaying="videoPlaying"
        @toggleVideo="toggleVideo"
      />
    </div>
    <div ref="scrollToElement" class="container mx-auto p-4 h-screen relative">
      <SharedCardSection
        id="trending"
        title="Trending"
        :dataArray="trending"
        :hiddenContent="false"
        :playVideo="false"
        class="pb-12"
      />
      <SharedCardSection
        id="active-assignments"
        title="Active assignments"
        :dataArray="activeAssignments"
        @openModal="handleOpenModal"
        class="pb-12"
      />
      <SharedCardSection
        id="my-courses"
        title="My active courses"
        :dataArray="incompleteCourses"
        :assignmentList="true"
        @openModal="handleOpenModal"
        class="pb-12 z-0"
      />
      <SharedCardSection
        id="my-grades"
        title="My grades"
        :dataArray="courses"
        :assignmentGrades="true"
        @openModal="handleOpenModal"
        class="pb-12"
      />
      <SharedCardSection
        id="my-completed-courses"
        title="My completed courses"
        :dataArray="completedCourses"
        :assignmentGrades="true"
        @openModal="handleOpenModal"
        class="pb-12 mb-20"
      />
    </div>
    <SharedCardModal
      class="overflow-y-auto"
      v-if="showModal"
      :isVisible="showModal"
      :data="selectedData"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

definePageMeta({
  layout: "nav",
  navigation: "student",
  enableScrollStyling: true,
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

const videoSource = "/student_bg_video.mp4";

const showModal = ref(false);
const selectedData = ref({});
const modal = ref(null);

const openModal = (data) => {
  document.body.classList.add("overflow-hidden");
  selectedData.value = { ...data };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  document.body.classList.remove("overflow-hidden");
};

const handleOpenModal = (data) => {
  openModal(data);
};

// Functions

const assignmentCount = (activeAssignments) => {
  if(activeAssignments.length > 0) {
    return activeAssignments.length;
  } else {
    return 0;
  }
}

// Placeholder data

const trending = ref([
  {
    id: 1,
    title: "Top 10 cosmetology hacks",
    imageUrl: "/trending_dummy.jpg",
    imageUrlLowRes: "/low_res_trending_dummy.jpg",
   },
]);

const courses = ref([
  {
    id: 1,
    title: "Advanced Aesthetic Cosmetology",
    imageUrl: "/advanced_aesthetic_cosmetology.jpg",
    imageUrlLowRes: "/low_res_advanced_aesthetic_cosmetology.jpg",
    videoUrl: "/advanced_aesthetic_cosmetology.mp4",
    ects:3,
    nextLectureDate:"2024/06/01",
    nextLectureTime:"15:00",
    finalGrade: 8,
    completed: false,
    lecturer: "Dr. Laima Bērziņa",
    lecturerTitle: "Professor of Aesthetic Cosmetology",
    lecturerImg: "/lecturer_avatar.png",
    lecturerBiography:
      "Dr. Laima Bērziņa is a leading expert in Aesthetic Cosmetology with over 20 years of experience in clinical practice and research. She holds a PhD in Dermatology from the Harvard University and completed her fellowship at Harvard Medical School.\n\n Starting as a clinical dermatologist, Dr. Bērziņa quickly focused on cosmetic procedures, pioneering techniques in non-surgical facial rejuvenation and laser treatments. \n\nShe is a dedicated educator and mentor, teaching at institutions like Harvard University  and developing Aesthetic Cosmetology programs. Her research on non-invasive procedures and long-term effects of treatments is widely published, and she frequently speaks at international conferences.\n\nDr. Bērziņa promotes a collaborative learning environment, blending clinical practice with research. She also supports community health initiatives, offering free cosmetic treatments to domestic violence survivors, inspiring many with her dedication.",
    description:
      "Advanced aesthetic cosmetology is a specialized field focused on enhancing beauty and appearance through advanced skin care treatments and procedures. This field combines the latest scientific research with cutting-edge technology to offer innovative solutions for skin rejuvenation, anti-aging, and aesthetic enhancements. \n\nProfessionals in this field are trained to perform a variety of treatments that go beyond basic skincare, including laser therapies, chemical peels, and advanced facial treatments. In addition to traditional aesthetic practices, advanced cosmetologists are skilled in the use of sophisticated equipment and techniques such as micro-needling, radiofrequency treatments, and dermal fillers. \n\nThese procedures are designed to address deeper skin concerns, providing clients with more effective and long-lasting results. The aim is to improve skin texture, reduce wrinkles, and enhance overall facial aesthetics. Advanced aesthetic cosmetology also places a strong emphasis on personalized care. \n\nPractitioners conduct thorough consultations to understand each client's unique skin type and concerns, allowing them to tailor treatments accordingly. This individualized approach ensures that clients receive the most suitable and effective treatments for their specific needs, enhancing both their appearance and confidence.Continued education and training are crucial in this rapidly evolving field. \n\nProfessionals must stay updated with the latest advancements and trends to provide the best possible care. By combining artistry with scientific expertise, advanced aesthetic cosmetologists help clients achieve their desired look while maintaining the highest standards of safety and efficacy.",
    assignments: [
      {
        id: "1",
        title: "Advanced chemical peel practice",
        assignDeadlineDate: "2024/06/25",
        assignDeadlineTime: "00:00",
        handedIn: true,
        grade: 8
      },
      {
        id:"2",
        title: "Microdermabrasion theory task",
        assignDeadlineDate: "2024/06/27",
        assignDeadlineTime: "15:00",
        handedIn: false,
        grade: null
      },
      {
        id:"3",
        title: "Collagen Induction Therapy (Microneedling)",
        assignDeadlineDate: "2024/06/22",
        assignDeadlineTime: "18:00",
        handedIn: false,
        grade: null
      },
      {
        id:"4",
        title: "Non-Surgical Body Contouring Techniques",
        assignDeadlineDate: "2024/06/27",
        assignDeadlineTime: "17:00",
        completed: false,
        grade: null
      }
    ],
   },
  {
    id: 3,
    title: "Physiotherapy",
    imageUrl: "/physiotherapy.jpg",
    imageUrlLowRes: "/low_res_physiotherapy.jpg",
    videoUrl: "/physiotherapy.mp4",
    ects:3,
    nextLectureDate:"2024/06/01",
    nextLectureTime:"15:00",
    finalGrade: 6.25,
    completed: true,
    lecturer: "Dr. Alex Thompson",
    lecturerTitle: "Professor of Physiotherapy",
    lecturerImg: "/lecturer_avatar.png",
    assignments: [
      {
        id: "1",
        title: "Advanced Manual Therapy Techniques",
        assignDeadlineDate: "2024/06/25",
        assignDeadlineTime: "12:00",
        handedIn: true,
        grade: 6
      },
      {
        id: "2",
        title: "Neurorehabilitation Strategies",
        assignDeadlineDate: "2024/06/30",
        assignDeadlineTime: "16:00",
        handedIn: true,
        grade: 7
      },
      {
        id: "3",
        title: "Sports Injury Prevention and Management",
        assignDeadlineDate: "2024/06/20",
        assignDeadlineTime: "14:00",
        handedIn: true,
        grade: 6.7
      },
      {
        id: "4",
        title: "Orthopedic Physical Assessment",
        assignDeadlineDate: "2024/06/28",
        assignDeadlineTime: "11:00",
        handedIn: true,
        grade: 6.5
      }
    ]
  },
]);

// This is down here cuz courses data need to initialize first
const {activeAssignments, completedCourses, incompleteCourses} = useCoursesFilter(courses)

</script>
