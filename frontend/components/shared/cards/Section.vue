<!-- CoursesSection.vue -->
<template>
  <div>
    <div class="mb-12">
      <span class="font-bold">{{ courses.title }}</span>
      <input
        type="text"
        class="ml-2 border border-gray-300 rounded-md px-2 py-1"
        placeholder="Search..."
      />
    </div>
    <div class="flex gap-4 mb-8">
      <SharedCardsCourse
        v-for="course in courses"
        :key="course.id"
        :course="course"
        @openModal="handleOpenModal($event)"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  courses: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["openModal"]);

const handleOpenModal = (course) => {
  emit("openModal", course);
};

const courses = [
  {
    id: 1,
    title: "Advanced Aesthetic Cosmetology",
    imageUrl: "/Grades.jpg",
    videoUrl: "/lms_course_video_1.mp4",
    subject: "Health & Beauty",
    instructor: "Dr. Jane Doe",
    price: "Free",
    certification: "99",
    duration: 10,
    selfLearningMaterial: "Available",
    startDate: "2024-07-01",
    startTime: "18:00 - 19:00",
    endDate: "2024-08-01",
    endTime: "18:00 - 19:00",
    difficulty: "For beginners",
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
    title: "Introductory Neurology",
    imageUrl: "/Communication.jpg",
    videoUrl: "/lms_course_video_2.mp4",
    subject: "Medical Science",
    instructor: "Prof. John Smith",
    duration: 8,
    startDate: "2024-08-15",
    startTime: "16:00 - 17:00",
  },
  {
    id: 3,
    title: "Masterclass in Watercolor Painting",
    imageUrl: "/FreeCourses.jpg",
    videoUrl: "/lms_course_video_3.mp4",
    subject: "Art & Design",
    instructor: "Emily Carter",
    duration: 6,
    startDate: "2024-09-10",
    startTime: "14:00 - 15:30",
  },
  {
    id: 4,
    title: "Understanding the Basics of Cryptography",
    imageUrl: "/Grades.jpg",
    videoUrl: "/lms_course_video_4.mp4",
    subject: "Computer Science",
    instructor: "Dr. Alan Turing",
    duration: 12,
    startDate: "2024-10-05",
    startTime: "19:00 - 20:00",
  },
  {
    id: 5,
    title: "Professional Development in Human Resources",
    imageUrl: "/Grades.jpg",
    videoUrl: "/lms_course_video_5.mp4",
    subject: "Business Management",
    instructor: "Sarah Johnson",
    duration: 4,
    startDate: "2024-11-01",
    startTime: "17:00 - 18:00",
  },
];
</script>
