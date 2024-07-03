async function createCourse(course, apiBaseUrl) {
  try {
    const response = await $fetch(`/api/learning/courses/free/create`, {
      method: "POST",
      baseURL: apiBaseUrl,
      credentials: "include",
      body: {
        course,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const coursesService = { createCourse };
