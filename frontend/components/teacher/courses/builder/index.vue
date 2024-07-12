<!-- Components/teacher/courses/builder/index.vue -->
<template>
<div>
  <form
    @submit.prevent="onSubmit"
    class="max-w-4xl mx-auto p-8 bg-white shadow-md rounded mt-16 select-none" 
  >
    <div class="mb-4 select-none">
      <label class="block text-gray-700 font-bold mb-2"
        >This course will be virtual or in class?*</label
      >
      <span class="text-red-500">{{ errors["courseLocationType"] }}</span>
      <div>
        <label class="inline-flex items-center mr-4">
          <input
            type="radio"
            name="courseLocationType"
            value="inclass"
            class="form-radio text-indigo-600"
            v-model="courseLocationType"
          />
          <span class="ml-2">Virtual</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            name="courseLocationType"
            value="virtual"
            class="form-radio text-indigo-600"
            v-model="courseLocationType"
          />
          <span class="ml-2">In class</span>
        </label>
      </div>
    </div>
    <div class="mb-4 select-none">
      <label class="block text-gray-700 font-bold mb-2"
        >What type of course?*</label
      >
      <span class="text-red-500">{{ errors["courseType"] }}</span>
      <div>
        <label class="inline-flex items-center mr-4">
          <input
            type="radio"
            name="courseType"
            value="students"
            class="form-radio text-indigo-600"
            v-model="courseType"
          />
          <span class="ml-2">Students course</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            name="courseType"
            value="free"
            class="form-radio text-indigo-600"
            v-model="courseType"
          />
          <span class="ml-2">Free course</span>
        </label>
      </div>
    </div>

    <div class="mb-4">
      <label for="courseName" class="block text-gray-700 font-bold mb-2"
        >Name of the course*</label
      >
      <span class="text-red-500">{{ errors["courseName"] }}</span>
      <input
        type="text"
        id="courseName"
        name="courseName"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="courseName"
      />
    </div>

    <div class="mb-4">
      <label for="category" class="block text-gray-700 font-bold mb-2"
        >Category*</label
      >
      <span class="text-red-500">{{ errors["category"] }}</span>
      <select
        id="category"
        name="category"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="category"
      >
        <option>Informatics</option>
        <option>Cosmetology</option>
        <option>Something...</option>
      </select>
    </div>

    <div class="mb-4">
      <label for="language" class="block text-gray-700 font-bold mb-2"
        >Language*</label
      >
       <span class="text-red-500">{{ errors["language"] }}</span>
      <select
        id="language"
        name="language"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="language"
      >
        <option>English</option>
        <option>Russian</option>
        <option>Latvian</option>
      </select>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2">Image</label>
      
      <div class="flex items-center">
        <CldUploadWidget 
        v-slot="{ open }" 
        :options="{
          sources: ['local'], 
          multiple: false, 
          cropping: true, 
          showSkipCropButton: false,
          croppingAspectRatio: 1.5, 
          resourceType: 'image',
          cropptingCoordinatesMode: 'face'
          }"
        :signatureEndpoint="apiBaseUrl" 
        uploadPreset="ScrolleDefault"
        @success="handleSuccess"
        >
        <button class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2" type="button" @click="open">Upload an Image</button>
        </CldUploadWidget>
        <button
          type="button"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Generate image
        </button>
      </div>
      <div v-if="uploadedImageUrl">
      <h3>Uploaded Image Preview:</h3>
      <img :src="uploadedImageUrl" alt="Uploaded Image" />
    </div>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2">Video</label>
      <div class="flex items-center">
        <button
          type="button"
          class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mr-2"
        >
          Upload video
        </button>
        <button
          type="button"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Select pre-uploaded
        </button>
      </div>
    </div>

    <div class="mb-4">
      <label for="description" class="block text-gray-700 font-bold mb-2"
        >Description*</label
      >
      <span class="text-red-500">{{ errors["description"] }}</span>
      <button
          type="button"
          class="bg-blue-600 hover:bg-blue-700 text-white mb-2 px-4 py-2 rounded"
        >
          Generate description
      </button>
      <textarea
        id="description"
        name="description"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
        v-model="description"
      ></textarea>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2"
        >Add topics, learning material, assignments etc. now or later?*</label
      >
            <span class="text-red-500">{{ errors["addNowOrLater"] }}</span>
      <div>
        <label class="inline-flex items-center mr-4">
          <input
            type="radio"
            name="addNowOrLater"
            value="now"
            v-model="addNowOrLater"
            class="form-radio text-indigo-600"
          />
          <span class="ml-2">Now</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            name="addNowOrLater"
            value="later"
            v-model="addNowOrLater"
            class="form-radio text-indigo-600"
          />
          <span class="ml-2">Later</span>
        </label>
      </div>
    </div>

        <TeacherAssignmentsBuilder v-if="addNowOrLater === 'now'" />

    <div
      :class="{
        'flex justify-center mt-8': addNowOrLater === 'now',
        'flex items-center justify-between': addNowOrLater === 'later',
      }"
    >
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        :class="{
          'font-semibold text-lg': addNowOrLater === 'now',
        }"
      >
        Create Course
      </button>
    </div>
  </form>
</div>
</template>

<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
import { coursesService } from "../../../../services/learning/freeCoursesService.js";

const config = useRuntimeConfig();
const apiBaseUrl = config.public.apiBaseUrl + "/api/auth/cloudinary/sign";
const uploadedImageUrl = ref(null);

const schema = yup.object({
  courseLocationType: yup
    .string()
    .required("Please select course location type"),
  courseType: yup
    .string()
    .required("Please select course type"),
  courseName: yup
    .string()
    .required("Please enter course name"),
  category: yup
    .string()
    .required("Please select category"),
  language: yup
    .string()
    .required("Please select language"),
  description: yup
    .string()
    .required("Please enter description"),
  addNowOrLater: yup
    .string()
    .required("Please select add now or later"),
});


const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
});


const [courseLocationType] = defineField("courseLocationType");
const [courseType] = defineField("courseType");
const [courseName] = defineField("courseName");
const [category] = defineField("category");
const [language] = defineField("language");
const [description] = defineField("description");
const [addNowOrLater] = defineField("addNowOrLater");

const handleSuccess = (result) => {
  console.log("Upload successful:", result);
  uploadedImageUrl.value = result.info.secure_url;  // Get the uploaded image URL
};

const onSubmit = handleSubmit(async (values) => {
  try {
    const course = {
      title: values.courseName,
      description: values.description,
      language: values.language,
      subject: "placeholder",
      durationWeeks: 4,
      selfLearningMaterial: true,
      teacher: "6674282d092f7b31f596d58a",
      virtual: true,
      difficulty: "Beginner",
      timeCommitment: "2 hours per week",
      lecturesDuration: "1 hour",
      start: "2022-01-01",
      end: "2022-01-28",
    }
    coursesService.createCourse(values, config.public.apiBaseUrl);
    console.log("Form submitted", values);
  } catch(error) {
    console.error(error);
  }
});

</script>
