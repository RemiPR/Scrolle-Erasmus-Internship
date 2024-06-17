<template>
  <main>
    <SharedUiAnyYearGrades
      class="mt-4"
      title="Fourth year's grades"
      :faqItems="grades"
    />
  </main>
</template>

<script setup>
const grades = [
  {
    question: "Informacinės sistemos",
    finalGrade: "8",
    details: [
      {
        no: 1,
        type: "Class test",
        assignmentName: "Advanced Aesthetic cosmetology",
        grade: "8",
      },
      {
        no: 2,
        type: "Class test",
        assignmentName: "Class exam. 1: Advanced Ae...",
        grade: "5",
      },
      {
        no: 3,
        type: "Class test",
        assignmentName: "Exam no. 1: Advanced Ae...",
        grade: "4",
      },
      {
        no: 4,
        type: "Class test",
        assignmentName: "Exam no. 1: Advanced Ae...",
        grade: "10",
      },
      {
        no: 5,
        type: "Class test",
        assignmentName: "Exam no. 1: Advanced Ae...",
        grade: "4",
      },
      {
        no: 6,
        type: "Final exam",
        assignmentName: "Exam no. 1: Advanced Ae...",
        grade: "1",
      },
    ],
  },
  { question: "Maths", details: [] },
  { question: "Literature", details: [] },
  { question: "French", details: [] },
  { question: "IT", details: [] },
  { question: "Music", details: [] },
];

const calculateAverageGrade = (details) => {
  const grades = details.map((detail) => parseFloat(detail.grade));
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
};

grades.forEach((subject) => {
  if (subject.details.length > 0) {
    subject.finalGrade = calculateAverageGrade(subject.details).toFixed(2);
  }
});
</script>
