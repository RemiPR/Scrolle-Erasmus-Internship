export const useCoursesFilter = (courses) => {
  const activeAssignments = computed(() => {
    let allAssignments = [];
    courses.value.forEach((course) => {
      if (course.assignments) {
        course.assignments.forEach((assignment) => {
          if (assignment.grade == null) {
            allAssignments.push({
              courseId: course.id,
              title: assignment.title,
              imageUrl: course.imageUrl,
              videoUrl: course.videoUrl,
              lecturer: course.lecturer,
              assignmentTitle: assignment.title,
              assignDeadlineDate: assignment.assignDeadlineDate,
              assignDeadlineTime: assignment.assignDeadlineTime,
              nextLectureDate: course.nextLectureDate,
              nextLectureTime: course.nextLectureTime,
            });
          }
        });
      }
    });
    return allAssignments;
  });

  const completedCourses = computed(() => {
    return courses.value.filter((course) => course.completed);
  });

  const incompleteCourses = computed(() => {
    return courses.value.filter((course) => !course.completed);
  });

  return {
    activeAssignments,
    completedCourses,
    incompleteCourses,
  };
};
