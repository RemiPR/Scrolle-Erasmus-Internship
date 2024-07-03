import { FreeCourse } from "../../schema/courses/freeCourseSchema.js";
import { jwtUtils } from "../../utils/jwtUtils.js";

const createCourse = async (request, response) => {
  try {
    const id = request.user.id;

    const {
      title,
      description,
      imageUrl,
      videoUrl,
      language,
      subject,
      assignments,
      tests,
      virtual,
      durationWeeks,
      selfLearningMaterial,
      difficulty,
      timeCommitment,
      lecturesDuration,
      start,
      end,
    } = request.body.course;

    if (
      !title ||
      !description ||
      !language ||
      !subject ||
      !durationWeeks ||
      !selfLearningMaterial ||
      !difficulty ||
      !virtual ||
      !timeCommitment ||
      !lecturesDuration ||
      !start ||
      !end
    ) {
      response.status(400).send({ message: "Missing required fields" });
      return;
    }

    // TODO: check if date will be compatible with Date type of mongoose
    const newCourse = new FreeCourse({
      title: title,
      description: description,
      virtual: virtual,
      imageUrl: imageUrl ? imageUrl : null, // TODO: Add default image url, same to videoUrl
      videoUrl: videoUrl ? videoUrl : null,
      language: language,
      subject: subject,
      teacher: id,
      assignments: assignments ? assignments : [],
      tests: tests ? tests : [],
      durationWeeks: durationWeeks,
      selfLearningMaterial: selfLearningMaterial,
      difficulty: difficulty,
      timeCommmitment: timeCommitment,
      lecturesDuration: lecturesDuration,
      start: start,
      end: end,
    });

    await FreeCourse.create(newCourse);
    response.status(201).send({ message: "Course created" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

export const FreeCourseController = {
  createCourse,
};
