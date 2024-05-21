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
    videoUrl: "/test.mp4",
    subject: "Health & Beauty",
    instructor: "Dr. Jane Doe",
    price: "Free",
    Certification: "Available for £99",
    duration: 10,
    selfLearningMaterial: "Available",
    startDate: "2024-07-01",
    startTime: "18:00 - 19:00",
    endDate: "2024-08-01",
    endTime: "18:00 - 19:00",
    difficulty: "For beginners",
    timeCommitment: "3-5 hours per week",
    lecturesDuration: "1-2 hours per lecture",
    description:
      "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
  },
  {
    id: 2,
    title: "Introductory Neurology",
    imageUrl: "/Communication.jpg",
    videoUrl: "/test.mp4",
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
    videoUrl: "/test.mp4",
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
    videoUrl: "/test.mp4",
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
    videoUrl: "/test.mp4",
    subject: "Business Management",
    instructor: "Sarah Johnson",
    duration: 4,
    startDate: "2024-11-01",
    startTime: "17:00 - 18:00",
  },
];
</script>
