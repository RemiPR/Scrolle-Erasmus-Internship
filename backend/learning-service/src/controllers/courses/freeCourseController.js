import {FreeCourse} from "../../schema/courses/freeCourseSchema.js";

const createCourse = async (request, response) => {
    try {
        const {title, description, imageUrl, videoUrl, language, subject, teacher, assignments, tests, durationWeeks, selfLearningMaterial, difficulty, timeCommmitment, lecturesDuration, start, end, nextLecture} = request.body;
        // TODO: check if date will be compatible with Date type of mongoose
        const newCourse = new FreeCourse({
            title: title,
            description: description,
            imageUrl: imageUrl ? imageUrl : null, // TODO: Add default image url, same to videoUrl
            videoUrl: videoUrl ? videoUrl : null,
            language: language,
            subject: subject,
            teacher: teacher,
            assignments: assignments ? assignments: [],
            tests: tests ? tests: [],
            durationWeeks: durationWeeks,
            selfLearningMaterial: selfLearningMaterial,
            difficulty: difficulty,
            timeCommmitment: timeCommmitment,
            lecturesDuration: lecturesDuration,
            start: start,
            end: end,
        });

        await FreeCourse.create(newCourse);
        response.status(201).send({message: "Course created"})
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}

export const FreeCourseController = { 
    createCourse, 
}