import {StudentGroup} from "../../schema/organisation/studentGroupSchema.js";

const create = async (request, response) => {
    try {
        const {title, subject, faculty, students, courses} = request.body;

        if(!title || !subject || !faculty || !students || !courses) {
            return response.status(400).send({message: "Please fill in all fields"});
        }

        const studentGroup = new StudentGroup({
               title: title, 
               subject: subject, 
               faculty: faculty, 
               students: students, 
               courses: courses
            });
        await StudentGroup.create(studentGroup);
        response.status(201).send({message: "Student group created successfully"});
    } catch (error) {
        response.status(500).send(error.message);
    }
}

export const StudentGroupController = { create };