/*
To declare what functions you will use in <script setup>
const {assignmentsHandedIn} = useAssignmentsFilter(computed(() => props.data.assignments));
*/
export const useAssignmentsFilter = (assignments) => {
  const assignmentsHandedIn = computed(() => {
    return assignments.value.filter((assignment) => assignment.handedIn);
  });

  const assignmentsNotHandedIn = computed(() => {
    return assignments.value.filter((assignment) => !assignment.handedIn);
  });

  const assignmentsNotGraded = computed(() => {
    return assignments.value.filter((assignment) => assignment.grade == null);
  });

  const assignmentsGraded = computed(() => {
    return assignments.value.filter((assignment) => assignment.grade !== null);
  });

  return {
    assignmentsHandedIn,
    assignmentsNotHandedIn,
    assignmentsNotGraded,
    assignmentsGraded,
  };
};
