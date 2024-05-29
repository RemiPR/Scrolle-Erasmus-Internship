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
        :courses="courses"
        @openModal="handleOpenModal"
      />
      <SharedCardsSection
        title="Available free Courses"
        :courses="courses"
        @openModal="handleOpenModal"
        class="pb-12"
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
  // middleware: ['auth', 'guest'],
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
const showModal = ref(false);
const selectedCourse = ref({});
const modal = ref(null);

const courses = [
  {
    id: 1,
    title: "Advanced Aesthetic Cosmetology",
    imageUrl: "/advanced_aesthetic_cosmetology.jpg",
    imageUrlLowRes: "/low_res_advanced_aesthetic_cosmetology.jpg",
    videoUrl: "/advanced_aesthetic_cosmetology.mp4",
    language: "Latvian",
    subject: "Health & Beauty",
    price: "Free",
    certification: "99",
    duration: 10,
    selfLearningMaterial: "Available",
    startDate: "2024-07-01",
    startTime: "18:00 - 19:00",
    endDate: "2024-08-01",
    endTime: "18:00 - 19:00",
    difficulty: "Beginner",
    timeCommitment: "3-5 hours per week",
    lecturesDuration: "1-2 hours per lecture",
    lecturer: "Dr. Laima Bērziņa",
    lecturerTitle: "Professor of Aesthetic Cosmetology",
    lecturerImg: "/lecturer_avatar.png",
    lecturerBiography:
      "Dr. Laima Bērziņa is a leading expert in Aesthetic Cosmetology with over 20 years of experience in clinical practice and research. She holds a PhD in Dermatology from the Harvard University and completed her fellowship at Harvard Medical School.\n\n Starting as a clinical dermatologist, Dr. Bērziņa quickly focused on cosmetic procedures, pioneering techniques in non-surgical facial rejuvenation and laser treatments. \n\nShe is a dedicated educator and mentor, teaching at institutions like Harvard University  and developing Aesthetic Cosmetology programs. Her research on non-invasive procedures and long-term effects of treatments is widely published, and she frequently speaks at international conferences.\n\nDr. Bērziņa promotes a collaborative learning environment, blending clinical practice with research. She also supports community health initiatives, offering free cosmetic treatments to domestic violence survivors, inspiring many with her dedication.",
    description:
      "Advanced aesthetic cosmetology is a specialized field focused on enhancing beauty and appearance through advanced skin care treatments and procedures. This field combines the latest scientific research with cutting-edge technology to offer innovative solutions for skin rejuvenation, anti-aging, and aesthetic enhancements. \n\nProfessionals in this field are trained to perform a variety of treatments that go beyond basic skincare, including laser therapies, chemical peels, and advanced facial treatments. In addition to traditional aesthetic practices, advanced cosmetologists are skilled in the use of sophisticated equipment and techniques such as micro-needling, radiofrequency treatments, and dermal fillers. \n\nThese procedures are designed to address deeper skin concerns, providing clients with more effective and long-lasting results. The aim is to improve skin texture, reduce wrinkles, and enhance overall facial aesthetics. Advanced aesthetic cosmetology also places a strong emphasis on personalized care. \n\nPractitioners conduct thorough consultations to understand each client's unique skin type and concerns, allowing them to tailor treatments accordingly. This individualized approach ensures that clients receive the most suitable and effective treatments for their specific needs, enhancing both their appearance and confidence.Continued education and training are crucial in this rapidly evolving field. \n\nProfessionals must stay updated with the latest advancements and trends to provide the best possible care. By combining artistry with scientific expertise, advanced aesthetic cosmetologists help clients achieve their desired look while maintaining the highest standards of safety and efficacy.",
  },
  {
    id: 2,
    title: "Facial Cosmetic Procedures",
    imageUrl: "/facial_cosmetic_procedures.jpg",
    imageUrlLowRes: "/low_res_facial_cosmetic_procedures.jpg",
    videoUrl: "/facial_cosmetic_procedures.mp4",
    language: "English",
    subject: "Health & Beauty",
    price: "Free",
    certification: "85",
    duration: 8,
    selfLearningMaterial: "Available",
    startDate: "2024-08-15",
    startTime: "16:00 - 17:00",
    endDate: "2024-09-15",
    endTime: "16:00 - 17:00",
    difficulty: "Intermediate",
    timeCommitment: "2-4 hours per week",
    lecturesDuration: "1-2 hours per lecture",
    lecturer: "Dr. Jane Doe",
    lecturerTitle: "Expert in Facial Cosmetic Procedures",
    lecturerImg: "/lecturer_avatar.png",
    lecturerBiography:
      "Dr. Jane Doe is a renowned specialist in facial cosmetic procedures with over 15 years of experience. She earned her PhD in Dermatology from Stanford University and has been at the forefront of developing innovative techniques in facial aesthetics. \n\nDr. Doe is highly respected for her contributions to non-invasive cosmetic procedures and her dedication to patient education. She frequently lectures at international conferences and has published numerous papers on facial rejuvenation techniques.",
    description:
      "Facial Cosmetic Procedures is a comprehensive course that explores the latest techniques and practices in facial aesthetics. This course covers a wide range of topics, including the anatomy of the face, patient assessment, and the various types of cosmetic procedures available. \n\nStudents will learn about non-surgical treatments such as Botox, fillers, and chemical peels, as well as minimally invasive procedures like laser therapy and microneedling. The course emphasizes the importance of personalized treatment plans and patient safety. \n\nPractical sessions and case studies provide hands-on experience, enabling students to develop their skills and confidence in performing facial cosmetic procedures. By the end of the course, students will be equipped with the knowledge and techniques to enhance facial beauty and address common aesthetic concerns effectively.",
  },
  {
    id: 3,
    title: "Introduction to Physiotherapy",
    imageUrl: "/physiotherapy.jpg",
    imageUrlLowRes: "/low_res_physiotherapy.jpg",
    videoUrl: "/physiotherapy.mp4",
    language: "Russian",
    subject: "Health & Wellness",
    price: "Free",
    certification: "70",
    duration: 6,
    selfLearningMaterial: "Available",
    startDate: "2024-09-10",
    startTime: "14:00 - 15:30",
    endDate: "2024-10-20",
    endTime: "14:00 - 15:30",
    difficulty: "Beginner",
    timeCommitment: "2-3 hours per week",
    lecturesDuration: "1-1.5 hours per lecture",
    lecturer: "Dr. Alex Thompson",
    lecturerTitle: "Senior Physiotherapist",
    lecturerImg: "/lecturer_avatar.png",
    lecturerBiography:
      "Dr. Alex Thompson is a highly experienced physiotherapist with over 12 years of practice in physical rehabilitation. He holds a PhD in Physiotherapy from the University of Sydney and specializes in musculoskeletal and sports injuries. \n\nDr. Thompson has worked with a variety of patients, from professional athletes to post-operative individuals, helping them regain mobility and strength. He is a dedicated educator, teaching at several universities and conducting workshops on advanced physiotherapy techniques.",
    description:
      "This course provides an introduction to the principles and practices of physiotherapy. Students will learn about the anatomy and physiology relevant to physical therapy, common conditions treated by physiotherapists, and the various therapeutic techniques used in rehabilitation. \n\nTopics include manual therapy, exercise prescription, and patient assessment. The course emphasizes evidence-based practice and hands-on skills, preparing students for real-world clinical settings. By the end of the course, students will have a solid foundation in physiotherapy, enabling them to assist in the recovery and wellness of their patients effectively.",
  },
  {
    id: 4,
    title: "Communication Psychology and Ethics",
    imageUrl: "/communication_psychology_and_ethics.jpg",
    imageUrlLowRes: "/low_res_communication_psychology_and_ethics.jpg",
    videoUrl: "/communication_psychology_and_ethics.mp4",
    language: "Latvian",
    subject: "Psychology",
    price: "Free",
    certification: "85",
    duration: 12,
    selfLearningMaterial: "Available",
    startDate: "2024-10-05",
    startTime: "19:00 - 20:00",
    endDate: "2025-01-05",
    endTime: "19:00 - 20:00",
    difficulty: "Advanced",
    timeCommitment: "4-5 hours per week",
    lecturesDuration: "1-2 hours per lecture",
    lecturer: "Dr. Emily Brown",
    lecturerTitle: "Professor of Psychology",
    lecturerImg: "/lecturer_avatar.png",
    lecturerBiography:
      "Dr. Emily Brown is a distinguished professor of psychology with a focus on communication and ethics. She earned her PhD from the University of Oxford and has been involved in extensive research on interpersonal communication and ethical behavior in professional settings. \n\nDr. Brown has published numerous articles and books on these topics and is a sought-after speaker at international psychology conferences. She is known for her dynamic teaching style and her ability to translate complex psychological theories into practical applications.",
    description:
      "This course explores the psychological principles underlying effective communication and the ethical considerations that professionals must navigate. Students will examine theories of verbal and non-verbal communication, barriers to effective communication, and strategies for improving interpersonal interactions. \n\nThe course also covers ethical dilemmas that may arise in various professional contexts and provides frameworks for ethical decision-making. Through case studies and interactive discussions, students will develop skills in ethical reasoning and effective communication, essential for both personal and professional success.",
  },
  {
    id: 5,
    title: "Classical Body Massage and Feet Reflexology",
    imageUrl: "/classical_body_massage_and_feet_reflexology.jpg",
    imageUrlLowRes: "/low_res_classical_body_massage_and_feet_reflexology.jpg",
    videoUrl: "/classical_body_massage_and_feet_reflexology.mp4",
    language: "English",
    subject: "Health & Wellness",
    price: "Free",
    certification: "90",
    duration: 4,
    selfLearningMaterial: "Available",
    startDate: "2024-11-01",
    startTime: "17:00 - 18:00",
    endDate: "2024-12-01",
    endTime: "17:00 - 18:00",
    difficulty: "Intermediate",
    timeCommitment: "2-3 hours per week",
    lecturesDuration: "1-1.5 hours per lecture",
    lecturer: "Sarah Johnson",
    lecturerTitle: "Senior Massage Therapist",
    lecturerImg: "/lecturer_avatar.png",
    lecturerBiography:
      "Sarah Johnson is an expert in massage therapy with over 20 years of experience. She holds certifications in both classical massage and reflexology from the American Massage Therapy Association. \n\nSarah has worked in various settings, including spas, wellness centers, and medical facilities, providing therapeutic massage treatments. She is passionate about holistic health and has trained many aspiring therapists in the art and science of massage and reflexology.",
    description:
      "This course provides comprehensive training in classical body massage and feet reflexology. Students will learn the fundamental techniques of massage therapy, including Swedish massage, deep tissue massage, and reflexology. \n\nThe course covers the anatomy of the body and feet, the benefits of massage, and the therapeutic effects of reflexology. Practical sessions will give students hands-on experience in performing these techniques, ensuring they can apply their knowledge effectively. By the end of the course, students will be proficient in delivering relaxing and therapeutic massage treatments to promote overall well-being.",
  },
];

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
